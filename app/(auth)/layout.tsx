/**
 * AuthLayout Component
 *
 * Purpose:
 * - Provides a structured authentication layout for sign-in and sign-up pages.
 *
 * Functionality:
 * - Wraps authentication-related components with a visually appealing UI.
 * - Includes a site logo and a brief introduction.
 * - Displays authentication forms and social login options.
 *
 * Features:
 * - Responsive layout with a centered authentication card.
 * - Light/dark mode support with dynamic background styling.
 * - Integrates `SocialAuthForm` for social authentication.
 *
 * Styling & Responsiveness:
 * - Uses Tailwind CSS for a modern, clean design.
 * - Ensures optimal display on various screen sizes (`min-w-[520px]` for larger screens).
 * - Background adapts based on theme settings.
 */

import React from "react";
import Image from "next/image";
import SocialAuthForm from "@/components/forms/SocialAuthForm";

/**
 * AuthLayout Component
 * - Provides a layout structure for authentication pages.
 * - Displays branding, authentication form, and social login options.
 *
 * @param {React.ReactNode} children - The authentication form content.
 * @returns {JSX.Element} - The rendered authentication layout.
 */
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full items-center px-4 py-10 justify-center bg-auth-light dark:bg-auth-dark bg-center bg-cover bg-no-repeat">
      {/* Authentication container */}
      <section className="light-border background-light800_darkgradient shadow-light100_dark900 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
        {/* Header: Branding and Welcome Message */}
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="h1-bold text-dark100_light900">Join The Flow</h1>
            <p className="text-dark500_light400 paragraph-regular">
              Join the Flow to connect with the community and start your journey
              to success.
            </p>
          </div>
          {/* Site Logo */}
          <Image
            src="/images/site-logo.svg"
            alt="site-logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>

        {/* Authentication form content */}
        {children}

        {/* Social authentication buttons */}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
