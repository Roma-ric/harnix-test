import {
  Bot,
  CheckCircle,
  LucideIcon,
  Smile,
  Ticket,
} from "lucide-react";
import {
  interventionTypeData,
  resolutionData,
  satisfactionData,
} from "./kpi-charts-utils";

export type OverviewKPIsType = {
  label: string;
  count: number;
  icon: LucideIcon;
  description: string;
  className: string;
  bgClassName?: string;
  borderClassName?: string;
  prefix?: string;
  suffix?: string;
};


// Calcul du taux de satisfaction moyen
const satisfactionRate =
  satisfactionData.reduce((acc, item) => acc + item.score, 0) /
  satisfactionData.length;

// Calcul du taux de résolution du dernier mois
const resolutionRate = resolutionData[resolutionData.length - 1].taux;

// Calcul du pourcentage d'adoption de l'IA (croissance)
const aiAdoptedPercentage = (() => {
  const firstMonth = interventionTypeData[0].ia;
  const lastMonth = interventionTypeData[interventionTypeData.length - 1].ia;
  return (((lastMonth - firstMonth) / firstMonth) * 100).toFixed(1);
})();

/**
 * Les indicateurs clés de performances
 */
export const OverviewKPIs: OverviewKPIsType[] = [
  {
    label: "Total Tickets",
    count: 645,
    icon: Ticket,
    description: "",
    className: "blue-600",
    bgClassName: "bg-blue-50",
    borderClassName: "border-blue-200",
  },
  {
    label: "Taux Résolution",
    count: resolutionRate,
    icon: CheckCircle,
    description: "",
    className: "green-700",
    bgClassName: "bg-green-50",
    borderClassName: "border-green-200",
    suffix: "%",
  },
  {
    label: "IA Adoptée",
    count: Number(aiAdoptedPercentage),
    icon: Bot,
    description: "",
    className: "purple-700",
    bgClassName: "bg-purple-50",
    borderClassName: "border-purple-200",
    prefix: "+",
    suffix: "%",
  },
  {
    label: "Satisfaction",
    count: satisfactionRate,
    icon: Smile,
    description: "",
    className: "pink-700",
    bgClassName: "bg-pink-50",
    borderClassName: "border-pink-200",
    suffix: "%",
  },
];
