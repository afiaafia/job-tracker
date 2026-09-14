export type Status = 'Applied' | 'Interview' | 'Offer' | 'Rejected';

export interface Application {
  id: string;
  company: string;
  position: string;
  appliedDate: string;
  status: Status;
  notes?: string;
}
