/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
      },
      backgroundImage: {
        hero: 'url(/src/media/img/pattern.svg)'
      },
      cursor: {
        pretty: 'url(/src/media/img/icons/semicolon.png), default'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
