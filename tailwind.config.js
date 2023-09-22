/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    animation: {
      bounce: "240ms ease 0s running bounce",
      "glow-line-horizontal":
        "glow-line-horizontal var(--animation-duration) ease-in forwards",
      "glow-line-vertical":
        "glow-line-vertical var(--animation-duration) ease-in forwards",
      "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
      "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      "image-rotate": "image-rotate 1400ms ease forwards",
      "sketch-lines": "sketch-lines 1200ms ease-out forwards",
      zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
    },
    backgroundImage: {
      "glass-gradient":
        "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
      "glow-lines":
        "linear-gradient(var(--direction), #9d9bf2 0.43%, #7877c6 14.11%, rgba(120, 119, 198, 0) 62.95%)",
      "hero-glow":
        "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
      "hero-gradient":
        "radial-gradient(ellipse 50% 80% at 20% 40%, rgba(93, 52, 221, 0.1), transparent), radial-gradient(ellipse 50% 80% at 80% 50%, rgba(120, 119, 198, 0.15),transparent)",
      "page-gradient":
        "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120, 119, 198, 0.3), transparent)",
      "primary-gradient":
        "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
      "radial-faded":
        "radial-gradient(circle at bottom center, var(--color), transparent 70%)",
    },
    boxShadow: {
      primary: "rgb(80 63 205 / 50%) 0px 1px 40px",
    },
    colors: {
      black: "#000212",
      gray: {
        100: "rgba(255, 255, 255, 0.08)", // transparent white
        200: "#f7f8f8", // off white
        300: "#b4bcd0", // primary text
        400: "#858699", // gray
        500: "#222326", // gray dark
      },
      transparent: "transparent",
      white: "#fff",
    },
    fontFamily: {
      sans: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    fontSize: {
      xs: "1.3rem",
      sm: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: ["2.2rem", "1.3"],
      "2xl": "2.4rem",
      "3xl": "2.6rem",
      "4xl": "3.2rem",
      "5xl": "4rem",
      "6xl": ["4.4rem", "1.1"],
      "7xl": ["4.8rem", "1.1"],
      "8xl": ["8rem", "1.1"],
    },
    keyframes: {
      bounce: {
        "50%": {
          transform: "scale(0.98)",
        },
      },
      "glow-line-horizontal": {
        "0%": { opacity: 0, transform: "translateX(0)" },
        "5%": { opacity: 1, transform: "translateX(0)" },
        "90%": { opacity: 1 },
        "100%": { opacity: 0, transform: "translateX(min(60vw, 45rem))" },
      },
      "glow-line-vertical": {
        "0%": { opacity: 0, transform: "translateY(0)" },
        "5%": { opacity: 1, transform: "translateY(0)" },
        "90%": { opacity: 1 },
        "100%": { opacity: 0, transform: "translateY(min(21vw, 45rem))" },
      },
      "fade-in": {
        from: { opacity: 0, transform: "translateY(-10px)" },
        to: { opacity: 1, transform: "none" },
      },
      "image-glow": {
        "0%": {
          opacity: 0,
          "animation-timing-function": "cubic-bezier(0.74, 0.25, 0.76, 1)",
        },
        "10%": {
          opacity: 1,
          "animation-timing-function": "cubic-bezier(0.12, 0.01, 0.08, 0.99)",
        },
        "100%": {
          opacity: 0.2,
        },
      },
      "image-rotate": {
        "0%": { transform: "rotateX(25deg)" },
        "25%": { transform: "rotateX(25deg) scale(0.9)" },
        "60%": { transform: "none" },
        "100%": { transform: "none" },
      },
      "sketch-lines": {
        "0%": { "stroke-dashoffset": 1 },
        "50%": { "stroke-dashoffset": 0 },
        "99%": { "stroke-dashoffset": 0 },
        "100%": { visiblity: "hidden" },
      },
      zap: {
        "0%, 9%, 11%, 100% ": {
          fill: "transparent",
        },
        "10%": {
          fill: "white",
        },
      },
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6rem",
      16: "6.4rem",
      "nav-height": "var(--nav-height)",
    },
    extend: {
      screens: {
        "lt-md": { max: "767px" },
        "md-range": { min: "768px", max: "999px" },
        "gt-md": { min: "1000px" },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      borderColor: {
        "border-slate-700": "rgb(51 65 85)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};