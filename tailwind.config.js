const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#47c3f7',
          'primary-focus': '#48cff2',
          'primary-content': '#ffffff',

          secondary: '#f6d860',
          'secondary-focus': '#f3cc30',
          'secondary-content': '#ffffff',

          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',

          neutral: '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',

          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',

          info: '#2094f3',
          success: '#009485',
          warning: '#ff9900',
          error: '#ff5724',
          base: '#121212',
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
};
