import typography from '@tailwindcss/typography'
export default {
  content: ["./*.hbs", "./**/*.hbs"],
  theme: {
      extend: {}
  },
  plugins: [
      typography,
  ]
}