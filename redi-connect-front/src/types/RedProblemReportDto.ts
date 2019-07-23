export interface RedProblemReportDto {
  problemDescription: string;
  reportType: 'mentee-report-about-mentor' | 'mentor-report-about-mentee';
  ifFromMentor_cancelMentorshipImmediately?: boolean;
  reporteeId: string;
}
