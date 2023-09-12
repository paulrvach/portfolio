/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    variants: {
      extend: {
        backdropFilter: ['responsive'], // if needed
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },

        pastelPink: '#FFD1DC',
        pastelBlue: '#A2D2FF',
        pastelGreen: '#A7F3D0',
        pastelPurple: '#C7D2FE',
        pastelYellow: '#FDE68A',
        pastelOrange: '#FFD8A8',

        backgroundColor: {
          glass: 'rgba(255, 255, 255, 0.3)',
        },
        backdropFilter: {
          none: 'none',
          blur: 'blur(20px)',
        },

        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'gradient-animation': {
          '25%': {
            backgroundImage: 'linear-gradient(to right, #a855f7, #9333ea)',
          },
          '50%': {
            backgroundImage: 'linear-gradient(to right, #7c3aed, #ec4899)',
          },
          '75%': {
            backgroundImage: 'linear-gradient(to right, #9333ea, #a855f7)',
          },
          '100%': {
            backgroundImage: 'linear-gradient(to right, #ec4899, #7c3aed)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-animation': 'gradient-animation 15s ease infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
