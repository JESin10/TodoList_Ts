module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkmode: [],
  // main color setting 가능
  theme: {
    extend: {
      colors: {
        primary: "#8ffebf",
      },
      spacing: {
        "1per": "1%",
        "2.5per": "2.5%",
        "5per": "5%",
        "95per": "95%",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
    },
  },
};
