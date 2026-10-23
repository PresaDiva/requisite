// Paginates the "All ReQuisites" list on the home page, 10 per page.
// Without JavaScript the full list is still shown.
(function () {
  var PER_PAGE = 10;
  var root = document.getElementById('archive');
  if (!root) return;
  var items = Array.prototype.slice.call(root.querySelectorAll('.archive-list > li'));
  if (items.length <= PER_PAGE) return;

  var pages = Math.ceil(items.length / PER_PAGE);
  var page = 1;
  var m = /[?&]page=(\d+)/.exec(location.search);
  if (m) page = Math.min(Math.max(parseInt(m[1], 10) || 1, 1), pages);

  var nav = document.createElement('nav');
  nav.className = 'pagination';
  nav.setAttribute('aria-label', 'ReQuisite archive pages');
  root.appendChild(nav);

  function button(label, target, opts) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'page-btn' + (opts.current ? ' is-current' : '');
    b.textContent = label;
    if (opts.aria) b.setAttribute('aria-label', opts.aria);
    if (opts.current) b.setAttribute('aria-current', 'page');
    if (opts.disabled) b.disabled = true;
    b.addEventListener('click', function () { go(target, true); });
    return b;
  }

  function render() {
    items.forEach(function (li, i) {
      li.hidden = Math.floor(i / PER_PAGE) + 1 !== page;
    });
    // Hide month headings and lists that have nothing on this page.
    Array.prototype.forEach.call(root.querySelectorAll('.archive-list'), function (ul) {
      var any = Array.prototype.some.call(ul.children, function (li) { return !li.hidden; });
      ul.hidden = !any;
      var h = ul.previousElementSibling;
      if (h && h.classList.contains('month')) h.hidden = !any;
    });
    nav.textContent = '';
    nav.appendChild(button('Previous', page - 1, { disabled: page === 1, aria: 'Previous page' }));
    for (var p = 1; p <= pages; p++) {
      if (p === 1 || p === pages || Math.abs(p - page) <= 1) {
        nav.appendChild(button(String(p), p, { current: p === page, aria: 'Page ' + p }));
      } else if (nav.lastChild && nav.lastChild.className !== 'page-gap') {
        var gap = document.createElement('span');
        gap.className = 'page-gap';
        gap.setAttribute('aria-hidden', 'true');
        gap.textContent = '…';
        nav.appendChild(gap);
      }
    }
    nav.appendChild(button('Next', page + 1, { disabled: page === pages, aria: 'Next page' }));
  }

  function go(p, scroll) {
    page = Math.min(Math.max(p, 1), pages);
    render();
    try {
      var url = page === 1 ? location.pathname : location.pathname + '?page=' + page;
      history.replaceState(null, '', url + '#archive');
    } catch (e) {}
    if (scroll) root.scrollIntoView({ behavior: 'auto', block: 'start' });
  }

  render();
})();
