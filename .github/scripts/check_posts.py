#!/usr/bin/env python3
"""Checks every ReQuisite post against the structure the site and email layouts rely on."""
import glob
import re
import sys

ALLOWED = [
    "Top 3 today",
    "Security and compliance watch",
    "AI products and models",
    "Data and analytics industry",
    "AI and the workforce",
    "Policy and regulation",
    "Off the beaten path",
    "Environmental and societal impacts",
    "Talking point of the day",
]
errors = []


def err(path, msg):
    errors.append(f"{path}: {msg}")


VISUALS = ["dots", "scale", "bar", "ring", "compare", "ranking", "countdown", "timeline", "none"]
TOPICS = {"security", "products", "data", "workforce", "policy", "environment", "offbeat", "other"}


def check_infographic(path, front):
    """Checks the optional infographic block drawn at the top of the edition page and email."""
    try:
        import yaml
    except ImportError:
        print(f"{path}: PyYAML not installed, infographic not checked")
        return
    try:
        ig = (yaml.safe_load(front) or {}).get("infographic")
    except yaml.YAMLError as e:
        err(path, f"front matter is not valid YAML: {e}")
        return
    if not isinstance(ig, dict):
        err(path, "infographic must be a block of fields")
        return
    for key in ("headline", "number", "label"):
        if not str(ig.get(key) or "").strip():
            err(path, f"infographic needs '{key}'")
    for key in ("headline", "highlight", "number", "label", "marked_label", "bar_label", "kicker"):
        val = ig.get(key)
        if val is not None and re.search(r"<[A-Za-z/!]", str(val)):
            err(path, f"infographic '{key}' contains raw HTML")
    if len(str(ig.get("number", ""))) > 8:
        err(path, "infographic 'number' should be short (8 characters or fewer), e.g. 200+ or $200B")
    visual = ig.get("visual", "none")
    num = lambda x: isinstance(x, (int, float)) and not isinstance(x, bool)
    whole = lambda x, lo, hi: isinstance(x, int) and not isinstance(x, bool) and lo <= x <= hi
    if visual not in VISUALS:
        err(path, f"infographic 'visual' must be one of {', '.join(VISUALS)}")
    elif visual == "dots":
        total, marked = ig.get("dots_total"), ig.get("dots_marked", 0)
        if not whole(total, 1, 300):
            err(path, "infographic 'dots_total' must be a whole number from 1 to 300")
        elif not whole(marked, 0, total):
            err(path, "infographic 'dots_marked' must be a whole number from 0 to dots_total")
    elif visual == "scale":
        total, marked = ig.get("units"), ig.get("units_marked", 0)
        if not whole(total, 1, 300):
            err(path, "infographic 'units' must be a whole number from 1 to 300")
        elif not whole(marked, 0, total):
            err(path, "infographic 'units_marked' must be a whole number from 0 to units")
        if not str(ig.get("unit_label") or "").strip():
            err(path, "infographic scale needs 'unit_label', e.g. \"Each square = $1 billion\"")
    elif visual == "bar":
        val, mx = ig.get("bar_value"), ig.get("bar_max")
        if not num(val) or not num(mx) or mx <= 0 or not 0 <= val <= mx:
            err(path, "infographic bar needs numbers 'bar_value' and 'bar_max' with 0 <= bar_value <= bar_max")
    elif visual == "ring":
        if not num(ig.get("percent")) or not 0 <= ig["percent"] <= 100:
            err(path, "infographic ring needs 'percent' from 0 to 100")
    elif visual in ("compare", "ranking"):
        items = ig.get("items")
        want = (2, 2) if visual == "compare" else (2, 5)
        if not isinstance(items, list) or not want[0] <= len(items) <= want[1]:
            err(path, f"infographic {visual} needs 'items': a list of {want[0]}" + ("" if want[0] == want[1] else f" to {want[1]}"))
        else:
            for i, it in enumerate(items, 1):
                if not isinstance(it, dict) or not str(it.get("label") or "").strip() or not num(it.get("value")) or it["value"] < 0:
                    err(path, f"infographic item {i} needs 'label' and a number 'value' of 0 or more ('display' is optional)")
    elif visual == "countdown":
        if not whole(ig.get("days"), 1, 120):
            err(path, "infographic countdown needs 'days', a whole number from 1 to 120")
        if not str(ig.get("deadline_label") or "").strip():
            err(path, "infographic countdown needs 'deadline_label'")
    elif visual == "timeline":
        events = ig.get("events")
        if not isinstance(events, list) or not 2 <= len(events) <= 5:
            err(path, "infographic timeline needs 'events': a list of 2 to 5")
        else:
            for i, e in enumerate(events, 1):
                if not isinstance(e, dict) or not str(e.get("date") or "").strip() or not str(e.get("label") or "").strip():
                    err(path, f"infographic event {i} needs 'date' and 'label'")
    for key in ("unit_label", "ring_label", "items_label", "deadline_label"):
        if ig.get(key) is not None and re.search(r"<[A-Za-z/!]", str(ig.get(key))):
            err(path, f"infographic '{key}' contains raw HTML")
    tiles = ig.get("tiles") or []
    if not isinstance(tiles, list) or len(tiles) > 3:
        err(path, "infographic 'tiles' must be a list of up to 3")
        return
    for i, t in enumerate(tiles, 1):
        if not isinstance(t, dict) or not str(t.get("number") or "").strip() or not str(t.get("label") or "").strip():
            err(path, f"infographic tile {i} needs 'number' and 'label'")
        elif t.get("section", "other") not in TOPICS:
            err(path, f"infographic tile {i} 'section' must be one of {', '.join(sorted(TOPICS))}")


for path in sorted(glob.glob("_posts/*.md")):
    text = open(path, encoding="utf-8").read()
    m = re.match(r"---\n(.*?)\n---\n(.*)", text, re.S)
    if not m:
        err(path, "missing front matter")
        continue
    front, body = m.groups()
    if "layout: post" not in front:
        err(path, "front matter needs 'layout: post'")
    if not re.search(r'^title: "ReQuisite: .+"$', front, re.M):
        err(path, 'front matter needs title: "ReQuisite: <date>"')
    if not re.search(r"^date: \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [+-]\d{4}$", front, re.M):
        err(path, "front matter date must look like 2026-10-23 07:30:00 -0400")
    if not re.match(r"\s*## Top 3 today\n", body):
        err(path, 'body must start with "## Top 3 today"')
    if "—" in text:
        err(path, "contains an em dash")
    if re.search(r"^infographic:", front, re.M):
        check_infographic(path, front)

    headings = re.findall(r"^## (.+)$", body, re.M)
    for h in headings:
        if h.strip() not in ALLOWED:
            err(path, f'unknown section heading "{h}" (allowed: {", ".join(ALLOWED)})')
    if len(set(headings)) != len(headings):
        err(path, "duplicate section heading")
    if "Talking point of the day" not in headings:
        err(path, 'missing "Talking point of the day"')

    # Raw HTML is passed through to the public site and the email, so it is not allowed
    # (outside code spans and Markdown autolinks).
    stripped = re.sub(r"`[^`]*`", "", body)
    stripped = re.sub(r"<https?://[^>\s]+>", "", stripped)
    for lineno, line in enumerate(stripped.splitlines(), 1):
        if re.search(r"<[A-Za-z/!]", line):
            err(path, f"raw HTML in body (body line {lineno}); escape < and > from source text")

    # Every section other than Top 3 should have at least one bold headline paragraph.
    for block in re.split(r"^## ", body, flags=re.M)[1:]:
        title, _, rest = block.partition("\n")
        if title.strip() in ("Top 3 today", "Talking point of the day"):
            continue
        if not re.search(r"^\*\*[^*\n]+\*\*\s*$", rest, re.M):
            err(path, f'section "{title.strip()}" has no item (omit empty sections)')

if errors:
    print("\n".join(errors))
    sys.exit(1)
print("All posts passed.")
