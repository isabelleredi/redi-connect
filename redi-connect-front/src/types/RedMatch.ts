import { RedProfile } from './RedProfile';

export interface RedMatch {
  id?: string;
  status: 'applied' | 'accepted' | 'completed' | 'cancelled';
  matchMadeActiveOn: string;
  applicationText: string;
  mentor?: RedProfile;
  mentee?: RedProfile;
}
