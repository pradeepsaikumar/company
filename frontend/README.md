# DeepRapIT v2.0 — Frontend

## Setup
```bash
npm install
npm run dev   # → http://localhost:5173
```

## Pages
- `/` — Home (typewriter hero, services, stats, process, CTA)
- `/about` — Story, timeline, values
- `/services` — All services + pricing (click for detail modal)
- `/projects` — 6 projects with case study modals + category filter
- `/team` — All 10 members, click for full profile modal
- `/blog` — Blog with category filter
- `/blog/:slug` — Full article
- `/contact` — Form → saves to MongoDB
- `/admin/login` — Admin auth
- `/admin/dashboard` — Blog CMS, messages, subscribers

## Theme
Dark futuristic neon — Orbitron + Rajdhani fonts, #020408 background, #00ffe0 neon accent

## Notes
- Update team photos: replace placeholder member images in `src/assets/`
- Update social links in `src/pages/Team.jsx`
- For production, set `VITE_API_URL` env variable pointing to your backend
