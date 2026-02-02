import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Renvoie les initiales des noms
 * @param fullName
 * @returns
 */
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

/**
 * Renvoie le formatage du temsp écoulé depuis data
 * @param date
 * @returns
 */
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
    month: "short",
  });
}

/**
 * Renvoie le formatage du nombre de message non lu
 * @param count
 * @returns
 */
export function formatUnreadCount(count: number): string {
  if (!count || count <= 0) return "";
  if (count > 9) return "9+";
  return count.toString();
}

/**
 * Renvoie le formatage de la date et de l'heure
 */
export function formatDateTime(date: string | Date): {
  date: string;
  time: string;
} {
  const d = new Date(date);
  const now = new Date();

  const isToday = d.toDateString() === now.toDateString();

  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  const isYesterday = d.toDateString() === yesterday.toDateString();

  const time = d.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isToday) {
    return {
      date: "Aujourd’hui",
      time: time,
    };
  }

  if (isYesterday) {
    return {
      date: "Hier",
      time: time,
    };
  }

  const dateFormatted = d.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
  });

  return {
    date: dateFormatted,
    time: time,
  };
}
