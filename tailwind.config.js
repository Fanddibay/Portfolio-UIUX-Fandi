/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // slate-100 (#f1f5f9) for background & cards (replacing cream)
        surface: {
          DEFAULT: '#f1f5f9',
          muted: '#f1f5f9',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          muted: '#5c5c5c',
          soft: '#2d2d2d',
        },
        accent: {
          DEFAULT: '#c17f59',
          hover: '#a86b47',
          light: '#f1f5f9',
        },
        border: {
          DEFAULT: '#e5e5e5',
          strong: '#d4d4d4',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 2px 12px rgba(0,0,0,0.04)',
        card: '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.08)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '2.5rem',
          xl: '3rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
