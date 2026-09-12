import os
import markdown

FOLDER = os.path.dirname(os.path.abspath(__file__))
HTML_FOLDER = os.path.join(FOLDER, "HTML")
os.makedirs(HTML_FOLDER, exist_ok=True)

CSS = """
@media print {
    body { margin: 0; }
    .page { box-shadow: none; margin: 0; padding: 30px; }
}
* { box-sizing: border-box; }
body {
    font-family: 'Segoe UI', 'Noto Sans', Arial, sans-serif;
    background: #1a1a2e;
    color: #e0e0e0;
    margin: 0;
    padding: 20px;
    line-height: 1.7;
}
.page {
    max-width: 800px;
    margin: 20px auto;
    background: #16213e;
    border-radius: 12px;
    padding: 40px 45px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4);
    border: 1px solid #0f3460;
}
h1 {
    font-size: 2em;
    color: #e94560;
    border-bottom: 3px solid #e94560;
    padding-bottom: 12px;
    margin-top: 0;
}
h2 {
    font-size: 1.4em;
    color: #f5a623;
    margin-top: 35px;
    border-bottom: 1px solid #333;
    padding-bottom: 6px;
}
h3 {
    font-size: 1.15em;
    color: #53c7f0;
    margin-top: 25px;
}
p { margin: 8px 0; }
strong { color: #f5f5f5; }
em { color: #aab0c0; }
hr {
    border: none;
    border-top: 1px solid #2a2a4a;
    margin: 20px 0;
}
blockquote {
    background: linear-gradient(135deg, #1e2a45, #1a2540);
    border-left: 4px solid #e94560;
    padding: 14px 20px;
    margin: 15px 0;
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: #c8c8d8;
}
blockquote p { margin: 4px 0; }
ul {
    padding-left: 20px;
    margin: 8px 0;
}
li {
    margin: 4px 0;
    padding-left: 4px;
}
li::marker { color: #e94560; }
ul ul li::marker { color: #53c7f0; }
table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 0.95em;
}
thead th {
    background: #0f3460;
    color: #f5f5f5;
    padding: 10px 12px;
    text-align: left;
    border: 1px solid #1a4a7a;
    font-weight: 600;
}
tbody td {
    padding: 8px 12px;
    border: 1px solid #2a2a4a;
}
tbody tr:nth-child(even) { background: #1a2a45; }
tbody tr:nth-child(odd) { background: #16213e; }
tbody tr:hover { background: #1e3355; }
a { color: #53c7f0; }
code {
    background: #0d1b30;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #e94560;
}
.footer {
    text-align: center;
    margin-top: 30px;
    padding-top: 15px;
    border-top: 1px solid #2a2a4a;
    color: #555;
    font-size: 0.85em;
}
"""

def md_to_html(md_text, title):
    html_body = markdown.markdown(
        md_text,
        extensions=["tables", "fenced_code", "nl2br"],
    )
    return f"""<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <style>{CSS}</style>
</head>
<body>
    <div class="page">
        {html_body}
        <div class="footer">Cours du sensei renard — Konoha / Zenkai</div>
    </div>
</body>
</html>"""


md_files = sorted([f for f in os.listdir(FOLDER) if f.endswith(".md")])
for md_file in md_files:
    md_path = os.path.join(FOLDER, md_file)
    html_name = md_file.replace(".md", ".html")
    html_path = os.path.join(HTML_FOLDER, html_name)

    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    title = md_file.replace(".md", "").replace("_", " ").title()
    html_content = md_to_html(md_text, title)

    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    print(f"[OK] {html_name}")

print(f"\nTermine! {len(md_files)} HTML dans: {HTML_FOLDER}")
