/**
 * SignInPage Component
 *
 * Purpose:
 * - This page renders the authentication form for user sign-in.
 *
 * Functionality:
 * - Utilizes the `AuthForm` component to handle user authentication.
 * - Implements form validation using the `SignInSchema`.
 * - Defines default input values for the sign-in form.
 * - Handles form submission asynchronously with a mock API response.
 *
 * Features:
 * - Client-side validation using the provided schema.
 * - Ensures a structured and user-friendly authentication process.
 * - Easily extendable for additional authentication logic.
 *
 * Styling & Responsiveness:
 * - Fully compatible with Tailwind CSS styling within `AuthForm`.
 * - Ensures a responsive and accessible form layout.
 */

"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

/**
 * SignInPage Component
 * - Renders the sign-in form using the `AuthForm` component.
 * - Applies validation schema and default form values.
 * - Handles form submission asynchronously.
 *
 * @returns {JSX.Element} - The rendered sign-in page.
 */
const SignInPage = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignInPage;
