import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#18479e',
        surface: {
          DEFAULT: '#0a0a0a',
          100: '#0a0a0a',
          200: '#111111',
        },
        text: {
          muted: '#e5e7eb',
          primary: '#f5f5f5',
        },
        states: {
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
        }
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(24,71,158,0.35), 0 10px 30px rgba(0,0,0,0.6)',
      },
      borderColor: {
        accent: '#18479e',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22,1,0.36,1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.22,1,0.36,1)',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.22,1,0.36,1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.22,1,0.36,1)',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.98)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
