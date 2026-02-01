import {
  Campaign,
  CampaignChannel,
  CampaignStatus,
} from "@/types/campaigns.types";

export const mapCampaignStatus = (status: CampaignStatus) => {
  switch (status) {
    case "active":
      return { label: "Active", color: "bg-green-100 text-green-800" };
    case "paused":
      return { label: "En pause", color: "bg-yellow-100 text-yellow-800" };
    case "draft":
      return { label: "Brouillon", color: "bg-gray-100 text-gray-800" };
  }
};

export const mapCampaignChannel = (channel: CampaignChannel) => {
  switch (channel) {
    case "email":
      return { label: "Email", color: "bg-blue-100 text-blue-800" };
    case "whatsapp":
      return { label: "WhatsApp", color: "bg-green-100 text-green-900" };
    case "chat":
      return { label: "Chat", color: "bg-purple-100 text-purple-800" };
  }
};

export const campaignsData: Campaign[] = [
  {
    id: "cmp_001",
    name: "Relance clients inactifs",
    status: "active",
    channel: "email",
    segment: {
      trigger: "inactive_users",
      description: "Clients inactifs depuis 30 jours",
    },
    metrics: {
      sent: 1240,
      openRate: 42,
      ctr: 12,
    },
    createdAt: "2025-01-10",
    messageTemplate: "",
  },
  {
    id: "cmp_002",
    name: "Post-résolution ticket",
    status: "paused",
    channel: "chat",
    segment: {
      trigger: "ticket_resolved",
      description: "Après résolution d’un ticket",
    },
    createdAt: "2025-01-15",
    messageTemplate: "",
  },
  {
    id: "cmp_003",
    name: "Onboarding – J+1",
    status: "active",
    channel: "email",
    segment: {
      trigger: "onboarding",
      description: "Nouveaux utilisateurs – Jour 1",
    },
    metrics: {
      sent: 980,
      openRate: 58,
      ctr: 21,
    },
    createdAt: "2025-01-05",
    messageTemplate: "",
  },
  {
    id: "cmp_004",
    name: "Onboarding – Découverte features",
    status: "active",
    channel: "chat",
    segment: {
      trigger: "onboarding",
      description: "Utilisateurs inscrits depuis 7 jours",
    },
    metrics: {
      sent: 760,
      openRate: 63,
      ctr: 29,
    },
    createdAt: "2025-01-07",
    messageTemplate: "",
  },
  {
    id: "cmp_005",
    name: "Relance essai gratuit",
    status: "active",
    channel: "email",
    segment: {
      trigger: "inactive_users",
      description: "Essai gratuit sans activité depuis 5 jours",
    },
    metrics: {
      sent: 430,
      openRate: 39,
      ctr: 14,
    },
    createdAt: "2025-01-12",
    messageTemplate: "",
  },
  {
    id: "cmp_006",
    name: "Alerte maintenance planifiée",
    status: "active",
    channel: "whatsapp",
    segment: {
      trigger: "incident_alert",
      description: "Tous les clients actifs",
    },
    metrics: {
      sent: 2100,
      openRate: 81,
      ctr: 9,
    },
    createdAt: "2025-01-18",
    messageTemplate: "",
  },
  {
    id: "cmp_007",
    name: "Incident critique – notification",
    status: "paused",
    channel: "email",
    segment: {
      trigger: "incident_alert",
      description: "Clients impactés par incident critique",
    },
    createdAt: "2025-01-20",
    messageTemplate: "",
  },
  {
    id: "cmp_008",
    name: "Feedback satisfaction support",
    status: "active",
    channel: "email",
    segment: {
      trigger: "ticket_resolved",
      description: "Demande de feedback après ticket résolu",
    },
    metrics: {
      sent: 670,
      openRate: 46,
      ctr: 18,
    },
    createdAt: "2025-01-22",
    messageTemplate: "",
  },
  {
    id: "cmp_009",
    name: "Réactivation clients churn",
    status: "draft",
    channel: "email",
    segment: {
      trigger: "inactive_users",
      description: "Clients inactifs depuis 90 jours",
    },
    createdAt: "2025-01-25",
    messageTemplate: "",
  },
  {
    id: "cmp_010",
    name: "Annonce nouvelle fonctionnalité",
    status: "active",
    channel: "email",
    segment: {
      trigger: "onboarding",
      description: "Clients actifs – feature release",
    },
    metrics: {
      sent: 1540,
      openRate: 49,
      ctr: 26,
    },
    createdAt: "2025-01-28",
    messageTemplate: "",
  },
  {
    id: "cmp_011",
    name: "Upsell plan Pro",
    status: "active",
    channel: "chat",
    segment: {
      trigger: "inactive_users",
      description: "Clients Free très actifs",
    },
    metrics: {
      sent: 320,
      openRate: 67,
      ctr: 34,
    },
    createdAt: "2025-01-30",
    messageTemplate: "",
  },
  {
    id: "cmp_012",
    name: "Rappel SLA à risque",
    status: "active",
    channel: "chat",
    segment: {
      trigger: "incident_alert",
      description: "Tickets avec SLA < 2h",
    },
    metrics: {
      sent: 180,
      openRate: 74,
      ctr: 41,
    },
    createdAt: "2025-02-01",
    messageTemplate: "",
  },
  {
    id: "cmp_013",
    name: "Welcome message WhatsApp",
    status: "paused",
    channel: "whatsapp",
    segment: {
      trigger: "onboarding",
      description: "Nouveaux clients premium",
    },
    createdAt: "2025-02-03",
    messageTemplate: "",
  },
  {
    id: "cmp_014",
    name: "Relance ticket en attente",
    status: "active",
    channel: "chat",
    segment: {
      trigger: "ticket_resolved",
      description: "Tickets en attente depuis 48h",
    },
    metrics: {
      sent: 410,
      openRate: 59,
      ctr: 23,
    },
    createdAt: "2025-02-05",
    messageTemplate: "",
  },
  {
    id: "cmp_015",
    name: "Prévention churn – usage en baisse",
    status: "draft",
    channel: "email",
    segment: {
      trigger: "inactive_users",
      description: "Baisse d’activité sur 14 jours",
    },
    createdAt: "2025-02-07",
    messageTemplate: "",
  },
];

