/**
 * SocialAuthForm Component
 *
 * Purpose:
 * - Provides social authentication options for user sign-in using third-party providers.
 *
 * Functionality:
 * - Enables authentication via GitHub and Google.
 * - Uses NextAuth's `signIn` function to initiate OAuth authentication.
 * - Redirects users to the home page (`ROUTES.HOME`) upon successful login.
 * - Displays an error toast notification if authentication fails.
 *
 * Features:
 * - Utilizes the `Button` component for UI consistency.
 * - Supports dynamic error handling with toast notifications.
 * - Uses `next/image` for optimized icon rendering.
 *
 * Styling & Responsiveness:
 * - Fully responsive button layout with flex wrapping and spacing.
 * - Dark/light mode support for button styling.
 * - Uses Tailwind CSS for seamless UI integration.
 */

"use client";

import React from "react";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import { Button } from "../ui/button";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

/**
 * SocialAuthForm Component
 * - Provides buttons for GitHub and Google authentication.
 * - Handles OAuth authentication via NextAuth.
 * - Displays error messages if authentication fails.
 *
 * @returns {JSX.Element} - The rendered social authentication form.
 */
const SocialAuthForm = () => {
  // Common styling for social auth buttons
  const buttonColors =
    "background-dark400_light900 body-medium text-dark100_light900 flex-1 min-h-12 w-full rounded-2 px-4 py-3.5";

  /**
   * Handles authentication with a social provider.
   * - Initiates sign-in via NextAuth.
   * - Redirects user upon successful authentication.
   * - Displays error toast in case of failure.
   *
   * @param {'github' | 'google'} provider - The social provider to authenticate with.
   */
  const handleSocialSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        description:
          error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      {/* GitHub Authentication Button */}
      <Button
        className={buttonColors}
        onClick={() => handleSocialSignIn("github")}
      >
        <Image
          src="/icons/github.svg"
          alt="GitHub"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span className="text-base-semibold">Continue with GitHub</span>
      </Button>

      {/* Google Authentication Button */}
      <Button
        className={buttonColors}
        onClick={() => handleSocialSignIn("google")}
      >
        <Image
          src="/icons/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span className="text-base-semibold">Continue with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
