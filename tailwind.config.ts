import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        footer: "hsl(var(--footer))",
        // Official Visa Brand Colors
        "visa-gold": "#F7B600",
        "visa-blue": "#1A1F71",
        "visa-dark": "#0B1C2D",
        "visa-gray": "#9CA3AF",
        "visa-white": "#F9FAFB",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 28, 45, 0.25)",
        glow: "0 0 40px rgba(247, 182, 0, 0.2)",
        "glow-lg": "0 0 60px rgba(247, 182, 0, 0.3)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1200px 0" },
          "100%": { backgroundPosition: "1200px 0" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.2s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        pulse: "pulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      }
    }
  },
  plugins: []
} satisfies Config;
