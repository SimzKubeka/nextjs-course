/**
 * TagCard Component
 *
 * Purpose:
 * - Displays a tag with an associated icon and an optional question count.
 *
 * Functionality:
 * - Retrieves the appropriate icon class for the tag using `getDeviconClassName`.
 * - Links to the corresponding tag page using `ROUTES.TAGS(_id)`.
 * - Supports an optional question count display (`showCount`).
 * - Can be rendered in a compact mode if needed (`compact`).
 *
 * Features:
 * - Uses the `Badge` component for consistent styling.
 * - Ensures accessibility with proper structure and spacing.
 * - Supports light and dark mode themes.
 *
 * Styling & Responsiveness:
 * - Utilizes `background-light800_dark400` for adaptive theming.
 * - Adjusts layout dynamically based on props (`showCount`, `compact`).
 * - Uses uppercase styling for better readability.
 */

import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";

// Define the expected props for the component
interface Props {
  _id: string; // Unique identifier for the tag
  name: string; // Tag name (e.g., "React", "JavaScript")
  questions: number; // Number of associated questions
  showCount?: boolean; // Determines if the question count should be displayed
  compact?: boolean; // Determines if the tag should be displayed in a compact format
}

/**
 * TagCard Component
 * - Displays a badge representing a programming tag.
 * - Optionally shows the number of associated questions.
 *
 * @param {Props} _id - The tag's unique identifier.
 * @param {Props} name - The tag name.
 * @param {Props} questions - Number of questions related to the tag.
 * @param {Props} showCount - Whether to display the question count.
 * @param {Props} compact - Whether to use a compact display mode.
 * @returns {JSX.Element} - The rendered tag card component.
 */
const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  // Get the appropriate icon class for the tag
  const iconClass = getDeviconClassName(name);

  return (
    <Link
      href={ROUTES.TAGS(_id)}
      className="flex items-center justify-between gap-2"
    >
      {/* Tag Badge with Icon */}
      <Badge className="subtle-medium background-light800_dark400 text-dark100_light900 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex items-center justify-center space-x-2">
          <i className={iconClass}></i>
          <span className="pb-[2px]">{name}</span>
        </div>
      </Badge>

      {/* Optional Question Count */}
      {showCount && (
        <p className="text-dark100_light900 text-sm font-medium">{questions}</p>
      )}
    </Link>
  );
};

export default TagCard;
