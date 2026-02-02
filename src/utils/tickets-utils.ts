import { Ticket, TicketPriority, TicketStatus } from "@/types/tickets.types";

// Données pour les tickets
export const ticketsData: Ticket[] = [
  {
    id: "TCK-001",
    customer: "Marie Dubois",
    subject: "Retard de livraison commande #12345",
    priority: "medium",
    status: "pending",
    slaHours: 48,
    createdBy: "user",
    conversationId: "chat_001",
    createdAt: "2026-01-29T10:00:00Z",
  },
  {
    id: "TCK-002",
    customer: "Jean Martin",
    subject: "Compte suspendu suite activité suspecte",
    priority: "high",
    status: "resolved",
    slaHours: 24,
    createdBy: "ai",
    conversationId: "chat_002",
    createdAt: "2026-01-28T09:30:00Z",
  },
  {
    id: "TCK-003",
    customer: "Sophie Laurent",
    subject: "Crash application iOS",
    priority: "high",
    status: "pending",
    slaHours: 24,
    createdBy: "ai",
    conversationId: "chat_003",
    createdAt: "2026-01-30T06:00:00Z",
  },
  {
    id: "TCK-004",
    customer: "Sophie Laurent",
    subject: "Export des données utilisateur",
    priority: "low",
    status: "open",
    slaHours: 72,
    createdBy: "user",
    conversationId: "chat_003",
    createdAt: "2026-01-27T14:15:00Z",
  },
  {
    id: "TCK-005",
    customer: "Pierre Rousseau",
    subject: "Changement de forfait abonnement",
    priority: "low",
    status: "resolved",
    slaHours: 72,
    createdBy: "user",
    conversationId: "chat_004",
    createdAt: "2026-01-26T11:45:00Z",
  },
  {
    id: "TCK-006",
    customer: "Thomas Petit",
    subject: "Paiement refusé",
    priority: "high",
    status: "pending",
    slaHours: 24,
    createdBy: "ai",
    conversationId: "chat_006",
    createdAt: "2026-01-30T08:30:00Z",
  },
  {
    id: "TCK-007",
    customer: "Thomas Petit",
    subject: "Crash app lors modification adresse",
    priority: "high",
    status: "open",
    slaHours: 12,
    createdBy: "user",
    conversationId: "chat_006",
    createdAt: "2026-01-30T05:00:00Z",
  },
  {
    id: "TCK-008",
    customer: "Lucie Moreau",
    subject: "Conseil produit – casque Bluetooth",
    priority: "low",
    status: "resolved",
    slaHours: 72,
    createdBy: "ai",
    conversationId: "chat_007",
    createdAt: "2026-01-25T16:20:00Z",
  },
  {
    id: "TCK-009",
    customer: "Nicolas Girard",
    subject: "Restauration de compte supprimé",
    priority: "high",
    status: "pending",
    slaHours: 6,
    createdBy: "ai",
    conversationId: "chat_008",
    createdAt: "2026-01-30T09:00:00Z",
  },
  {
    id: "TCK-010",
    customer: "Nicolas Girard",
    subject: "Perte de données utilisateur",
    priority: "high",
    status: "pending",
    slaHours: 4,
    createdBy: "user",
    conversationId: "chat_008",
    createdAt: "2026-01-30T07:30:00Z",
  },
  {
    id: "TCK-011",
    customer: "Camille Leroy",
    subject: "Réinitialisation mot de passe",
    priority: "medium",
    status: "resolved",
    slaHours: 48,
    createdBy: "ai",
    conversationId: "chat_009",
    createdAt: "2026-01-28T13:10:00Z",
  },
  {
    id: "TCK-012",
    customer: "Émilie Simon",
    subject: "Politique de retour produit",
    priority: "low",
    status: "resolved",
    slaHours: 72,
    createdBy: "ai",
    conversationId: "chat_011",
    createdAt: "2026-01-24T10:00:00Z",
  },
  {
    id: "TCK-013",
    customer: "Alexandre Durand",
    subject: "Produit défectueux – demande remboursement",
    priority: "high",
    status: "pending",
    slaHours: 12,
    createdBy: "ai",
    conversationId: "chat_012",
    createdAt: "2026-01-30T04:00:00Z",
  },
  {
    id: "TCK-014",
    customer: "Alexandre Durand",
    subject: "Client mécontent – conflit commercial",
    priority: "high",
    status: "pending",
    slaHours: 6,
    createdBy: "user",
    conversationId: "chat_012",
    createdAt: "2026-01-30T06:45:00Z",
  },
  {
    id: "TCK-015",
    customer: "Julie Mercier",
    subject: "Assistance achat cadeau",
    priority: "low",
    status: "resolved",
    slaHours: 72,
    createdBy: "ai",
    conversationId: "chat_013",
    createdAt: "2026-01-23T15:30:00Z",
  },
];

export function mapPriority(priority: TicketPriority) {
  switch (priority) {
    case "low":
      return {
        label: "Basse",
        color: "bg-green-100 text-green-700",
      };
    case "medium":
      return {
        label: "Moyenne",
        color: "bg-yellow-100 text-yellow-700",
      };
    case "high":
      return {
        label: "Haute",
        color: "bg-red-100 text-red-700",
      };
    default:
      return {
        label: priority,
        color: "bg-gray-100 text-gray-700",
      };
  }
}

export function mapStatus(status: TicketStatus) {
  switch (status) {
    case "open":
      return {
        label: "Ouvert",
        color: "bg-blue-100 text-blue-700",
      };
    case "pending":
      return {
        label: "En attente",
        color: "bg-orange-100 text-orange-700",
      };
    case "resolved":
      return {
        label: "Résolu",
        color: "bg-green-100 text-green-700",
      };
    default:
      return {
        label: status,
        color: "bg-gray-100 text-gray-700",
      };
  }
}

export function getSlaRemaining(createdAt: string, slaHours: number) {
  const created = new Date(createdAt).getTime();
  const now = Date.now();

  const elapsedMs = now - created;
  const slaMs = slaHours * 60 * 60 * 1000;
  const remainingMs = slaMs - elapsedMs;

  return remainingMs;
}

export function getSlaStatus(remainingMs: number) {
  if (remainingMs <= 0) {
    return {
      label: "SLA dépassé",
      color: "bg-red-100 text-red-700",
    };
  }

  const hoursLeft = Math.ceil(remainingMs / (1000 * 60 * 60));

  if (hoursLeft <= 4) {
    return {
      label: `${hoursLeft}h restantes`,
      color: "bg-orange-100 text-orange-700",
    };
  }

  return {
    label: `${hoursLeft}h restantes`,
    color: "bg-green-100 text-green-700",
  };
}
