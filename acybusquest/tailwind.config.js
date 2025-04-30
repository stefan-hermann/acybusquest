/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './assets/js/**/*.js',
    './assets/data/**/*.md',
    './assets/data/*.md',
    './tailwind-safelist.html'
  ],
  safelist: [
    // bereits vorhanden
    'w-[90%]',
    'w-[calc(100%)]',
    'mx-auto',
    // neu für dynamic wide-layout
    'w-full',           // volle Breite
    'max-w-none',       // keine Prose-Maximalbreite
    'lg\:w-1\/2',     // half width on large
    'lg\:w-3\/4',     // three-quarter width on large
    'lg\:w-1\/4',     // quarter width on large
    'flex-col',         // flex direction column
    'space-y-6',        // vertical spacing
    'lg\:flex-row',    // flex direction row on large
    'lg\:space-x-6'    // horizontal spacing on large
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#f5a11a',
        secondary: '#0e507a',
        sidebar: '#111',
        darkbg: '#000',
        midnight: '#0e507a',
      },
      fontFamily: {
        body: ['Roboto Condensed', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
