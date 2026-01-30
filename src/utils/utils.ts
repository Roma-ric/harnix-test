import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName?: string | null): string {
  if (!fullName) return "";

  return fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export function getTimeAgo(date: string | Date): string {
  const now = new Date();
  const past = new Date(date);
  const diff = now.getTime() - past.getTime();

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) {
    return "à l’instant";
  }

  if (diff < hour) {
    return `${Math.floor(diff / minute)} min`;
  }

  if (diff < day) {
    return `${Math.floor(diff / hour)} h`;
  }

  if (diff < 7 * day) {
    return `${Math.floor(diff / day)} j`;
  }

  return past.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short"
  });
}

