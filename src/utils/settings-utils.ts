import { Bell, LucideIcon, MessageSquare, Sun, Ticket } from "lucide-react";

export interface SettingsNavigationMenuType {
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Le menu des paramètres
 */
export const SettingsNavigationMenu: {
  label: string;
  children: SettingsNavigationMenuType[];
}[] = [
  {
    label: "Configuration",
    children: [
      {
        label: "Général",
        href: "/",
        icon: Sun,
      },
      {
        label: "Canaux",
        href: "/channels",
        icon: MessageSquare,
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: Bell,
      },
    ],
  },
];
