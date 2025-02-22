/**
 * Application Routes Configuration
 *
 * Purpose:
 * - Defines a centralized object for managing application routes.
 *
 * Functionality:
 * - Stores route paths as constants to prevent hardcoding in components.
 * - Ensures consistency and maintainability across the application.
 *
 * Features:
 * - Provides easy access to commonly used routes.
 * - Enhances readability and simplifies route updates.
 * - Prevents typos and redundant code by centralizing route definitions.
 *
 * Usage:
 * - Import `ROUTES` wherever route paths are needed (e.g., navigation, links, redirects).
 */

const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  COMUNITY: "/community",
  COLLECTIONS: "/collections",
  JOBS: "/find-jobs",
  TAGS: "/tags",
  PROFILE: "/profile",
  ASK_QUESTION: "/ask-a-question",
};

export default ROUTES;
