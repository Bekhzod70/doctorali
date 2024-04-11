import type { Config } from "tailwindcss";

const child = ({ addVariant }: { addVariant: any }) => {
  addVariant("child", "& > *");
  addVariant("child-hover", "& > *:hover");
  addVariant("child-focus", "& > *:focus");
  addVariant("child-first", "& > *:first-child");
  addVariant("child-last", "& > *:last-child");
};

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "400px",
      sm: "560px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xlg: "1300px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1600px",
      },
    },
    extend: {
      fontFamily: {
        inter: "var(--inter-font)",
        "times-new-roman": ["Times New Roman", "serif"],
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135.84deg, #DCBC55 15.91%, #C59F36 38.52%, #BF9A32 64.21%, #B9922D 84.42%)",
      },
      colors: {
        green: {
          DEFAULT: "#0B584D",
          dark: "#04312B",
          light: "#9BCE0B",
        },
        gray: {
          DEFAULT: "#909090",
          light: "#F9F9F9",
        },
        red: "#F33333",
        white: "#FFFFFF",
        orange: "#D9A952",
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
      fontSize: {
        heading1: ["68px", "68px"],
        heading2: ["58px", "58px"],
        heading3: ["48px", "48px"],
        heading4: ["28px", "33.6px"],
        paragraph1: ["20px", "28px"],
        paragraph2: ["16px", "22.4px"],
        button1: "20px",
        button2: "16px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        inherit: "inherit",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), child],
} satisfies Config;

export default config;
