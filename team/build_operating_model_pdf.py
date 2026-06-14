#!/usr/bin/env python3
"""Render team/03-HANDBOOK.md -> team/03-handbook.pdf with Tata's palette."""
import sys
from pathlib import Path
import markdown
from weasyprint import HTML, CSS

HERE = Path(__file__).resolve().parent
SRC = HERE / "04-OPERATING-MODEL.md"
OUT = HERE / "04-OPERATING-MODEL.pdf"

CSS_STR = """
@page {
    size: A4;
    margin: 1.8cm 1.6cm;
    @bottom-center {
        content: "Pedoman Tata Kelola Tim TI · " counter(page) " / " counter(pages);
        font-family: Inter, system-ui, sans-serif;
        font-size: 8pt;
        color: #8a6f8e;
    }
}

:root {
    --mauve: #a87fb8;
    --mauve-dark: #6b4779;
    --sage: #9caf88;
    --sage-dark: #6b8454;
    --pink-soft: #f4e4ed;
    --pink-bg: #fbf3f7;
    --slate: #2d2a35;
    --slate-soft: #5a5563;
    --line: #e8dde5;
}

body {
    font-family: "Inter", "Helvetica Neue", system-ui, sans-serif;
    color: var(--slate);
    line-height: 1.55;
    font-size: 10.5pt;
}

h1 {
    color: var(--mauve-dark);
    font-size: 24pt;
    border-bottom: 3px solid var(--mauve);
    padding-bottom: 6pt;
    margin-top: 1.2em;
    margin-bottom: 0.6em;
    page-break-after: avoid;
}

h1:first-of-type {
    margin-top: 0;
    font-size: 28pt;
    text-align: center;
    border-bottom: 4px double var(--mauve);
    padding-bottom: 10pt;
}

h2 {
    color: var(--mauve-dark);
    font-size: 16pt;
    margin-top: 1.4em;
    margin-bottom: 0.5em;
    padding-left: 8pt;
    border-left: 4px solid var(--sage);
    page-break-after: avoid;
}

h3 {
    color: var(--sage-dark);
    font-size: 12.5pt;
    margin-top: 1em;
    margin-bottom: 0.3em;
    page-break-after: avoid;
}

h4 {
    color: var(--slate);
    font-size: 11pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5pt;
    margin-top: 0.8em;
    margin-bottom: 0.3em;
}

strong, b {
    color: var(--mauve-dark);
    font-weight: 700;
}

em {
    color: var(--sage-dark);
    font-style: italic;
}

a { color: var(--mauve-dark); text-decoration: none; }

blockquote {
    background: var(--pink-bg);
    border-left: 4px solid var(--mauve);
    padding: 10pt 14pt;
    margin: 0.8em 0;
    font-style: italic;
    color: var(--slate);
    font-size: 11pt;
    border-radius: 0 6pt 6pt 0;
}

blockquote strong {
    font-style: normal;
}

code {
    background: var(--pink-soft);
    color: var(--mauve-dark);
    padding: 1pt 5pt;
    border-radius: 3pt;
    font-family: "JetBrains Mono", "Menlo", monospace;
    font-size: 9.5pt;
}

pre {
    background: var(--pink-bg);
    border: 1px solid var(--line);
    border-radius: 6pt;
    padding: 10pt 12pt;
    overflow-x: auto;
    font-size: 9pt;
    line-height: 1.4;
}

pre code {
    background: transparent;
    color: var(--slate);
    padding: 0;
}

table {
    border-collapse: collapse;
    margin: 0.8em 0;
    width: 100%;
    font-size: 9.5pt;
    page-break-inside: avoid;
}

th {
    background: var(--mauve);
    color: white;
    padding: 6pt 8pt;
    text-align: left;
    font-weight: 600;
    border: 1px solid var(--mauve-dark);
}

td {
    padding: 5pt 8pt;
    border: 1px solid var(--line);
    vertical-align: top;
}

tbody tr:nth-child(even) {
    background: var(--pink-bg);
}

tbody tr:nth-child(odd) {
    background: white;
}

ul, ol {
    padding-left: 1.4em;
    margin: 0.5em 0;
}

li {
    margin-bottom: 0.25em;
}

li::marker {
    color: var(--mauve);
}

hr {
    border: none;
    border-top: 1px dashed var(--mauve);
    margin: 1.5em 0;
    page-break-after: auto;
}

/* Section page breaks before each persona */
h2 {
    page-break-before: auto;
}

/* Persona headings (1. Kakashi, 2. Killua...) start on a fresh page */
h2:has(+ blockquote) {
    page-break-before: always;
}
"""

def fix_list_blank_lines(md: str) -> str:
    """Ensure a blank line precedes any list bullet that follows a non-bullet line.

    Python-markdown's commonmark dialect requires a blank line before a list
    when the prior line is a paragraph (e.g. a bold label), otherwise it
    treats the dashes as inline text.
    """
    lines = md.split("\n")
    out = []
    for i, line in enumerate(lines):
        is_bullet = line.lstrip().startswith(("- ", "* ", "+ "))
        if is_bullet and i > 0:
            prev = lines[i - 1]
            prev_stripped = prev.strip()
            prev_is_bullet = prev_stripped.startswith(("- ", "* ", "+ "))
            prev_is_continuation = prev.startswith(" ") or prev.startswith("\t")
            if prev_stripped and not prev_is_bullet and not prev_is_continuation:
                out.append("")
        out.append(line)
    return "\n".join(out)


def main():
    md_text = SRC.read_text(encoding="utf-8")
    md_text = fix_list_blank_lines(md_text)
    html_body = markdown.markdown(
        md_text,
        extensions=["extra", "tables", "sane_lists", "toc"],
    )
    html_full = f"""<!doctype html>
<html><head><meta charset="utf-8"><title>Pedoman Tata Kelola Tim TI</title></head>
<body>{html_body}</body></html>"""
    HTML(string=html_full).write_pdf(
        OUT,
        stylesheets=[CSS(string=CSS_STR)],
    )
    print(f"PDF written: {OUT} ({OUT.stat().st_size:,} bytes)")

if __name__ == "__main__":
    main()
