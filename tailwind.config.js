module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '12r': ['1.2rem', { lineHeight: '1.75rem' }],
        '13r': ['1.3rem', { lineHeight: '1.75rem' }],
        '14r': ['1.4rem', { lineHeight: '2rem' }],
        '16r': ['1.6rem', { lineHeight: '2rem' }],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      visibility: ['group-hover'],
      backgroundColor: ['active'],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
