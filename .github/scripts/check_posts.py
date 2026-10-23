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
