/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    // Đúng 3 vùng: <640 (mobile) · 640–1024 (tablet) · >1024 (desktop)
    screens: { sm: '640px', lg: '1025px' },
    extend: {
      colors: {
        // C = 1 -> Emerald #059669. "dark" dùng cho chữ/nút để đạt tương phản AA.
        primary: { DEFAULT: '#059669', dark: '#047857', light: '#d1fae5' },
      },
    },
  },
  plugins: [],
}
