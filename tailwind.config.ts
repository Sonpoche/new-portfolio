import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2lg": "1025px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#010A0F",  // Couleur sombre principale
          50: "#00101A",      // Très foncé pour les éléments de contraste léger
          100: "#010A0F",     // Couleur sombre principale
          200: "#002030",     // Légèrement plus clair que le principal
          300: "#003040",     // Variante pour les arrière-plans ou états
        },
        blue: {
          DEFAULT: "#034C60", // Couleur bleue sombre
          50: "#002B35",     // Variante très foncée
          100: "#034C60",    // Couleur bleue sombre
          200: "#2C90AA",    // Couleur bleue claire
          300: "#003D4D",    // Variante intermédiaire
          400: "#004E60",    // Plus clair que le principal
          500: "#2C90AA",    // Couleur bleue claire (aussi utilisée comme accent)
        },
        gray: {
          100: "#012A34",    // Couleur bleu-gris pour des éléments comme les fonds
          200: "#023040",    // Variante pour les arrière-plans
        },
        white: {
          DEFAULT: "#FFF",   // Couleur blanche principale
          100: "#F5F5F5",   // Blanc cassé
          200: "#E5E5E5",   // Blanc clair pour les éléments de contraste
        },
        purple: "#2C90AA",  // Couleur violet principale
        border: "#034C60",  // Utilisation de la couleur bleue sombre pour les bordures
        input: "#034C60",   // Couleur bleue sombre pour les champs de saisie
        ring: "#2C90AA",    // Couleur bleue claire pour les anneaux
        background: "#010A0F", // Couleur sombre principale pour les arrière-plans
        foreground: "#FFF",   // Couleur blanche principale pour le texte
        primary: {
          DEFAULT: "#034C60", // Couleur bleue sombre pour les éléments principaux
          foreground: "#FFF", // Couleur blanche pour le texte sur les éléments principaux
        },
        secondary: {
          DEFAULT: "#2C90AA", // Couleur bleue claire pour les éléments secondaires
          foreground: "#FFF", // Couleur blanche pour le texte sur les éléments secondaires
        },
        destructive: {
          DEFAULT: "#FF6B6B", // Couleur rouge pour les éléments destructifs (exemple)
          foreground: "#FFF", // Couleur blanche pour le texte sur les éléments destructifs
        },
        muted: {
          DEFAULT: "#023040", // Couleur gris foncé pour les éléments atténués
          foreground: "#FFF", // Couleur blanche pour le texte sur les éléments atténués
        },
        accent: {
          DEFAULT: "#2C90AA", // Couleur bleue claire pour les accents
          foreground: "#FFF", // Couleur blanche pour le texte sur les éléments d'accent
        },
        popover: {
          DEFAULT: "#034C60", // Couleur bleue sombre pour les popovers
          foreground: "#FFF", // Couleur blanche pour le texte dans les popovers
        },
        card: {
          DEFAULT: "#023040", // Couleur gris foncé pour les cartes
          foreground: "#FFF", // Couleur blanche pour le texte sur les cartes
        },
      },
      borderRadius: {
        lg: "0.5rem", // Modifier pour plus de personnalisation si nécessaire
        md: "0.375rem",
        sm: "0.25rem",
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(2, 1, 1, 0) 0%, #000000 100%)',
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
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
