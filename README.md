# Portfolio Website

This is a minimal static portfolio site (HTML/CSS/JS). It uses the provided `headshot_Zarin.jpeg` image found in the repository root.

To preview locally, open `index.html` in your browser or run a simple HTTP server. For example (macOS):

```bash
# from the project directory
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Files added:
- `index.html` — main page
- `styles.css` — styles
- `script.js` — tiny JS
- `README.md` — this file
 

- Edit the embedded JSON block in `index.html` (search for the <script id="data-inline" type="application/json"> block) to update name, contact, skills, projects, publications and more.
- Replace placeholder text and links with real content. The page reads the embedded JSON at load time, so you can open `index.html` directly without running a server.
- Customize colors in `styles.css` or add Google Fonts for a more unique look.
