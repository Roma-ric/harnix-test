import {
  LucideIcon,
  MessagesSquare,
  Siren,
  UserStar,
} from "lucide-react";

export interface OverviewKPIsType {
  label: string;
  description: string;
  count: number;
  icon: LucideIcon;
  className: string;
}

/**
 * Les indicateurs clés de performances
 */
export const OverviewKPIs: OverviewKPIsType[] = [
  {
    label: "Conversations actives",
    count: 12,
    icon: MessagesSquare,
    description: "",
    className: "pulsai-primary",
  },
  {
    label: "Clients réguliers",
    count: 43,
    icon: UserStar,
    description: "",
    className: "amber-500",
  },
  {
    label: "Alertes",
    count: 3,
    icon: Siren,
    description:
      "Vous avez des tickets en retard",
    className: "red-500",
  },
];
