interface StatsCardProps {
  title: string;
  value: number;
  change: string;
  changeType: 'positive' | 'negative';
}

function StatsCard({ title, value, change, changeType }: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-[#E5EAF2] bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-[#64748B]">{title}</p>

      <p className="mt-3 text-3xl font-bold text-[#17233A]">{value}</p>

      <p
        className={`mt-2 text-xs font-medium ${
          changeType === 'positive' ? 'text-blue-600' : 'text-red-500'
        }`}
      >
        {change}
      </p>
    </div>
  );
}

export default StatsCard;
