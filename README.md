# Ryley Davenport — Personal Portfolio

An animated single-page portfolio with a liquid gradient canvas, interactive particle constellation, typewriter hero, count-up stat counters, 3D tilt project cards, a glowing accomplishments timeline, and scrolling skill marquees. Plain HTML/CSS/JS — no build step; everything renders from one data file.

## How to update it

Edit **`data.js`** — that's it. The page reads everything from there:

| What you want to add | Where |
|---|---|
| A new project | Top of the `projects` array (a commented template is included) |
| A promotion, win, cert, or milestone | Top of the `accomplishments` array |
| A new role or job | Top of the `experience` array |
| The big animated numbers in the hero | The `stats` array |
| The rotating typewriter titles | `PROFILE.titles` |
| Skills (the scrolling pills) | The `skills` array |
| Tagline / about / location / links | The `PROFILE` object |

Project `status` can be `"shipped"`, `"in-progress"`, or `"planned"` — each gets its own badge color.

> **Note on work projects:** the Solutions Hub entries are written at a deliberately high level (no internal URLs, customer names, or implementation details) since the repo is private to Thinkific. Before publishing, it's worth a quick confirmation that your employer is comfortable with these descriptions being public.

## Preview locally

Open `index.html` in a browser, or:

```bash
cd ryley-portfolio && python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publish free with GitHub Pages

1. Create a repo (e.g. `ryley-davenport.github.io` for a clean URL, or any repo name):
   ```bash
   cd ryley-portfolio
   git init && git add . && git commit -m "Initial portfolio site"
   gh repo create ryley-davenport-portfolio --public --source=. --push
   ```
2. On GitHub: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**
3. Your site goes live at `https://<username>.github.io/ryley-davenport-portfolio/` within a minute or two.

After that, updating the live site is:
```bash
git add data.js && git commit -m "Add project" && git push
```

## Add it to your LinkedIn

1. **Contact info**: Profile → Contact info → Edit → Add website → paste your site URL (label it "Portfolio").
2. **Featured section** (more visible): Profile → Add profile section → Recommended → Add featured → Add a link → paste the URL. It appears as a card near the top of your profile.
