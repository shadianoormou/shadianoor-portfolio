# Shadia Noor Mou — Portfolio

A production-ready personal portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Live domain : https://shadianoor.vercel.app

---

## 1. Run it locally

You'll need **Node.js 18.18+** (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

To build a production version locally:

```bash
npm run build   # outputs a static site to the /out folder
npm run start   # (optional) only used if you remove `output: "export"` from next.config.mjs
```

Because `next.config.mjs` sets `output: "export"`, `npm run build` produces a fully static site in `/out` — this is what makes both Vercel and GitHub Pages deployment possible from the same codebase.

---

## 2. Where to edit content later

Everything you'll ever want to change lives in **one file**:

```
src/data/profile.ts
```

This includes:
- Name, role, bio, intro text, contact info, resume link
- Social links (GitHub, LinkedIn, LeetCode)
- Education history
- Skill categories
- **Projects** (title, tech stack, description, GitHub link, stats)
- Achievements
- Certifications (title, issuer, hours, year, image path)
- Research areas
- Services / "open to" cards

To add a new project, for example, just add a new object to the `projects` array — a new card will appear automatically with no other code changes needed.

### Updating images
- Profile photo: replace `public/assets/profile.jpg` (keep the same filename, or update `personal.profileImage` in `profile.ts`)
- CV/resume: replace `public/assets/Shadia_Noor_Mou_CV.pdf` (or update `personal.resumeUrl`)
- Certificates: drop new images into `public/assets/certificates/` and add an entry to the `certifications` array in `profile.ts`

### Enabling the contact form
The contact form posts to [Formspree](https://formspree.io). To make it send real emails:
1. Create a free form at formspree.io and copy your form ID (looks like `xkgczyaa`).
2. Open `src/data/profile.ts` and replace:
   ```ts
   export const formspreeId = "YOUR_FORMSPREE_ID";
   ```
   with your real ID.
3. That's it — no other code changes needed. The form already handles loading, success, and error states, plus client-side validation.

(Alternative: swap the `fetch` call in `src/components/Contact.tsx` for an EmailJS `emailjs.send(...)` call if you prefer EmailJS instead.)

---

## 3. Deploy to Vercel (recommended)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). Leave build settings as default (`next build`).
4. Click **Deploy**.

Vercel will build and host the site automatically on every push to your main branch.

---

## 4. Connect the `shadianoormou.dev` domain

### On Vercel
1. In your Vercel project, go to **Settings → Domains**.
2. Add `shadianoormou.dev` (and optionally `www.shadianoormou.dev`).
3. Vercel will show you DNS records to add. At your domain registrar, add either:
   - An **A record** pointing `@` to Vercel's IP, or
   - A **CNAME record** pointing to `cname.vercel-dns.com` (Vercel will tell you exactly which to use).
4. Wait for DNS propagation (usually minutes, sometimes up to 24–48 hours), then Vercel will auto-issue an SSL certificate.

### On GitHub Pages (alternative)
1. Run `npm run build` — this generates the static site in `/out`.
2. Push the contents of `/out` to a `gh-pages` branch (or use a GitHub Action to automate this).
3. The included `public/CNAME` file (containing `shadianoormou.dev`) will carry over automatically and tell GitHub Pages which custom domain to serve.
4. In your domain registrar, point your domain's DNS to GitHub Pages' IPs (see [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
5. In your repo's **Settings → Pages**, set the custom domain to `shadianoormou.dev` and enable "Enforce HTTPS".

---

## Project structure

```
src/
  app/            # Next.js App Router pages, layout, SEO (sitemap, robots, metadata)
  components/     # All UI sections (Hero, About, Projects, Contact, etc.)
  data/
    profile.ts    # ← single source of truth for all content
  lib/
    utils.ts      # small shared helpers
public/
  assets/
    profile.jpg
    Shadia_Noor_Mou_CV.pdf
    certificates/ # certificate images shown in the Certifications gallery
  CNAME           # custom domain for GitHub Pages
```

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with a custom dark blue/purple/black design system
- **Framer Motion** for scroll-reveal and micro-interactions
- **React Icons** for iconography
- Signature touch: an animated, ambient neural-network canvas in the hero background (a nod to the CNN-BiLSTM project and to algorithmic/graph thinking)

## Notes

- Contact form delivery requires replacing `YOUR_FORMSPREE_ID` in `src/data/profile.ts` with a real Formspree form ID.
- All project, education, achievement, and certification data reflects only what was provided — no placeholder projects, fake companies, or invented links were added.


## Certificate titles
Certificate titles in `src/data/profile.ts` were matched manually from the uploaded certificate images. Update the title, issuer, year, or image path in that file if you add new certificates later.
