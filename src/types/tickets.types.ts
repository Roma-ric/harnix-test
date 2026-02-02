
export type TicketPriority = "low" | "medium" | "high";
export type TicketStatus = "open" | "pending" | "resolved";

export interface Ticket {
  id: string;
  customer: string;
  subject: string;
  priority: TicketPriority;
  status: TicketStatus;
  slaHours: number;
  createdBy: "ai" | "user";
  conversationId: string;
  createdAt: string;
}