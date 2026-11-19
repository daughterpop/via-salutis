# Printables

Source HTML for the PDFs in `public/downloads/`. Render with headless Chrome:

```sh
google-chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=public/downloads/advent-family-plan-2026.pdf \
  "file://$PWD/print/advent-family-plan-2026.html"
```
