// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // glass palette …
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          'light-hover': 'rgba(255, 255, 255, 0.15)',
          'light-active': 'rgba(255, 255, 255, 0.2)',
          medium: 'rgba(255, 255, 255, 0.08)',
          'medium-hover': 'rgba(255, 255, 255, 0.12)',
          'medium-active': 'rgba(255, 255, 255, 0.18)',
          heavy: 'rgba(255, 255, 255, 0.05)',
          'heavy-hover': 'rgba(255, 255, 255, 0.08)',
          'heavy-active': 'rgba(255, 255, 255, 0.12)',
          dark: 'rgba(0, 0, 0, 0.1)',
          'dark-hover': 'rgba(0, 0, 0, 0.15)',
          'dark-active': 'rgba(0, 0, 0, 0.2)',
        },
        // borders
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.15)',
          light: 'rgba(255, 255, 255, 0.2)',
          medium: 'rgba(255, 255, 255, 0.1)',
          heavy: 'rgba(255, 255, 255, 0.05)',
          dark: 'rgba(0, 0, 0, 0.1)',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.08)',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'rgba(255, 255, 255, 0.12)',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        input: 'rgba(255, 255, 255, 0.08)',
        ring: 'rgba(255, 255, 255, 0.2)',
        sidebar: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'rgba(255, 255, 255, 0.12)',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'rgba(255, 255, 255, 0.08)',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'rgba(255, 255, 255, 0.1)',
          ring: 'rgba(255, 255, 255, 0.15)',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backdropBlur: {
        'glass-sm': '4px',
        glass: '12px',
        'glass-md': '16px',
        'glass-lg': '24px',
        'glass-xl': '40px',
        'glass-2xl': '64px',
      },
      boxShadow: {
        glass: '0 4px 32px 0 rgba(31, 38, 135, 0.15)',
        'glass-sm': '0 2px 16px 0 rgba(31, 38, 135, 0.1)',
        'glass-md': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        'glass-lg': '0 16px 64px 0 rgba(31, 38, 135, 0.25)',
        'glass-xl': '0 24px 96px 0 rgba(31, 38, 135, 0.3)',
        'glass-inner': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'glass-outline': '0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        glass: '16px',
        'glass-sm': '8px',
        'glass-md': '20px',
        'glass-lg': '24px',
      },
      keyframes: {
        'glass-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glass-pulse': {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        'glass-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'glass-shimmer': 'glass-shimmer 2s linear infinite',
        'glass-pulse': 'glass-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'glass-float': 'glass-float 3s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'glass-gradient':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'glass-gradient-hover':
          'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%)',
        'glass-shimmer':
          'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
        'glass-radial':
          'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }: any) {
      addUtilities({
        '.glass': {
          background: 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          'box-shadow': '0 4px 32px 0 rgba(31, 38, 135, 0.15)',
        },
      })
    },
  ],
}

export default config
