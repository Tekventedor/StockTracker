/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/**/*.css",
    "./old_version/Stocks/layouts/**/*.html",
    "./old_version/Stocks/content/**/*.{html,md}",
    "./old_version/Stocks/assets/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  prefix: 'old-',
  safelist: [
    'old-bg-indigo-500',
    'old-text-white',
    'old-hover:bg-indigo-600',
    'old-hover:text-indigo-100',
    'old-border-indigo-500',
    'old-focus:ring-indigo-500',
    'old-focus:border-indigo-500',
    'old-text-indigo-600',
    'old-text-indigo-700',
    'old-text-indigo-800',
    'old-bg-indigo-50',
    'old-bg-indigo-100',
    'old-bg-indigo-200',
    'old-bg-indigo-300',
    'old-bg-indigo-400',
    'old-bg-indigo-500',
    'old-bg-indigo-600',
    'old-bg-indigo-700',
    'old-bg-indigo-800',
    'old-bg-indigo-900',
    'old-bg-indigo-950',
  ]
} 