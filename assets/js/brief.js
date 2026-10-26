// Turns the plain Markdown of a brief into scannable, colour-coded sections and item cards.
// Without JavaScript the brief still reads as normal headings and paragraphs.
(function () {
  var body = document.getElementById('brief-body');
  if (!body) return;

  var LABELS = [
    ['Why it matters:', 'why'],
    ['Source:', 'source'],
    ['Sources:', 'source'],
    ['What happened:', 'field'],
    ['Who could be affected and how:', 'field affected'],
    ['Actions to take:', 'field act'],
    ['Suggested:', 'field suggested']
  ];

  // Each topic gets its own colour, icon and one-line description.
  var TOPICS = {
    security: { blurb: 'Breaches, vulnerabilities, enforcement and deadlines to act on',
      icon: '<path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6l8-3z"/><path d="M12 8v5"/><path d="M12 16.5h.01"/>' },
    products: { blurb: 'New releases, capabilities, pricing and tools from AI labs and platforms',
      icon: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M10 2v4M14 2v4M10 18v4M14 18v4M2 10h4M2 14h4M18 10h4M18 14h4"/>' },
    data: { blurb: 'Data platforms, BI, data engineering and analytics practice',
      icon: '<path d="M4 20V11"/><path d="M10 20V5"/><path d="M16 20v-6"/><path d="M21 20H3"/>' },
    workforce: { blurb: 'Adoption, jobs, teams and how people work alongside AI',
      icon: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M17.5 14.6c2.1.3 3.5 1.9 4 4.4"/>' },
    policy: { blurb: 'Laws, regulators, governance and responsible-AI standards',
      icon: '<path d="M12 3v18"/><path d="M8 21h8"/><path d="M5 7h14"/><path d="M5 7l-3 7a3.5 3.5 0 0 0 6 0z"/><path d="M19 7l-3 7a3.5 3.5 0 0 0 6 0z"/>' },
    environment: { blurb: 'Energy, water, data centers, equity and wider social effects',
      icon: '<path d="M5 20c0-9 6-15 15-15 0 9-6 15-14 15"/><path d="M5 20c3-5 6-8.5 10-11"/>' },
    offbeat: { blurb: 'Credible research and reporting from outside the mainstream news cycle',
      icon: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>' },
    talking: { blurb: 'One idea worth raising with clients this week',
      icon: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>' }
  };

  var SHORT = { security: 'Security', products: 'Products', data: 'Data', workforce: 'Workforce',
    policy: 'Policy', environment: 'Impacts', offbeat: 'Off the path', talking: 'Talking point' };

  function kindOf(title) {
    var t = title.toLowerCase();
    if (t.indexOf('top 3') === 0) return 'top3';
    if (t.indexOf('security') !== -1 || t.indexOf('compliance') !== -1) return 'security';
    if (t.indexOf('talking point') === 0) return 'talking';
    if (t.indexOf('beaten path') !== -1) return 'offbeat';
    if (t.indexOf('sources and checks') === 0) return 'checks';
    if (t.indexOf('workforce') !== -1 || t.indexOf('jobs') !== -1) return 'workforce';
    if (t.indexOf('policy') !== -1 || t.indexOf('regulation') !== -1) return 'policy';
    if (t.indexOf('environment') !== -1 || t.indexOf('societal') !== -1) return 'environment';
    if (t.indexOf('data') !== -1 || t.indexOf('analytics') !== -1) return 'data';
    if (t.indexOf('product') !== -1 || t.indexOf('model') !== -1) return 'products';
    return 'other';
  }

  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function svg(paths) {
    return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
  }

  function isHeadline(el) {
    if (el.tagName !== 'P') return false;
    var kids = Array.prototype.filter.call(el.childNodes, function (n) {
      return !(n.nodeType === 3 && !n.textContent.trim());
    });
    return kids.length === 1 && kids[0].tagName === 'STRONG';
  }

  function labelParagraph(p) {
    var text = p.textContent.trim();
    for (var i = 0; i < LABELS.length; i++) {
      if (text.indexOf(LABELS[i][0]) === 0) {
        p.className = (p.className + ' ' + LABELS[i][1]).trim();
        var first = p.firstChild;
        if (first && first.nodeType === 3 && first.textContent.indexOf(LABELS[i][0]) !== -1) {
          first.textContent = first.textContent.replace(LABELS[i][0], '');
          var tag = document.createElement('span');
          tag.className = 'label';
          tag.textContent = LABELS[i][0].replace(':', '');
          p.insertBefore(tag, p.firstChild);
        }
        return;
      }
    }
  }

  // 1. Split the body into sections at each h2.
  var nodes = Array.prototype.slice.call(body.children);
  var sections = [];
  var current = null;
  nodes.forEach(function (el) {
    if (el.tagName === 'H2') {
      var title = el.textContent.trim();
      var kind = kindOf(title);
      current = document.createElement('section');
      current.className = 'sec sec-' + kind;
      current.setAttribute('data-topic', kind);
      current.id = el.id || slug(title);
      el.removeAttribute('id');
      current.appendChild(el);
      sections.push({ el: current, title: title, kind: kind, h2: el });
    } else if (current) {
      current.appendChild(el);
    }
  });
  sections.forEach(function (s) { body.appendChild(s.el); });

  // 2. Cards, labels, and a coloured header band for each topic section.
  var topicNo = 0;
  sections.forEach(function (s) {
    var kids = Array.prototype.slice.call(s.el.children).slice(1);
    var card = null;
    var count = 0;
    kids.forEach(function (el) {
      if (el.tagName === 'P') labelParagraph(el);
      if (isHeadline(el)) {
        card = document.createElement('div');
        card.className = 'card';
        el.className = 'card-title';
        s.el.insertBefore(card, el);
        if (s.kind !== 'top3' && s.kind !== 'talking') {
          var top = document.createElement('div');
          top.className = 'card-top';
          top.innerHTML = '<span class="card-no" aria-hidden="true"></span><span class="card-tag"></span>';
          top.lastChild.textContent = SHORT[s.kind] || 'More';
          card.appendChild(top);
        }
        card.appendChild(el);
        count++;
      } else if (card) {
        card.appendChild(el);
      }
    });
    s.count = count;
    var meta = TOPICS[s.kind];
    if (!meta) return;
    if (s.kind !== 'talking' && s.kind !== 'security') topicNo++;

    var head = document.createElement('header');
    head.className = 'sec-head';
    var icon = document.createElement('span');
    icon.className = 'sec-icon';
    icon.innerHTML = svg(meta.icon);
    var text = document.createElement('div');
    text.className = 'sec-text';
    var kicker = document.createElement('p');
    kicker.className = 'sec-kicker';
    kicker.textContent = s.kind === 'security' ? 'Watch list' : s.kind === 'talking' ? 'For clients' : 'Section ' + (topicNo < 10 ? '0' : '') + topicNo;
    var blurb = document.createElement('p');
    blurb.className = 'sec-blurb';
    blurb.textContent = meta.blurb;
    s.h2.className = 'sec-title';
    s.el.insertBefore(head, s.h2);
    text.appendChild(kicker);
    text.appendChild(s.h2);
    text.appendChild(blurb);
    head.appendChild(icon);
    head.appendChild(text);
    if (s.kind !== 'talking') {
      var badge = document.createElement('span');
      badge.className = 'sec-count';
      badge.textContent = count + (count === 1 ? ' item' : ' items');
      head.appendChild(badge);
    }
  });

  // Full-width page background per section: sections alternate two muted tones.
  var tone = 0;
  sections.forEach(function (s) {
    if (s.kind === 'top3' || s.kind === 'checks') return;
    s.el.setAttribute('data-tone', tone % 2 === 0 ? 'a' : 'b');
    tone++;
  });

  // 3. Colour-coded jump links.
  var toc = document.getElementById('toc');
  if (toc && sections.length > 2) {
    sections.forEach(function (s) {
      if (s.kind === 'checks') return;
      var a = document.createElement('a');
      a.href = '#' + s.el.id;
      a.className = 'chip';
      a.setAttribute('data-topic', s.kind);
      a.innerHTML = '<span class="chip-dot" aria-hidden="true"></span>';
      a.appendChild(document.createTextNode(s.title));
      if (s.count && s.kind !== 'top3' && s.kind !== 'talking') {
        var n = document.createElement('span');
        n.className = 'chip-count';
        n.textContent = s.count;
        n.setAttribute('aria-label', s.count + (s.count === 1 ? ' item' : ' items'));
        a.appendChild(n);
      }
      toc.appendChild(a);
    });
    toc.parentNode.hidden = false;
  }

  // 4. Open source links in a new tab.
  body.querySelectorAll('a[href^="http"]').forEach(function (a) {
    a.target = '_blank';
    a.rel = 'noopener';
  });
})();
