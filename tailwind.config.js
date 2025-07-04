/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9f1',
          100: '#d6f0dc',
          200: '#b0e0be',
          300: '#81cb9a',
          400: '#4fae6f',
          500: '#318f51',
          600: '#237441',
          700: '#1e5d36',
          800: '#1a4a2c',
          900: '#163c25',
          950: '#0a2113',
        },
        secondary: {
          50: '#edfaff',
          100: '#d6f3ff',
          200: '#b5eaff',
          300: '#83dfff',
          400: '#48cbff',
          500: '#1eadfa',
          600: '#0a8fe7',
          700: '#0b74c2',
          800: '#10619f',
          900: '#145383',
          950: '#0f3351',
        },
        accent: {
          50: '#fff3ed',
          100: '#ffe5d4',
          200: '#ffc7a9',
          300: '#ffa073',
          400: '#ff7036',
          500: '#ff4d10',
          600: '#ed3900',
          700: '#c52d00',
          800: '#9c2707',
          900: '#7e240c',
          950: '#440f02',
        },
        success: {
          50: '#edfcf3',
          100: '#d4f7e0',
          200: '#acedc2',
          300: '#77de9b',
          400: '#41c56d',
          500: '#25ab52',
          600: '#178840',
          700: '#136d36',
          800: '#13552d',
          900: '#104627',
          950: '#072713',
        },
        warning: {
          50: '#fff9eb',
          100: '#ffefc5',
          200: '#ffde89',
          300: '#ffc64d',
          400: '#ffad1e',
          500: '#fa8e05',
          600: '#dd6a02',
          700: '#b64a06',
          800: '#93380d',
          900: '#792f0f',
          950: '#461804',
        },
        error: {
          50: '#fff1f2',
          100: '#ffe1e3',
          200: '#ffc8cc',
          300: '#ffa0a7',
          400: '#ff6b75',
          500: '#fa3642',
          600: '#e51e2d',
          700: '#c11527',
          800: '#a01526',
          900: '#841525',
          950: '#490812',
        },
        gray: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9dade',
          300: '#b9bcc4',
          400: '#8f95a1',
          500: '#707786',
          600: '#5a616f',
          700: '#4a4f5b',
          800: '#40444d',
          900: '#383b43',
          950: '#25272d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        sm: ['0.875rem', { lineHeight: '1.3125rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.6875rem' }],
        xl: ['1.25rem', { lineHeight: '1.875rem' }],
        '2xl': ['1.5rem', { lineHeight: '1.8rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.7rem' }],
        '5xl': ['3rem', { lineHeight: '3.6rem' }],
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};