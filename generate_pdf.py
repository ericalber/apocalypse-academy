import os
import weasyprint
from markdown import markdown

def convert_markdown_to_html(markdown_file, html_file):
    """Convert markdown file to HTML"""
    with open(markdown_file, 'r', encoding='utf-8') as f:
        markdown_content = f.read()
    
    # Convert markdown to HTML
    html_content = markdown(markdown_content, extensions=['tables', 'fenced_code'])
    
    # Add CSS styling
    styled_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Apocalypse Academy - Business Plan</title>
        <style>
            @page {{
                size: letter;
                margin: 2.5cm 1.5cm;
            }}
            body {{
                font-family: "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 21cm;
                margin: 0 auto;
            }}
            h1, h2, h3, h4, h5, h6 {{
                font-family: "Cinzel", "Times New Roman", serif;
                color: #121212;
                margin-top: 1.5em;
                margin-bottom: 0.5em;
            }}
            h1 {{
                font-size: 24pt;
                text-align: center;
                margin-top: 1cm;
                margin-bottom: 0.5cm;
                border-bottom: 1px solid #FFD700;
                padding-bottom: 0.3cm;
            }}
            h2 {{
                font-size: 18pt;
                border-bottom: 1px solid #ddd;
                padding-bottom: 0.2cm;
                color: #121212;
            }}
            h3 {{
                font-size: 14pt;
                color: #333;
            }}
            p, ul, ol, table {{
                margin-bottom: 1em;
            }}
            blockquote {{
                border-left: 4px solid #FFD700;
                padding-left: 1em;
                margin-left: 0;
                font-style: italic;
                color: #555;
            }}
            code {{
                background-color: #f5f5f5;
                padding: 0.2em 0.4em;
                border-radius: 3px;
                font-family: monospace;
            }}
            pre {{
                background-color: #f5f5f5;
                padding: 1em;
                border-radius: 5px;
                overflow-x: auto;
            }}
            table {{
                border-collapse: collapse;
                width: 100%;
                margin: 1em 0;
            }}
            th, td {{
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }}
            th {{
                background-color: #f2f2f2;
            }}
            img {{
                max-width: 100%;
                height: auto;
            }}
            a {{
                color: #FFD700;
                text-decoration: none;
            }}
            a:hover {{
                text-decoration: underline;
            }}
            .cover {{
                text-align: center;
                margin: 3cm 0;
            }}
            .cover h1 {{
                font-size: 28pt;
                margin-bottom: 0.5cm;
                border: none;
            }}
            .cover h2 {{
                font-size: 20pt;
                margin-top: 0;
                border: none;
                color: #555;
            }}
            .cover .subtitle {{
                font-size: 16pt;
                margin: 1cm 0;
                font-style: italic;
            }}
            .cover .author {{
                margin-top: 2cm;
                font-size: 14pt;
            }}
            .cover .date {{
                margin-top: 0.5cm;
                font-size: 12pt;
                color: #777;
            }}
            .page-break {{
                page-break-after: always;
            }}
            .yellow-text {{
                color: #FFD700;
            }}
            .text-center {{
                text-align: center;
            }}
        </style>
    </head>
    <body>
        <div class="cover">
            <h1>APOCALYPSE ACADEMY</h1>
            <h2>A Última Academia Antes do Fim</h2>
            <div class="subtitle">BUSINESS PLAN</div>
            <div class="author">Preparado por: Eric Alberto da Cruz</div>
            <div class="date">Abril 2025</div>
        </div>
        <div class="page-break"></div>
        {html_content}
    </body>
    </html>
    """
    
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(styled_html)
    
    return html_file

def generate_pdf_with_weasyprint(html_file, pdf_file):
    """Generate PDF using WeasyPrint"""
    weasyprint.HTML(filename=html_file).write_pdf(pdf_file)

def main():
    # File paths
    base_dir = '/home/ubuntu/apocalypse-academy/docs/business-plan'
    markdown_file = os.path.join(base_dir, 'business_plan.md')
    html_file = os.path.join(base_dir, 'pdf', 'business_plan.html')
    pdf_file = os.path.join(base_dir, 'pdf', 'apocalypse_academy_business_plan.pdf')
    
    # Convert markdown to HTML
    html_file = convert_markdown_to_html(markdown_file, html_file)
    
    # Generate PDF
    generate_pdf_with_weasyprint(html_file, pdf_file)
    
    print(f"PDF generated successfully: {pdf_file}")

if __name__ == "__main__":
    main()
