export interface Client {
  id: string;
  fullName: string;
  email?: string | null;
  phone?: string | null;
  company: string;
  tags: string[];
  createdAt: string;
}