#!/usr/bin/env python3
"""Compile a persona's dossier (PERSONA + PLAYBOOK + CHARTER + tools/) into one PDF.

Usage:
    python3 build_dossier_pdf.py <persona_folder> [output.pdf]

Example:
    python3 build_dossier_pdf.py kakashi
    -> writes kakashi/kakashi-dossier.pdf

Compiles in-memory (no stale intermediate file). Palette = Tata's (mauve/sage/pink).
"""
import sys
import datetime
from pathlib import Path
import markdown
from weasyprint import HTML, CSS

FOLDER = Path(sys.argv[1]).resolve()
NAME = FOLDER.name
OUT = Path(sys.argv[2]).resolve() if len(sys.argv) > 2 else FOLDER / f"{NAME}-dossier.pdf"
TODAY = datetime.date.today().isoformat()

FRAMEWORKS = ("COBIT 2019 · GCG/TARIF · TOGAF · ITIL 4 · "
              "ISO/IEC 25010 · ISO/IEC 27001 · IEEE 1028 · PMBOK/BABOK")

# Order matters: identity -> operational -> formal -> tools
def _folder_files(sub: str) -> list[Path]:
    """README first, then the rest sorted."""
    d = FOLDER / sub
    if not d.is_dir():
        return []
    out = []
    readme = d / "README.md"
    if readme.exists():
        out.append(readme)
    for f in sorted(d.glob("*.md")):
        if f.name != "README.md":
            out.append(f)
    return out


def collect_files() -> list[Path]:
    files = []
    for fixed in ("PERSONA.md", "PLAYBOOK.md", "CHARTER.md"):
        p = FOLDER / fixed
        if p.exists():
            files.append(p)
    files += _folder_files("sop")
    files += _folder_files("tools")
    return files


def build_markdown() -> str:
    title = NAME.capitalize()
    parts = [
        f"# {title.upper()} — DOSSIER LENGKAP\n",
        "## Persona · Playbook · Charter · Tools\n",
        f"**Tata-Eleven**  ·  **Disusun:** {TODAY}\n",
        f"**Comply tata kelola IT:** {FRAMEWORKS}\n",
        "\n---\n",
        "## Daftar Isi\n",
    ]
    files = collect_files()
    for i, f in enumerate(files, 1):
        rel = f.relative_to(FOLDER)
        parts.append(f"{i}. `{rel}`\n")
    parts.append("\n---\n")
    for f in files:
        parts.append('\n\n<div style="page-break-before: always"></div>\n\n')
        parts.append(f.read_text(encoding="utf-8"))
    return "\n".join(parts)


CSS_STR = """
@page {
    size: A4;
    margin: 1.8cm 1.6cm;
    @bottom-center {
        content: "__TITLE__ Dossier · Tata-Eleven · " counter(page) " / " counter(pages);
        font-family: Inter, system-ui, sans-serif;
        font-size: 8pt;
        color: #8a6f8e;
    }
}
:root {
    --mauve: #a87fb8; --mauve-dark: #6b4779;
    --sage: #9caf88; --sage-dark: #6b8454;
    --pink-soft: #f4e4ed; --pink-bg: #fbf3f7;
    --slate: #2d2a35; --line: #e8dde5;
}
body {
    font-family: "Inter", "Helvetica Neue", "DejaVu Sans", system-ui, sans-serif;
    color: var(--slate); line-height: 1.55; font-size: 10.5pt;
}
h1 {
    color: var(--mauve-dark); font-size: 22pt;
    border-bottom: 3px solid var(--mauve); padding-bottom: 6pt;
    margin-top: 0; margin-bottom: 0.6em; page-break-after: avoid;
}
h1:first-of-type {
    font-size: 28pt; text-align: center;
    border-bottom: 4px double var(--mauve); padding-bottom: 10pt;
}
h2 {
    color: var(--mauve-dark); font-size: 15pt; margin-top: 1.3em; margin-bottom: 0.5em;
    padding-left: 8pt; border-left: 4px solid var(--sage); page-break-after: avoid;
}
h3 { color: var(--sage-dark); font-size: 12pt; margin-top: 1em; margin-bottom: 0.3em; page-break-after: avoid; }
h4 { color: var(--slate); font-size: 10.5pt; font-weight: 700; text-transform: uppercase;
     letter-spacing: 0.5pt; margin-top: 0.8em; margin-bottom: 0.3em; }
strong, b { color: var(--mauve-dark); font-weight: 700; }
em { color: var(--sage-dark); font-style: italic; }
a { color: var(--mauve-dark); text-decoration: none; }
blockquote {
    background: var(--pink-bg); border-left: 4px solid var(--mauve);
    padding: 8pt 14pt; margin: 0.8em 0; color: var(--slate);
    font-size: 10.5pt; border-radius: 0 6pt 6pt 0;
}
blockquote strong { font-style: normal; }
code {
    background: var(--pink-soft); color: var(--mauve-dark); padding: 1pt 5pt;
    border-radius: 3pt; font-family: "JetBrains Mono", "Menlo", monospace; font-size: 9pt;
}
pre {
    background: var(--pink-bg); border: 1px solid var(--line); border-radius: 6pt;
    padding: 10pt 12pt; font-size: 8.5pt; line-height: 1.4;
    page-break-inside: avoid; white-space: pre-wrap; word-wrap: break-word;
}
pre code { background: transparent; color: var(--slate); padding: 0; }
table { border-collapse: collapse; margin: 0.8em 0; width: 100%; font-size: 9pt; page-break-inside: avoid; }
th { background: var(--mauve); color: white; padding: 6pt 8pt; text-align: left; font-weight: 600; border: 1px solid var(--mauve-dark); }
td { padding: 5pt 8pt; border: 1px solid var(--line); vertical-align: top; }
th:empty { background: transparent; border: none; padding: 0; line-height: 0; font-size: 0; }
tbody tr:nth-child(even) { background: var(--pink-bg); }
tbody tr:nth-child(odd) { background: white; }
ul, ol { padding-left: 1.4em; margin: 0.5em 0; }
li { margin-bottom: 0.25em; }
li::marker { color: var(--mauve); }
hr { border: none; border-top: 1px dashed var(--mauve); margin: 1.2em 0; }
div[style*="page-break-before"] { page-break-before: always; }
""".replace("__TITLE__", NAME.capitalize())


def fix_list_blank_lines(md: str) -> str:
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


def fix_table_blank_lines(md: str) -> str:
    """Ensure a blank line precedes a table (python-markdown needs it).

    Without a blank line between a paragraph (e.g. bold intro) and the table
    header, the whole thing renders as literal '| ... |' text.
    """
    lines = md.split("\n")
    out = []
    for line in lines:
        is_table = line.lstrip().startswith("|")
        if is_table and out:
            prev = out[-1]
            prev_is_table = prev.lstrip().startswith("|")
            if prev.strip() and not prev_is_table:
                out.append("")
        out.append(line)
    return "\n".join(out)


def main():
    md_text = fix_table_blank_lines(fix_list_blank_lines(build_markdown()))
    html_body = markdown.markdown(md_text, extensions=["extra", "tables", "sane_lists", "toc"])
    html_full = f'<!doctype html><html><head><meta charset="utf-8"></head><body>{html_body}</body></html>'
    HTML(string=html_full).write_pdf(OUT, stylesheets=[CSS(string=CSS_STR)])
    print(f"PDF written: {OUT} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
