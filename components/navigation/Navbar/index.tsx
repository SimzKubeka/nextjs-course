/**
 * Navbar Component
 *
 * Purpose:
 * - Provides a fixed top navigation bar for the application.
 *
 * Functionality:
 * - Displays the site logo and name with a link to the homepage.
 * - Includes a placeholder for a global search feature.
 * - Integrates `ThemeToggler` for light/dark mode switching.
 * - Uses `MobileNavigation` for responsive menu handling on smaller screens.
 *
 * Features:
 * - Fixed position for consistent visibility (`z-50`).
 * - Responsive layout with hidden elements on smaller screens.
 * - Includes shadow effects for visual separation from content.
 *
 * Styling & Responsiveness:
 * - Tailwind CSS classes ensure adaptive styling for different screen sizes.
 * - `max-sm:hidden` hides text elements on smaller screens.
 * - `md:hidden` ensures mobile navigation appears only on small devices.
 */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "./ThemeToggler";
import MobileNavigation from "./MobileNavigation";

/**
 * Navbar Component
 * - Displays site branding, global search placeholder, and theme toggler.
 * - Supports responsive mobile navigation.
 *
 * @returns {JSX.Element} - The rendered navigation bar.
 */
const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 w-full fixed z-50 gap-5 p-6 shadow-light-300 dark:shadow-dark-200">
      {/* Logo and Site Name */}
      <Link className="flex items-center gap-2" href="/">
        <Image src="/images/site-logo.svg" alt="logo" width={32} height={32} />
        <p className="text-dark-100 dark:text-light-900 max-sm:hidden h2-bold">
          Dev<span className="text-orange-500">Flow</span>
        </p>
      </Link>

      {/* Global Search Placeholder (To be implemented) */}
      <p className="text-dark-100 dark:text-light-900 max-sm:hidden">
        Global Search
      </p>

      {/* Theme Toggle & Mobile Navigation */}
      <div className="flex-between gap-5">
        <ThemeToggler />

        {/* Mobile Navigation for smaller screens */}
        <div className="md:hidden">
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
