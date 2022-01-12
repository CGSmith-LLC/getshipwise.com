module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: 'media',
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      gray: {
        50: "#f2f2f3",
        100: "#e5e6e7",
        200: "#cacdce",
        300: "#b0b3b5",
        400: "#959a9d",
        500: "#7b8184",
        600: "#62676a",
        700: "#4a4d50",
        800: "#313435",
        900: "#181a1b"
      },
      blue: {
        50: "#e5f4ff",
        100: "#cceaff",
        200: "#99d4ff",
        300: "#66bfff",
        400: "#33aaff",
        500: "#0095ff",
        600: "#0077cc",
        700: "#005999",
        800: "#003b66",
        900: "#001e33"
      },
      'prussian-blue': {
        '50': '#f4fbff',
        '100': '#e9f7ff',
        '200': '#d4eafe',
        '300': '#b5d9f7',
        '400': '#70a7dc',
        '500': '#3d78b2',
        '600': '#25588b',
        '700': '#114477',
        '800': '#012b5a',
        '900': '#001245',
      },
      'lightning-yellow': {
        '50': '#fffbeb',
        '100': '#fdf3c8',
        '200': '#fbe78c',
        '300': '#f9d450',
        '400': '#f7c023',
        '500': '#f1a10f',
        '600': '#d57b0a',
        '700': '#b1560c',
        '800': '#904410',
        '900': '#763811',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
