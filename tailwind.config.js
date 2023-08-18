/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'grey': '#ccc',
      'darker-grey': '#d8d4d4',
      'lighter-grey': '#d6d6d6',
      'dark-theme-grey': '#282c34',
      'green': '#16a34a',
      'white': '#ffffff',
      'dim-background': 'rgba(0, 0, 0, 0.5)',
      'grey-contrast': '#5A5A5A',
      'red': '#f54242',
      'light-red': '#ffb8b8',
      'blue': '#3869fc',
      'orange': '#f59e0b',
      'cyan': '#00c3ff',
    },
    extend: {},
  },
  screens: {
    'sm': '390px',
    'md': '640px',
    'lg': '1024px',
    'xl': '2560px',
  },
  plugins: [],
}

