/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000', // Pitch Black
        surface: 'rgba(18, 12, 16, 0.75)', // Dark obsidian surface for cards
        primary: {
          DEFAULT: '#FF003C', // Deep Crimson / Neon Red
          glow: 'rgba(255, 0, 60, 0.2)',
        },
        secondary: {
          DEFAULT: '#FF8A00', // Burning Amber / Neon Orange
          dark: '#CC6E00',
        },
        highlight: '#10B981', // Status indicators
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
