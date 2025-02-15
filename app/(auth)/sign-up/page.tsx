/**
 * SignUpPage Component
 *
 * Purpose:
 * - This page renders the authentication form for user sign-up.
 *
 * Functionality:
 * - Utilizes the `AuthForm` component to handle user registration.
 * - Implements form validation using the `SignUpSchema`.
 * - Defines default input values for the sign-up form.
 * - Handles form submission asynchronously with a mock API response.
 *
 * Features:
 * - Client-side validation using the provided schema.
 * - Ensures a structured and user-friendly sign-up process.
 * - Easily extendable for additional authentication logic.
 *
 * Styling & Responsiveness:
 * - Fully compatible with Tailwind CSS styling within `AuthForm`.
 * - Ensures a responsive and accessible form layout.
 */

"use client";

import React from "react";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

/**
 * SignUpPage Component
 * - Renders the sign-up form using the `AuthForm` component.
 * - Applies validation schema and default form values.
 * - Handles form submission asynchronously.
 *
 * @returns {JSX.Element} - The rendered sign-up page.
 */
const SignUpPage = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        username: "",
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUpPage;
