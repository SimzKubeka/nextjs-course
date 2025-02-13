/**
 * ThemeProvider Component
 *
 * Purpose:
 * - This component wraps the application with a theme provider, enabling theme switching.
 *
 * Functionality:
 * - Utilizes `next-themes` to provide light and dark mode support.
 * - Allows dynamic theme switching based on user preferences or system settings.
 * - Passes all received props to the `NextThemeProvider`.
 *
 * Features:
 * - Supports client-side rendering using `"use client"`.
 * - Ensures seamless theme persistence across page reloads.
 * - Maintains a consistent user experience across different themes.
 *
 * Styling & Responsiveness:
 * - Fully compatible with Tailwind CSS's `dark:` classes.
 * - Dynamically applies themes without affecting performance.
 */

"use client";

import React from "react";
import { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemeProvider } from "next-themes";

/**
 * ThemeProvider Component
 * - Wraps the application with the Next.js theme provider.
 * - Supports dark mode and other theme-based configurations.
 *
 * @param {ThemeProviderProps} props - Theme provider properties including default theme settings.
 * @returns {JSX.Element} - Wrapped application with theme context.
 */
const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
