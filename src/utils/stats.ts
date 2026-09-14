import type { Application } from '../types/application';

export function getApplicationStats(applications: Application[]) {
  return {
    total: applications.length,
    interviews: applications.filter(
      (application) => application.status === 'Interview'
    ).length,
    offers: applications.filter((application) => application.status === 'Offer')
      .length,
    rejected: applications.filter(
      (application) => application.status === 'Rejected'
    ).length,
  };
}
