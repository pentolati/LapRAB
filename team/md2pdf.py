#!/usr/bin/env python3
"""Generic Markdown -> PDF dengan palette Tata (mauve/sage).

Usage:
  python3 md2pdf.py <input.md> [output.pdf]
  python3 md2pdf.py mom/2026-05-29-fase2-grooming.md
  python3 md2pdf.py --all-mom        # convert semua mom/*.md -> mom/*.pdf

Dipakai buat MoM (Tata selalu minta PDF selain .md) + doc lain.
"""
import sys
from pathlib import Path
import markdown
from weasyprint import HTML, CSS

HERE = Path(__file__).resolve().parent

CSS_STR = """
@page {
    size: A4;
    margin: 1.8cm 1.6cm;
    @bottom-center {
        content: "Tata-Eleven · " counter(page) " / " counter(pages);
        font-family: Inter, system-ui, sans-serif;
        font-size: 8pt;
        color: #8a6f8e;
    }
}
:root {
    --mauve: #a87fb8; --mauve-dark: #6b4779;
    --sage: #9caf88; --sage-dark: #6b8454;
    --pink-soft: #f4e4ed; --pink-bg: #fbf3f7;
    --slate: #2d2a35; --slate-soft: #5a5563; --line: #e8dde5;
}
body { font-family: "Inter","Helvetica Neue",system-ui,sans-serif; color: var(--slate); line-height: 1.55; font-size: 10.5pt; }
h1 { color: var(--mauve-dark); font-size: 22pt; border-bottom: 3px solid var(--mauve); padding-bottom: 6pt; margin: 1em 0 0.5em; page-break-after: avoid; }
h1:first-of-type { margin-top: 0; font-size: 25pt; border-bottom: 4px double var(--mauve); padding-bottom: 9pt; }
h2 { color: var(--mauve-dark); font-size: 15pt; margin: 1.3em 0 0.4em; padding-left: 8pt; border-left: 4px solid var(--sage); page-break-after: avoid; }
h3 { color: var(--sage-dark); font-size: 12pt; margin: 0.9em 0 0.3em; page-break-after: avoid; }
h4 { color: var(--slate); font-size: 10.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5pt; margin: 0.7em 0 0.3em; }
strong, b { color: var(--mauve-dark); font-weight: 700; }
em { color: var(--sage-dark); }
a { color: var(--mauve-dark); text-decoration: none; }
blockquote { background: var(--pink-bg); border-left: 4px solid var(--mauve); padding: 8pt 12pt; margin: 0.7em 0; font-style: italic; border-radius: 0 6pt 6pt 0; }
blockquote strong { font-style: normal; }
code { background: var(--pink-soft); color: var(--mauve-dark); padding: 1pt 5pt; border-radius: 3pt; font-family: "JetBrains Mono",Menlo,monospace; font-size: 9pt; }
pre { background: var(--pink-bg); border: 1px solid var(--line); border-radius: 6pt; padding: 9pt 11pt; font-size: 8.5pt; line-height: 1.4; }
pre code { background: transparent; color: var(--slate); padding: 0; }
table { border-collapse: collapse; margin: 0.7em 0; width: 100%; font-size: 9pt; page-break-inside: avoid; }
th { background: var(--mauve); color: white; padding: 5pt 7pt; text-align: left; font-weight: 600; border: 1px solid var(--mauve-dark); }
td { padding: 4pt 7pt; border: 1px solid var(--line); vertical-align: top; }
tbody tr:nth-child(even) { background: var(--pink-bg); }
ul, ol { padding-left: 1.4em; margin: 0.5em 0; }
li { margin-bottom: 0.25em; }
li::marker { color: var(--mauve); }
hr { border: none; border-top: 1px solid var(--line); margin: 1.4em 0; }

/* Info block (header identitas) — 2 kolom rapi */
table.meta td { padding: 5pt 9pt; }
table.meta tr td:first-child { background: var(--mauve); color: white; font-weight: 600; width: 26%; white-space: nowrap; }
table.meta tbody tr:nth-child(even) { background: white; }
table.meta tbody tr td:nth-child(2) { background: var(--pink-bg); }

/* Gantt timeline — blok harian berwarna */
table.gantt { border-collapse: collapse; width: 100%; margin: 0.6em 0 1em; table-layout: fixed; }
table.gantt th { background: var(--mauve-dark); color: white; padding: 5pt 2pt; text-align: center; font-size: 8pt; font-weight: 600; border: 1px solid white; }
table.gantt th.task { width: 36%; text-align: left; padding-left: 9pt; }
table.gantt td { border: 1px solid var(--line); height: 20pt; padding: 0; text-align: center; background: white; }
table.gantt td.label { text-align: left; padding: 4pt 9pt; font-size: 9pt; background: var(--pink-bg); color: var(--slate); font-weight: 500; }
table.gantt td.bar { color: white; font-size: 7.5pt; font-weight: 700; letter-spacing: 0.3pt; }
table.gantt td.done { background: var(--sage-dark); }
table.gantt td.now { background: var(--mauve); }
table.gantt td.plan { background: #d2a84a; }
.legend { font-size: 8pt; color: var(--slate-soft); margin: 0.2em 0 1em; }
.legend span { display: inline-block; margin-right: 14pt; }
.legend i { display: inline-block; width: 9pt; height: 9pt; border-radius: 2pt; vertical-align: middle; margin-right: 4pt; }
.legend .done { background: var(--sage-dark); }
.legend .now { background: var(--mauve); }
.legend .plan { background: #d2a84a; }

/* Callout ringkasan */
.callout { background: var(--pink-bg); border: 1px solid var(--mauve); border-radius: 8pt; padding: 10pt 14pt; margin: 0.6em 0 1em; }
.callout strong { color: var(--mauve-dark); }

/* Gambar / diagram */
img { max-width: 100%; height: auto; display: block; margin: 0.6em auto; }
.diagram { max-height: 22cm; max-width: 100%; border: 1px solid var(--line); border-radius: 6pt; padding: 6pt; background: white; }
.uc-grid img { max-width: 100%; }
figure { margin: 0.8em 0; page-break-inside: avoid; text-align: center; }
figcaption { font-size: 8.5pt; color: var(--slate-soft); font-style: italic; margin-top: 3pt; }
"""


def fix_list_blank_lines(md: str) -> str:
    lines = md.split("\n")
    out = []
    for i, line in enumerate(lines):
        is_bullet = line.lstrip().startswith(("- ", "* ", "+ "))
        if is_bullet and i > 0:
            prev = lines[i - 1]
            ps = prev.strip()
            if ps and not ps.startswith(("- ", "* ", "+ ")) and not prev.startswith((" ", "\t")):
                out.append("")
        out.append(line)
    return "\n".join(out)


def convert(src: Path, out: Path = None) -> Path:
    out = out or src.with_suffix(".pdf")
    md_text = fix_list_blank_lines(src.read_text(encoding="utf-8"))
    html_body = markdown.markdown(md_text, extensions=["extra", "tables", "sane_lists", "toc"])
    title = src.stem
    html_full = f'<!doctype html><html><head><meta charset="utf-8"><title>{title}</title></head><body>{html_body}</body></html>'
    # base_url = folder file md, biar gambar relatif (cth diagram PNG) kebaca
    HTML(string=html_full, base_url=str(src.resolve().parent) + "/").write_pdf(out, stylesheets=[CSS(string=CSS_STR)])
    print(f"PDF: {out.relative_to(HERE)} ({out.stat().st_size:,} bytes)")
    return out


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__); sys.exit(1)
    if args[0] == "--all-mom":
        for md in sorted((HERE / "mom").glob("*.md")):
            convert(md)
        return
    if args[0] == "--all":
        # Convert SEMUA .md di tree team/ -> sibling .pdf (mandat Tata: tiap md ada PDF).
        ok, fail = 0, []
        for md in sorted(HERE.rglob("*.md")):
            try:
                convert(md); ok += 1
            except Exception as e:  # noqa
                fail.append((md.relative_to(HERE), str(e)[:120]))
        print(f"\n=== SELESAI: {ok} PDF dibuat, {len(fail)} gagal ===")
        for f, e in fail:
            print(f"  GAGAL {f}: {e}")
        return
    src = Path(args[0])
    if not src.is_absolute():
        src = HERE / src
    out = Path(args[1]) if len(args) > 1 else None
    convert(src, out)


if __name__ == "__main__":
    main()
