module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "sans-serif",
      ],
      roboto: ["Roboto", "Segoe UI"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    extend: {},
  },
  plugins: [],
};
