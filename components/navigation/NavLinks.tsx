/**
 * NavLinks Component
 *
 * Purpose:
 * - Renders the main navigation links dynamically from the `NAV_LINKS` constant.
 *
 * Functionality:
 * - Highlights the active link based on the current route.
 * - Handles dynamic user profile link assignment.
 * - Supports both desktop and mobile navigation.
 *
 * Features:
 * - Uses `next/navigation` to track the active route.
 * - Implements conditional styling to differentiate active and inactive links.
 * - Utilizes the `cn` utility for class management.
 * - Supports mobile navigation by wrapping links inside `SheetClose` for modals.
 *
 * Styling & Responsiveness:
 * - Tailored for both mobile and desktop layouts.
 * - Applies gradient backgrounds for active links.
 * - Uses conditional rendering to hide text on smaller screens.
 */

"use client";

import React from "react";
import NAV_LINKS from "@/constants/nav-links";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SheetClose } from "../ui/sheet";

/**
 * NavLinks Component
 * - Generates navigation links dynamically based on `NAV_LINKS`.
 * - Applies active state styling to highlight the current page.
 * - Supports mobile navigation through the `SheetClose` wrapper.
 *
 * @param {boolean} isMobileNav - Determines if the component is used in mobile navigation.
 * @returns {JSX.Element} - The rendered navigation links.
 */
const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  const userID = "001"; // Placeholder for user authentication logic

  return (
    <>
      {NAV_LINKS.map((link) => {
        // Determine if the current route is active
        const routeString =
          typeof link.route === "function" ? link.route(userID) : link.route;
        const isActive =
          (pathname.includes(routeString) && routeString.length > 1) ||
          pathname === routeString;

        // Handle dynamic user profile route
        if (routeString === "/profile") {
          if (userID) link.route = `${routeString}/${userID}`;
          else return null; // Hide profile link if no user ID is available
        }

        // Link Component with dynamic styling
        const LinkComponent = (
          <Link
            href={routeString}
            key={link.label}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light700",
              "flex items-center justify-start gap-4 p-4 bg-transparent"
            )}
          >
            {/* Navigation Icon */}
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />

            {/* Navigation Label */}
            <p
              className={cn(
                isActive ? "base-bold font-semibold" : "base-regular",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {link.label}
            </p>
          </Link>
        );

        // Handle conditional rendering for mobile navigation
        return isMobileNav ? (
          <SheetClose asChild key={routeString}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={routeString}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
