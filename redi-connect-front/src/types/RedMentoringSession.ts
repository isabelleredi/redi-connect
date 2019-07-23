import { RedProfile } from './RedProfile';

export interface RedMentoringSession {
  id?: string;
  mentor?: RedProfile;
  mentee?: RedProfile;
  mentorId?: string;
  menteeId?: string;
  date: Date;
  minuteDuration: number;
}
