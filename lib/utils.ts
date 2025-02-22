import { techMap } from "@/constants/techMap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const deviconName = techName.toLowerCase().replace(/[ .] /g, "");

  return techMap[deviconName]
    ? `${techMap[deviconName]} colored`
    : "devicon-devicon-plain";
};
