/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/app/pages/**/*.{html,js,ts}',
    './src/app/shared/**/*.{html,js,ts}'
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lemonade', 'coffee'],
    theme: {
      container: {
        center: true,
      },
    }
  }
};

