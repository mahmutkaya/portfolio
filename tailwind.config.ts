import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(59, 130, 246)',
          light: 'rgb(96, 165, 250)',
          dark: 'rgb(37, 99, 235)',
        },
        secondary: {
          DEFAULT: 'rgb(99, 102, 241)',
          light: 'rgb(129, 140, 248)',
          dark: 'rgb(79, 70, 229)',
        },
        accent: {
          DEFAULT: 'rgb(236, 72, 153)',
          light: 'rgb(244, 114, 182)',
          dark: 'rgb(219, 39, 119)',
        },
        light: {
          100: 'rgb(255, 255, 255)',
          200: 'rgb(248, 250, 252)',
          300: 'rgb(241, 245, 249)',
        },
        dark: {
          100: 'rgb(51, 65, 85)',
          200: 'rgb(30, 41, 59)',
          300: 'rgb(15, 23, 42)',
        },
        gray: {
          100: 'rgb(243, 244, 246)',
          200: 'rgb(229, 231, 235)',
          300: 'rgb(209, 213, 219)',
          400: 'rgb(156, 163, 175)',
          500: 'rgb(107, 114, 128)',
          600: 'rgb(75, 85, 99)',
          700: 'rgb(55, 65, 81)',
          800: 'rgb(31, 41, 55)',
          900: 'rgb(17, 24, 39)',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-in-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
