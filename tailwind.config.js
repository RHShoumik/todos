module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#337EEA",
        secondary: "#0F1D34",
        darkBg: "#282828",
        darkBgBody: "#18181A",
        fontColor: "#222222",
        heading: "#1455AC",
        white: "#fff",
        lightGray: "#F8F8FA",
        primaryLight: "fafafa"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: "1rem",
      },
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