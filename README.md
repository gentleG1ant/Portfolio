# Raj Aryan - Personal Developer Portfolio

Welcome to the source code for my personal developer portfolio! This project is designed as a highly scalable, dynamic, and fully responsive Single Page Application (SPA) built with modern frontend technologies.

## 🚀 Tech Stack
- **Framework:** React + Vite (TypeScript)
- **Styling:** Tailwind CSS (Custom Dark Neon Cybernetic Theme)
- **Animation:** Framer Motion
- **Icons:** Lucide React & Custom inline SVGs
- **Deployment:** GitHub Actions & GitHub Pages

## 📁 Architecture & Customization
This portfolio is driven entirely by a central configuration file. There is **zero hardcoding** of personal details in the UI components!

To update any text, project, skill, or certification, simply edit:
👉 `src/data/portfolioData.ts`

### Adding a New Project:
1. Open `src/data/portfolioData.ts`
2. Scroll to the `projects` array.
3. Add a new object following the existing structure. The UI will automatically render the new card and modal!

## 🛠️ Local Development
This repository is completely self-contained and Codespace-friendly. 

1. **Install Dependencies**
   ```bash
   npm install
   ```
   *(Or run `node setup.js` if you are in a fresh Codespace)*

2. **Start Dev Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🌐 Deployment
This repository is configured to automatically deploy to **GitHub Pages** via GitHub Actions.
Whenever you push to the `main` branch, the `deploy.yml` workflow takes over and updates the live site.