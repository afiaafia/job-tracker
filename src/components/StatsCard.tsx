interface StatsCardProps {
  title: string;
  value: number;
  description: string;
  icon: string;
  iconStyle: string;
}

function StatsCard({
  title,
  value,
  description,
  icon,
  iconStyle,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-[#E5EAF2] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-[#64748B]">{title}</p>

          <p className="mt-3 text-3xl font-bold tracking-tight text-[#17233A]">
            {value}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${iconStyle}`}
          aria-hidden="true"
        >
          {icon}
        </div>
      </div>

      <p className="mt-3 text-xs font-medium text-[#64748B]">{description}</p>
    </div>
  );
}

export default StatsCard;
