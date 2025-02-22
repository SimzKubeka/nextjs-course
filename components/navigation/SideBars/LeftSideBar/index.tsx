/**
 * LeftSideBar Component
 *
 * Purpose:
 * - Provides a persistent left sidebar for navigation and authentication actions.
 *
 * Functionality:
 * - Displays the main navigation links using the `NavLinks` component.
 * - Includes "Sign In" and "Sign Up" buttons for user authentication.
 * - Uses a sticky layout to ensure visibility while scrolling.
 *
 * Features:
 * - Responsive layout with conditional rendering for smaller screens.
 * - Dark/light mode support for consistent theming.
 * - Optimized for usability with a custom scrollbar.
 *
 * Styling & Responsiveness:
 * - Uses Tailwind CSS utilities for layout, spacing, and styling.
 * - `max-sm:hidden` ensures the sidebar is hidden on small screens.
 * - Maintains a clean UI with shadow effects and border separation.
 */

import React from "react";
import NavLinks from "../../NavLinks";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import Image from "next/image";

/**
 * LeftSideBar Component
 * - Displays navigation links and authentication buttons.
 * - Uses a sticky layout for persistent visibility.
 *
 * @returns {JSX.Element} - The rendered sidebar component.
 */
const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      {/* Navigation Links Section */}
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>

      {/* Authentication Buttons Section */}
      <div className="flex flex-col gap-3">
        {/* Sign In Button */}
        <Button
          asChild
          className="btn-secondary small-medium min-h-[46px] w-full rounded-lg px-4 py-3 shadow-none"
        >
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Sign In</span>
          </Link>
        </Button>

        {/* Sign Up Button */}
        <Button
          asChild
          className="btn-tertiary text-dark100_light900 light-border-2 border small-medium min-h-[46px] w-full rounded-lg px-4 py-3 shadow-none"
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              alt="sign-up"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSideBar;
