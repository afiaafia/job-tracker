import type { Application } from '../types/application';
import useLocalStorage from '../hooks/useLocalStorage';
import { getApplicationStats } from '../utils/stats';
import StatsCard from './StatsCard';

function Dashboard() {
  const [applications] = useLocalStorage<Application[]>(
    'jobtrack-applications',
    []
  );

  const stats = getApplicationStats(applications);

  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Applications"
        value={stats.total}
        change="Current total"
        changeType="positive"
      />

      <StatsCard
        title="Interviews"
        value={stats.interviews}
        change="Current total"
        changeType="positive"
      />

      <StatsCard
        title="Offers"
        value={stats.offers}
        change="Current total"
        changeType="positive"
      />

      <StatsCard
        title="Rejected"
        value={stats.rejected}
        change="Current total"
        changeType="negative"
      />
    </section>
  );
}

export default Dashboard;
