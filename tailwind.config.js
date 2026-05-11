/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#07111f',
        night: '#0b1020',
        mist: '#d7e4f3',
        frost: '#f7fbff',
        aurora: '#64ffda',
        signal: '#8ab4ff',
        gold: '#f7c948',
      },
      boxShadow: {
        glow: '0 0 60px rgba(100, 255, 218, 0.18)',
        soft: '0 24px 80px rgba(2, 8, 23, 0.22)',
      },
      backgroundImage: {
        'mesh-dark':
          'radial-gradient(circle at top left, rgba(100,255,218,.18), transparent 26rem), radial-gradient(circle at 80% 10%, rgba(138,180,255,.24), transparent 28rem), linear-gradient(135deg, #07111f 0%, #0b1020 54%, #101b33 100%)',
      },
    },
  },
  plugins: [],
};
