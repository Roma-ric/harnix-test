import { Bell, Bot, CreditCard, LucideIcon, MessageSquare, Shield, Sun, Tag, Ticket } from "lucide-react";

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
        href: "/settings",
        icon: Sun,
      },
      {
        label: "Canaux",
        href: "/settings/channels",
        icon: MessageSquare,
      }
    ],
  },
  {
    label: "Intélligence",
    children: [
      {
        label: "IA & Assistants",
        href: "/settings/ai",
        icon: Bot,
      },
      {
        label: "Notifications",
        href: "/settings/notifications",
        icon: Bell,
      },
      {
        label: "Tags & Catégories",
        href: "/settings/tags",
        icon: Tag,
      },
    ],
  },
  {
    label: "Système",
    children: [
      {
        label: "Sécurité",
        href: "/settings/security",
        icon: Shield,
      },
      {
        label: "Facturation",
        href: "/settings/billing",
        icon: CreditCard,
      },
    ],
  },
];
