import type { Application } from '../types/application';

interface RecentActivityProps {
  applications: Application[];
}

function RecentActivity({ applications }: RecentActivityProps) {
  const recentApplications = [...applications]
    .sort((a, b) => b.appliedDate.localeCompare(a.appliedDate))
    .slice(0, 5);

  const getStatusStyle = (status: Application['status']) => {
    if (status === 'Applied') {
      return 'bg-blue-50 text-blue-600';
    }

    if (status === 'Interview') {
      return 'bg-indigo-50 text-indigo-600';
    }

    if (status === 'Offer') {
      return 'bg-emerald-50 text-emerald-600';
    }

    return 'bg-rose-50 text-rose-600';
  };

  return (
    <section className="mt-8 rounded-2xl border border-[#E5EAF2] bg-white p-5 shadow-sm sm:p-6">
      <div>
        <h2 className="text-lg font-bold text-[#17233A]">Recent Activity</h2>

        <p className="mt-1 text-sm text-[#64748B]">
          Keep track of your latest application activity.
        </p>
      </div>

      {recentApplications.length > 0 ? (
        <div className="mt-6 space-y-4">
          {recentApplications.map((application) => (
            <div
              key={application.id}
              className="flex items-start gap-3 rounded-xl border border-[#E5EAF2] p-4 transition hover:bg-[#F8FAFC]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm text-blue-600">
                ✓
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-[#17233A]">
                  Application at {application.company}
                </p>

                <p className="mt-1 truncate text-sm text-[#64748B]">
                  {application.position}
                </p>

                <p className="mt-2 text-xs text-[#94A3B8]">
                  Applied on{' '}
                  {new Date(application.appliedDate).toLocaleDateString(
                    'en-US',
                    {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    }
                  )}
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                  application.status
                )}`}
              >
                {application.status}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-xl bg-[#F8FAFC] px-4 py-8 text-center">
          <p className="text-sm font-medium text-[#64748B]">
            No recent activity yet.
          </p>

          <p className="mt-1 text-xs text-[#94A3B8]">
            Your application activity will appear here.
          </p>
        </div>
      )}
    </section>
  );
}

export default RecentActivity;
