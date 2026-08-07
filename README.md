# Personal Portfolio

Next.js + TypeScript + Tailwind CSS. One-page, scroll-based layout: About → Stack → Projects → Experience → Education → Contact, with a sticky header (anchor nav + social links) and no animation beyond a smooth scroll.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Put your real content in

Almost everything lives in **`src/data/content.ts`**. Edit that one file:

- `profile` — your name, role, location, email, intro blurb, resume path, photo path
- `socials` — GitHub/LinkedIn/etc. links (shown as icons in the header + footer)
- `stack` — your languages/frameworks/tools, grouped
- `projects` — your project cards
- `experience` — your work history
- `education` — your schools

Then:

- Drop your real headshot in `public/` (e.g. `public/headshot.jpg`) and update `profile.photo` in `content.ts` to match.
- Drop your resume PDF in `public/resume.pdf` (the "Download résumé" button already points here).
- Update the `title`/`description` in `src/app/layout.tsx` (used for the browser tab and link previews).

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create your-username/portfolio --public --source=. --push
# or create the repo on github.com and:
# git remote add origin https://github.com/your-username/portfolio.git
# git branch -M main
# git push -u origin main
```

## 4. Deploy on Vercel

1. Go to https://vercel.com/new and import the GitHub repo you just pushed.
2. Framework preset auto-detects as Next.js, no config needed. Click **Deploy**.
3. Once deployed, go to the project's **Settings → Domains**, add your custom domain (e.g. `abdel.site`), and follow the DNS instructions Vercel gives you (usually one A or CNAME record at your registrar). Vercel issues HTTPS automatically.

Every push to `main` auto-deploys from then on.

## Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google`, which needs network access at build time — this works automatically on Vercel, no setup needed.
- Colors, fonts, and spacing tokens live at the top of `src/app/globals.css` if you want to adjust the palette.
