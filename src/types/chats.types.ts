type MessageType = "image" | "video" | "doc" | "text";
type MessageSender = "customer" | "agent" | "ai";

interface ChatMessage {
  id: string;
  type: MessageType;
  sender: MessageSender;
  content: string;
  read: boolean;
  createdAt: string;
}

export interface ChatType {
  id: string;
  customer: string;
  isOnline: boolean;
  nbUnreadMessage: number;
  lastMessageText: string;
  lastMessageType: MessageType;
  lastMessageAt: string;
  messages: ChatMessage[];
}
