module.exports = {
  content: [
    './src/assets/**/*.{js,ts,jsx,tsx,mdx,png}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom Color Palette
        dark: {
          'body': '#383E56',
          'card': '#404258',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        light: {
          'body': '#F0F2F5',
          'card': '#fff',
          100: '#ffe9e4',
          200: '#ffb8a8',
          300: '#ff8c78',
          400: '#ff5533',
          500: '#e84545',
          600: '#d33f49',
          700: '#b53389',
          800: '#97266d',
          900: '#702459',
        },
      },
      fontFamily: {
        Mulish: ["Mulish", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      zIndex: {
        '100': '100',
      }
    },
    screens: {
      "sm": "420px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1320px",
    },
  },
  plugins: [],
}