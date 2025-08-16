// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "geist-sans": ["var(--font-geist-sans)", {fontFeatureSettings: "'case' on, 'liga' on"}],
        "geist-mono": ["var(--font-geist-mono)", {fontFeatureSettings: "'case' on, 'liga' on"}],
      },
    },
  },
  plugins: [],
}
