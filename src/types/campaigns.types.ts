export type CampaignStatus = "draft" | "active" | "paused";
export type CampaignChannel = "email" | "whatsapp" | "chat";

export type CampaignTrigger =
  | "inactive_users"
  | "ticket_resolved"
  | "onboarding"
  | "incident_alert";

export interface CampaignMetrics {
  sent: number;
  openRate: number; // %
  ctr: number; // %
}

export interface CampaignSegment {
  trigger: CampaignTrigger;
  description: string;
}

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  channel: CampaignChannel;
  segment: CampaignSegment;
  messageTemplate: string;
  scheduledAt?: string;
  metrics?: CampaignMetrics;
  createdAt: string;
}
