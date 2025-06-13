/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/**/layouts/**/*.html",
    "./assets/css/**/*.css",
    "./old_version/Stocks/layouts/**/*.html",
    "./old_version/Stocks/content/**/*.{html,md}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  prefix: {
    'old-': 'old-', // Prefix for old version classes
  },
  safelist: [
    // Add any classes that might be dynamically generated
    'old-bg-blue-500',
    'old-text-white',
    'old-transition-all',
    'old-duration-200',
    'old-ease-in-out',
    'old-hover:shadow-lg',
    'old-hover:shadow-md',
    'old-hover:bg-gray-50',
    'old-hover:bg-blue-50',
    'old-hover:bg-gray-200'
  ]
} 