/**
 * LocalSearch Component
 *
 * Purpose:
 * - Provides a client-side search bar for filtering results locally.
 *
 * Functionality:
 * - Uses `useSearchParams` to track the search query in the URL.
 * - Updates the URL dynamically using `formUrlQuery` and `removeKeysFromUrlQuery`.
 * - Implements a debounce mechanism to prevent excessive URL updates.
 *
 * Features:
 * - Displays a search input field with an accompanying icon.
 * - Supports customizable placeholder text and additional styling (`otherClasses`).
 * - Efficiently updates the query string without unnecessary re-renders.
 *
 * Styling & Responsiveness:
 * - Uses a gradient background (`background-light800_darkgradient`) for a modern UI.
 * - Fully responsive layout with dynamic styling adjustments.
 * - Ensures seamless user experience by removing the search query when empty.
 */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  route: string; 
  imgSrc: string; 
  placeholder: string; 
  otherClasses?: string; 
}

/**
 * LocalSearch Component
 * - Implements a search input field that updates the query string dynamically.
 * - Uses debouncing to optimize performance and prevent excessive updates.
 *
 * @param {Props} route - The route where the search applies.
 * @param {Props} imgSrc - Icon representing the search field.
 * @param {Props} placeholder - Placeholder text for the search input.
 * @param {Props} otherClasses - Additional CSS classes for styling.
 * @returns {JSX.Element} - The rendered search component.
 */
const LocalSearch = ({ route, imgSrc, placeholder, otherClasses }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || ""; // Retrieve existing query

  const [searchQuery, setSearchQuery] = useState(query);

  // Effect to handle search query changes with debounce logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        // Update URL with new search query
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        // Remove query parameter when input is cleared
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });

          router.push(newUrl, { scroll: false });
        }
      }
    }, 500); // Debounce delay to optimize performance

    return () => clearTimeout(delayDebounceFn); 
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {/* Search Icon */}
      <Image
        src={imgSrc}
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
      />

      {/* Search Input Field */}
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
