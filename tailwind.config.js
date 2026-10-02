/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#090D16', // Deep void/near-black
        surface: 'rgba(15, 23, 42, 0.75)', // Dark surface for cards
        primary: {
          DEFAULT: '#00F0FF', // Electric Cyan / Neon Teal
          glow: 'rgba(0, 240, 255, 0.15)',
        },
        secondary: {
          DEFAULT: '#8B5CF6', // Cyber Purple
          dark: '#7000FF',
        },
        highlight: '#10B981', // Emerald Green (active statuses / progress)
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
