/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF8',
        ink: '#1A1A18',
        smoke: '#6B6B66',
        line: '#E6E3DC',
        accent: '#9A3B26',
        accentsoft: '#F3E4DD',
        night: '#141412',
        nightline: '#2A2A26'
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      maxWidth: {
        measure: '68ch'
      }
    }
  },
  plugins: []
}
