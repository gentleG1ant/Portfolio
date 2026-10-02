# AI Developer Context Handoff

**Project Name:** Raj Aryan's Personal Developer Portfolio
**Primary Tech Stack:** React (Vite), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.
**Environment Target:** Fully containerized / GitHub Codespace friendly. No OS-specific local dependencies. 

## Architectural Rules (STRICT)
1. **Data-Driven:** All content (skills, projects, education, certs) MUST be rendered from `src/data/portfolioData.ts`. Absolutely NO hardcoded personal details inside UI components.
2. **Visual Identity:** Dark void background (`#090D16`), Neon Cyan (`#00F0FF`) & Cyber Purple (`#8B5CF6`) accents. Use glassmorphism (`backdrop-blur`) and glowing borders.
3. **Container-First:** Setup must be handled via `node setup.js` or `npm install`.

## Current Status
- **Phase 1 (Setup):** Completed. Vite project initialized, Tailwind configured, `portfolioData.ts` created, global styles applied.

## Next Action Required
- Execute **Phase 2** as outlined in `project_plan.md`.
