import {
  ChartNoAxesCombined,
  ClipboardList,
  LayoutDashboard,
  LucideIcon,
  MessageSquareText,
  Settings,
  Ticket,
  Users2,
} from "lucide-react";

export interface DesktopSideBarItemType {
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Le menu de navigation
 */
export const DesktopSideBarItems: { label: string; children: DesktopSideBarItemType[] }[] = [
  {
    label: "Menu",
    children: [
      {
        label: "Vue d'ensemble",
        href: "/overview",
        icon: LayoutDashboard,
      },
      {
        label: "Conversations",
        href: "/chats",
        icon: MessageSquareText,
      },
      {
        label: "Tickets",
        href: "/tickets",
        icon: Ticket,
      },
      {
        label: "Campagnes",
        href: "/campaigns",
        icon: ClipboardList,
      },
      {
        label: "Clients",
        href: "/custumers",
        icon: Users2,
      },
      {
        label: "Statistiques",
        href: "/stats",
        icon: ChartNoAxesCombined,
      },
    ],
  },
  {
    label: "Paramètres",
    children: [
      {
        label: "Paramètres",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];
