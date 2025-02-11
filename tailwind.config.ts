/**
 * Tailwind CSS Configuration File
 *
 * Purpose:
 * - This file configures Tailwind CSS for the project, defining themes, custom styles, and responsive breakpoints.
 *
 * Functionality:
 * - Enables dark mode support using class-based toggling.
 * - Specifies the content paths to scan for Tailwind utility usage.
 * - Extends the default theme with custom colors, border radius, shadows, background images, and fonts.
 * - Configures responsive breakpoints for enhanced styling.
 * - Integrates essential Tailwind plugins for animations and typography enhancements.
 *
 * Features:
 * - Custom color palettes for primary, dark, and light themes.
 * - Scalable border-radius values utilizing CSS variables.
 * - Predefined box shadows for both light and dark themes.
 * - Background images for authentication screens.
 * - Custom font families for consistent typography.
 *
 * Styling & Responsiveness:
 * - Tailored screen sizes including an extra-small (xs) breakpoint at 420px for better mobile support.
 * - Utilizes utility classes and theme extensions for scalability and maintainability.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  // Enable dark mode using class-based toggling
  darkMode: ["class"],

  // Define content paths where Tailwind classes will be applied
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /**
       * Custom Color Palette
       * - Defines primary, dark, and light theme colors.
       */
      colors: {
        primary: {
          "100": "#b2d8d8", 
          "200": "#66b2b2",
          "300": "#008080", 
          "400": "#006666",
          "500": "#004c4c",
        },
        dark: {
          "100": "#000000",
          "200": "#0F1117",
          "300": "#151821",
          "400": "#212734",
          "500": "#101012",
        },
        light: {
          "400": "#858EAD",
          "500": "#7B8EC8",
          "700": "#DCE3F1",
          "800": "#F4F6F8",
          "850": "#FDFDFD",
          "900": "#FFFFFF",
        },
      },

      /**
       * Custom Border Radius
       * - Defines standard radii using CSS variables for flexibility.
       */
      borderRadius: {
        "2": "8px",
        "1.5": "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /**
       * Custom Box Shadows
       * - Provides predefined shadow effects for light and dark themes.
       */
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },

      /**
       * Custom Background Images
       * - Used for authentication pages to differentiate dark and light themes.
       */
      backgroundImage: {
        "auth-dark": 'url("/images/auth-dark.png")',
        "auth-light": 'url("/images/auth-light.png")',
      },

      /**
       * Responsive Breakpoints
       * - Defines an additional `xs` breakpoint at 420px for small screens.
       */
      screens: {
        xs: "420px",
      },

      /**
       * Custom Font Families
       * - Defines font families using CSS variables for dynamic control.
       */
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
    },
  },

  /**
   * Tailwind Plugins
   * - Includes additional features for animations and typography.
   */
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
