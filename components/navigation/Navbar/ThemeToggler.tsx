/**
 * ThemeToggler Component
 *
 * Purpose:
 * - Provides a dropdown menu for toggling between light, dark, and system themes.
 *
 * Functionality:
 * - Uses `next-themes` to manage theme state.
 * - Displays a sun icon for light mode and a moon icon for dark mode.
 * - Supports smooth transitions when switching themes.
 * - Accessible via a visually hidden (`sr-only`) label.
 *
 * Features:
 * - Integrated with Tailwind CSS for smooth theme transitions.
 * - Uses `DropdownMenu` for an intuitive UI.
 * - Automatically adjusts theme based on user preference or system settings.
 *
 * Styling & Responsiveness:
 * - Icons rotate and scale based on the active theme.
 * - Dropdown menu is aligned to the right (`align="end"`).
 * - Uses `absolute` positioning for seamless icon transitions.
 */

"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * ThemeToggler Component
 * - Allows users to switch between light, dark, and system themes.
 * - Utilizes a dropdown menu for easy selection.
 *
 * @returns {JSX.Element} - The rendered theme toggler component.
 */
export function ThemeToggler() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      {/* Theme Toggle Button */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* Sun icon (Visible in light mode) */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          {/* Moon icon (Visible in dark mode) */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          {/* Screen reader-only label */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown Menu Content */}
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ThemeToggler;
