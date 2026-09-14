import type { Application } from '../types/application';

interface ApplicationStatusOverviewProps {
  applications: Application[];
}

function ApplicationStatusOverview({
  applications,
}: ApplicationStatusOverviewProps) {
  const statusData = [
    {
      label: 'Applied',
      count: applications.filter(
        (application) => application.status === 'Applied'
      ).length,
      barStyle: 'bg-blue-500',
      textStyle: 'text-blue-600',
    },
    {
      label: 'Interview',
      count: applications.filter(
        (application) => application.status === 'Interview'
      ).length,
      barStyle: 'bg-indigo-500',
      textStyle: 'text-indigo-600',
    },
    {
      label: 'Offer',
      count: applications.filter(
        (application) => application.status === 'Offer'
      ).length,
      barStyle: 'bg-emerald-500',
      textStyle: 'text-emerald-600',
    },
    {
      label: 'Rejected',
      count: applications.filter(
        (application) => application.status === 'Rejected'
      ).length,
      barStyle: 'bg-rose-500',
      textStyle: 'text-rose-600',
    },
  ];

  const total = applications.length;

  return (
    <section className="mt-8 rounded-2xl border border-[#E5EAF2] bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#17233A]">
            Applications by Status
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            See how your applications are progressing.
          </p>
        </div>

        <p className="text-sm font-semibold text-[#64748B]">
          {total} {total === 1 ? 'application' : 'applications'}
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {statusData.map((status) => {
          const percentage =
            total === 0 ? 0 : Math.round((status.count / total) * 100);

          return (
            <div key={status.label}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${status.barStyle}`}
                    aria-hidden="true"
                  />

                  <span className="text-sm font-medium text-[#17233A]">
                    {status.label}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-[#17233A]">
                    {status.count}
                  </span>

                  <span className={`font-semibold ${status.textStyle}`}>
                    {percentage}%
                  </span>
                </div>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#F1F5F9]">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${status.barStyle}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {total === 0 && (
        <div className="mt-5 rounded-xl bg-[#F8FAFC] px-4 py-3 text-center text-sm text-[#64748B]">
          Add your first application to see the status distribution.
        </div>
      )}
    </section>
  );
}

export default ApplicationStatusOverview;
