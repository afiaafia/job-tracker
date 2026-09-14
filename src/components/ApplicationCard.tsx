import type { Status } from '../types/application';

interface ApplicationCardProps {
  company: string;
  position: string;
  appliedDate: string;
  status: Status;
  notes: string;
  onEdit: () => void;
  onDelete: () => void;
}

function ApplicationCard({
  company,
  position,
  appliedDate,
  status,
  notes,
  onEdit,
  onDelete,
}: ApplicationCardProps) {
  const statusStyles = {
    Applied: 'bg-blue-50 text-blue-600',
    Interview: 'bg-indigo-50 text-indigo-600',
    Offer: 'bg-emerald-50 text-emerald-600',
    Rejected: 'bg-rose-50 text-rose-600',
  };

  return (
    <div className="border-b border-[#E5EAF2] px-5 py-5 last:border-b-0 sm:px-6">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1.2fr_1.5fr_1fr_1fr_2fr_auto] lg:items-center">
        <div className="min-w-0">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8] lg:hidden">
            Company
          </p>

          <p className="truncate text-sm font-semibold text-[#17233A]">
            {company}
          </p>
        </div>

        <div className="min-w-0">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8] lg:hidden">
            Position
          </p>

          <p className="text-sm text-[#17233A]">{position}</p>
        </div>

        <div>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8] lg:hidden">
            Applied Date
          </p>

          <p className="text-sm text-[#64748B]">{appliedDate}</p>
        </div>

        <div>
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8] lg:hidden">
            Status
          </p>

          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
          >
            {status}
          </span>
        </div>

        <div className="min-w-0">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-[#94A3B8] lg:hidden">
            Notes
          </p>

          <p className="line-clamp-2 text-sm text-[#64748B]">
            {notes || 'No notes added.'}
          </p>
        </div>

        <div className="flex items-center gap-1 border-t border-[#E5EAF2] pt-3 lg:border-0 lg:pt-0 lg:justify-end">
          <button
            type="button"
            aria-label={`View ${company} application`}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-[#64748B] transition hover:bg-slate-100 hover:text-[#17233A]"
          >
            ◉
          </button>

          <button
            type="button"
            onClick={onEdit}
            aria-label={`Edit ${company} application`}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-[#64748B] transition hover:bg-slate-100 hover:text-[#17233A]"
          >
            ✎
          </button>

          <button
            type="button"
            onClick={onDelete}
            aria-label={`Delete ${company} application`}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm text-[#64748B] transition hover:bg-rose-50 hover:text-rose-500"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard;
