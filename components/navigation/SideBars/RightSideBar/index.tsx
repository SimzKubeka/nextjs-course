/**
 * RightSideBar Component
 *
 * Purpose:
 * - Provides a sidebar displaying top questions and popular tags.
 *
 * Functionality:
 * - Lists the most popular questions with links to their respective pages.
 * - Displays the most commonly used tags with associated question counts.
 * - Stays fixed on the right side of the screen for easy navigation.
 *
 * Features:
 * - Uses `ROUTES.QUESTION(String(_id))` for dynamic question linking.
 * - Implements `TagCard` for structured and styled tag representation.
 * - Supports dark and light themes for seamless UI adaptation.
 *
 * Styling & Responsiveness:
 * - Fixed positioning (`sticky right-0 top-0`) ensures visibility while scrolling.
 * - Uses `max-sm:hidden` to hide on small screens and adjusts width for different viewports.
 * - Includes a custom scrollbar (`custom-scrollbar`) for smooth scrolling.
 */

import React from "react";
import Link from "next/link";
import { questions, tags } from "@/constants/questions";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import TagCard from "@/components/cards/TagCard";

/**
 * RightSideBar Component
 * - Displays a list of top questions and popular tags.
 * - Provides links for quick navigation to question and tag pages.
 *
 * @returns {JSX.Element} - The rendered right sidebar component.
 */
const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-28 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[270px]">
      {/* Top Questions Section */}
      <div className="flex flex-col gap-2">
        <h3 className="text-dark200_light900 font-medium">Top Questions</h3>
        <div className="mt-6 flex w-full flex-col gap-6">
          {questions.map(({ _id, title }) => (
            <Link
              href={ROUTES.QUESTION(String(_id))}
              key={_id}
              className="flex items-center justify-between gap-6 cursor-pointer"
            >
              {/* Question Title */}
              <p className="text-dark200_light900 text-xs font-normal">
                {title}
              </p>

              {/* Chevron Icon */}
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags Section */}
      <div className="mt-16">
        <h3 className="text-dark200_light900 font-medium">Popular Tags</h3>
        <div className="mt-6 flex w-full flex-col gap-4">
          {tags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={String(_id)}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
