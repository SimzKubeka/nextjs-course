/**
 * Authentication Validation Schemas
 *
 * Purpose:
 * - Defines validation rules for user sign-in and sign-up forms using Zod.
 *
 * Functionality:
 * - Ensures proper input validation before form submission.
 * - Provides user-friendly error messages for invalid inputs.
 * - Enforces constraints on email, password, username, and name fields.
 *
 * Features:
 * - Validates required fields (email, password, username, name).
 * - Enforces password complexity with minimum and maximum length, uppercase, lowercase, numeric, and special character requirements.
 * - Ensures username and name formatting constraints.
 * - Prevents submission of invalid data to enhance security and UX.
 *
 * Usage:
 * - `SignInSchema` is used for sign-in validation.
 * - `SignUpSchema` is used for sign-up validation.
 */

import { z } from "zod";

/**
 * SignInSchema
 * - Validates email and password fields for user sign-in.
 * - Ensures email format is valid.
 * - Requires password length between 6 and 32 characters.
 */
export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password must be less than 32 characters" }),
});

/**
 * SignUpSchema
 * - Validates username, name, email, and password fields for user sign-up.
 * - Enforces username and name constraints (length & character restrictions).
 * - Ensures email format is valid.
 * - Requires password complexity including uppercase, lowercase, numbers, and special characters.
 */
export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(32, { message: "Username must be less than 32 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username must contain only letters, numbers, and underscores",
    }),
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(32, { message: "Name must be less than 32 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Name must contain only letters, numbers, and underscores",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(32, { message: "Password must be less than 32 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
});
