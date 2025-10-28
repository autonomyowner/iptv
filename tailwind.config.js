/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // IPTVZH Blue & Gold Color Palette
        iptvzh: {
          white: {
            clean: '#FFFFFF',
            soft: '#F8FAFC',
          },
          black: {
            deep: '#0F172A',
            soft: '#1E293B',
          },
          navy: {
            blue: '#1E3A8A',
            'blue-dark': '#1E40AF',
            'blue-light': '#3B82F6',
          },
          gold: {
            primary: '#D97706',
            light: '#F59E0B',
            dark: '#B45309',
            soft: '#FEF3C7',
          },
          gray: {
            blue: '#64748B',
            'blue-light': '#94A3B8',
          },
          footer: {
            dark: '#0F172A',
          },
          // Legacy kitchen colors for compatibility
          lux: {
            'dark-green': {
              50: '#f0f9f4',
              100: '#dcf2e3',
              200: '#bce5cc',
              300: '#8dd1a8',
              400: '#56b47d',
              500: '#2d5a3d',
              600: '#1e3d2a',
              700: '#1a3324',
              800: '#152a1e',
              900: '#0f1f16',
              950: '#0a1510',
            }
          }
        },
        // Legacy colors for compatibility
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'elegant': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 