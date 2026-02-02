
export type TicketPriority = "low" | "medium" | "high";
export type TicketStatus = "open" | "pending" | "resolved";

export interface Ticket {
  id: string;
  customer: string;
  subject: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignedTo: string;
  slaHours: number;
  createdBy: "ai" | "human";
  conversationId: string;
  createdAt: string;
}