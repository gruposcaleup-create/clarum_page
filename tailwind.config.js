/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.html",
    "./main.js",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent-color)", // #0064E0
        divider: "var(--divider-color)", // #F5F6F7
        primary: "var(--text-primary)", // #000000
        secondary: "var(--text-secondary)", // #65676B
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
        'pulse-glow': 'pulseGlow 2s infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 100, 224, 0.4)' },
          '100%': { boxShadow: '0 0 20px 10px rgba(0, 100, 224, 0)' },
        }
      }
    },
  },
  plugins: [],
}

