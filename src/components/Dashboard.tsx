import type { Application } from '../types/application';
import { getApplicationStats } from '../utils/stats';
import ApplicationStatusOverview from './ApplicationStatusOverview';
import RecentActivity from './RecentActivity';
import StatsCard from './StatsCard';

interface DashboardProps {
  applications: Application[];
}

function Dashboard({ applications }: DashboardProps) {
  const stats = getApplicationStats(applications);

  const getPercentage = (value: number) => {
    if (stats.total === 0) {
      return 0;
    }

    return Math.round((value / stats.total) * 100);
  };

  return (
    <>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Applications"
          value={stats.total}
          description={
            stats.total === 1
              ? '1 application tracked'
              : `${stats.total} applications tracked`
          }
          icon="▣"
          iconStyle="bg-blue-50 text-blue-600"
        />

        <StatsCard
          title="Interviews"
          value={stats.interviews}
          description={`${getPercentage(stats.interviews)}% of total applications`}
          icon="◔"
          iconStyle="bg-indigo-50 text-indigo-600"
        />

        <StatsCard
          title="Offers"
          value={stats.offers}
          description={`${getPercentage(stats.offers)}% of total applications`}
          icon="✓"
          iconStyle="bg-emerald-50 text-emerald-600"
        />

        <StatsCard
          title="Rejected"
          value={stats.rejected}
          description={`${getPercentage(stats.rejected)}% of total applications`}
          icon="×"
          iconStyle="bg-rose-50 text-rose-600"
        />
      </section>

      <ApplicationStatusOverview applications={applications} />

      <RecentActivity applications={applications} />
    </>
  );
}

export default Dashboard;
