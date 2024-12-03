import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App Router files
    './components/**/*.{js,ts,jsx,tsx}', // Component files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')], // Add any plugins here
};

export default config;
