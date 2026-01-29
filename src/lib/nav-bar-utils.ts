import {
  ChartNoAxesCombined,
  ClipboardList,
  LayoutDashboard,
  LucideIcon,
  MessageSquareText,
  Settings,
  Ticket,
} from "lucide-react";

interface NavBarItemType {
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Le menu de navigation
 */
export const NavBarItems: NavBarItemType[] = [
  {
    label: "Vue d'ensemble",
    href: "/",
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
    label: "Statistiques",
    href: "/stats",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Paramètres",
    href: "/settings",
    icon: Settings,
  },
];
