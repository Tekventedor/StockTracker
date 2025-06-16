/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/**/*.css"
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
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--color-gray-700))',
            maxWidth: '65ch',
            '[class~="lead"]': {
              color: 'rgb(var(--color-gray-600))',
              fontSize: '1.25em',
              lineHeight: '1.6',
              marginTop: '2em',
              marginBottom: '2em',
            },
            a: {
              color: 'rgb(var(--color-indigo-600))',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(var(--color-indigo-500))',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: 'rgb(var(--color-gray-900))',
              fontWeight: '600',
            },
            'ol > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ol > li::before': {
              content: 'counter(list-item) "."',
              position: 'absolute',
              fontWeight: '400',
              color: 'rgb(var(--color-gray-500))',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: 'rgb(var(--color-gray-300))',
              borderRadius: '50%',
              width: '0.375em',
              height: '0.375em',
              top: '0.6875em',
              left: '0.25em',
            },
            hr: {
              borderColor: 'rgb(var(--color-gray-200))',
              borderTopWidth: 1,
              marginTop: '3em',
              marginBottom: '3em',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'rgb(var(--color-gray-900))',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'rgb(var(--color-indigo-500))',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            h1: {
              color: 'rgb(var(--color-gray-900))',
              fontWeight: '700',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h2: {
              color: 'rgb(var(--color-gray-900))',
              fontWeight: '600',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              color: 'rgb(var(--color-gray-900))',
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            h4: {
              color: 'rgb(var(--color-gray-900))',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
            },
            'figure figcaption': {
              color: 'rgb(var(--color-gray-500))',
              fontSize: '0.875em',
              lineHeight: '1.4285714',
              marginTop: '0.8571429em',
            },
            code: {
              color: 'rgb(var(--color-gray-900))',
              fontWeight: '600',
              fontSize: '0.875em',
              backgroundColor: 'rgb(var(--color-gray-100))',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
            'a code': {
              color: 'rgb(var(--color-indigo-600))',
            },
            pre: {
              color: 'rgb(var(--color-gray-200))',
              backgroundColor: 'rgb(var(--color-gray-800))',
              overflowX: 'auto',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
              borderRadius: '0.375rem',
              padding: '0.8571429em 1.1428571em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            thead: {
              color: 'rgb(var(--color-gray-900))',
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(var(--color-gray-400))',
            },
            'thead th': {
              verticalAlign: 'bottom',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(var(--color-gray-200))',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'top',
              padding: '0.5714286em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
  safelist: [
    {
      pattern: /^(bg|text|border|hover:bg|hover:text|focus:ring|focus:border)-(indigo|blue|gray|green|red|yellow|purple)-(50|100|200|300|400|500|600|700|800|900|950)$/,
    }
  ]
} 