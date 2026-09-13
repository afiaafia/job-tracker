import StatsCard from './StatsCard';

function Dashboard() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Applications"
        value={24}
        change="↑ 20% vs. last 30 days"
        changeType="positive"
      />

      <StatsCard
        title="Interviews"
        value={6}
        change="↑ 50% vs. last 30 days"
        changeType="positive"
      />

      <StatsCard
        title="Offers"
        value={2}
        change="↑ 100% vs. last 30 days"
        changeType="positive"
      />

      <StatsCard
        title="Rejected"
        value={5}
        change="↓ 17% vs. last 30 days"
        changeType="negative"
      />
    </section>
  );
}

export default Dashboard;
