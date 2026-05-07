# Sayed Shabir — Portfolio

A futuristic, cyberpunk-inspired developer portfolio built with React 18, Tailwind CSS, and Framer Motion.

## 🛠️ Tech Stack

- **React 18** — Component-based UI
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations & transitions
- **Lucide React** — Clean, modern icons
- **Google Fonts** — Orbitron, Syne, JetBrains Mono

## 📁 Folder Structure

```
shabir-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx       # Custom animated cursor
│   │   ├── Navbar.jsx       # Sticky nav with mobile menu
│   │   ├── Hero.jsx         # Hero with typewriter & glitch
│   │   ├── About.jsx        # About + stats
│   │   ├── Skills.jsx       # Tech stack grid
│   │   ├── Experience.jsx   # Timeline + certifications
│   │   ├── Projects.jsx     # Filterable project cards
│   │   ├── Contact.jsx      # Contact links
│   │   └── Footer.jsx       # Footer
│   ├── data/
│   │   └── portfolio.js     # All your CV data here
│   ├── hooks/
│   │   └── useInView.js     # Intersection observer hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
# Output goes to /dist folder
```

## 🌐 FREE Hosting Options

### Option 1: Vercel (RECOMMENDED — Best for React)
1. Push your code to GitHub
2. Go to https://vercel.com → Sign up with GitHub
3. Click "New Project" → Import your repo
4. Click "Deploy" — done! You get a free .vercel.app domain

### Option 2: Netlify
1. Run `npm run build`
2. Go to https://netlify.com → Sign up
3. Drag & drop the `/dist` folder into Netlify dashboard
4. Done! Free .netlify.app domain

### Option 3: GitHub Pages
1. Install: `npm install gh-pages --save-dev`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Add to vite.config.js: `base: '/your-repo-name/'`
4. Run: `npm run deploy`

---

## 🆓 Free Domain Options for Students

### Option 1: GitHub Student Developer Pack (FREE .me or .tech domain)
1. Go to https://education.github.com/pack
2. Sign up with your **student email** (.edu or university email)
3. You get FREE domains from Namecheap, .tech Domains, and more!
4. Claim a domain like `sayedshabir.me` or `sayedshabir.tech` for FREE (1 year)
5. Connect it to Vercel or Netlify in their dashboard under "Custom Domains"

### Option 2: .tech domain via https://get.tech/github-student-developer-pack
- FREE 1-year .tech domain with student pack

### Option 3: Freenom (free .ml, .tk, .ga domains)
- Go to https://www.freenom.com
- Search for `sayedshabir.ml` or similar
- Register free for up to 12 months

---

## ✏️ Customization

All your personal data is in **`src/data/portfolio.js`** — edit that file to update your info, projects, skills, etc. No other files need to be touched for content changes.

---

Built with 💙 by Sayed Shabir
