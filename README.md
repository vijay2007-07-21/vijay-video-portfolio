# Vijay — Video Editor Portfolio

## Run locally
npm install
npm run dev

## Build for production
npm run build
# outputs to /dist — deploy that folder to Vercel, Netlify, or GitHub Pages

## Add your real content
1. Videos: drop files into `public/videos/`, e.g. `public/videos/my-reel.mp4`
2. Thumbnails/posters (optional but recommended): `public/thumbnails/`
3. Edit `src/data/projects.ts` — one object per project, with title, description,
   category, video path, thumbnail path, tools, year. The featured project on
   the homepage is whichever entry has `featured: true`.
4. Edit `src/components/Tools.tsx` — TOOLS array, list only software you use.
5. Edit `src/components/Contact.tsx` — CONTACT object, your real email/WhatsApp.
6. Edit `src/components/Footer.tsx` — SOCIALS array, your real profile URLs.
7. About section stats in `src/components/About.tsx` currently show "—" —
   replace with real numbers once you have them.

## Stack
React + TypeScript + Tailwind CSS v4 + Framer Motion, built with Vite.
