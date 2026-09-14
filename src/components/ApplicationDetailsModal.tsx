import type { Application } from '../types/application';

interface ApplicationDetailsModalProps {
  application: Application;
  onClose: () => void;
  onEdit: () => void;
}

function ApplicationDetailsModal({
  application,
  onClose,
  onEdit,
}: ApplicationDetailsModalProps) {
  const statusStyles = {
    Applied: 'bg-blue-50 text-blue-600',
    Interview: 'bg-indigo-50 text-indigo-600',
    Offer: 'bg-emerald-50 text-emerald-600',
    Rejected: 'bg-rose-50 text-rose-600',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-details-title"
    >
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-[#E5EAF2] px-5 py-4 sm:px-6">
          <div>
            <h2
              id="application-details-title"
              className="text-lg font-bold text-[#17233A]"
            >
              Application Details
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Review the details of this application.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-[#64748B] transition hover:bg-slate-100 hover:text-[#17233A]"
          >
            ×
          </button>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
              Company
            </p>

            <p className="mt-1 text-base font-semibold text-[#17233A]">
              {application.company}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
              Position
            </p>

            <p className="mt-1 text-base text-[#17233A]">
              {application.position}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
                Applied Date
              </p>

              <p className="mt-1 text-sm text-[#64748B]">
                {application.appliedDate}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
                Status
              </p>

              <span
                className={`mt-1 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                  statusStyles[application.status]
                }`}
              >
                {application.status}
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
              Notes
            </p>

            <div className="mt-2 rounded-xl bg-[#F8FAFC] p-4">
              <p className="text-sm leading-6 text-[#64748B]">
                {application.notes || 'No notes added.'}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-[#E5EAF2] px-5 py-4 sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-[#E5EAF2] bg-white px-5 py-2.5 text-sm font-semibold text-[#64748B] transition hover:bg-slate-50"
          >
            Close
          </button>

          <button
            type="button"
            onClick={onEdit}
            className="rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Edit Application
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationDetailsModal;
