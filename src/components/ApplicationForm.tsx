import type { FormEvent } from 'react';
import type { Application, Status } from '../types/application';

interface ApplicationFormProps {
  initialApplication?: Application;
  onSubmit: (application: {
    company: string;
    position: string;
    appliedDate: string;
    status: Status;
    notes: string;
  }) => void;
  onCancel: () => void;
}

function ApplicationForm({
  initialApplication,
  onSubmit,
  onCancel,
}: ApplicationFormProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    onSubmit({
      company: String(formData.get('company') ?? ''),
      position: String(formData.get('position') ?? ''),
      appliedDate: String(formData.get('appliedDate') ?? ''),
      status: String(formData.get('status') ?? 'Applied') as Status,
      notes: String(formData.get('notes') ?? ''),
    });
  };

  const isEditing = Boolean(initialApplication);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-[#17233A]"
          >
            Company Name
          </label>

          <input
            id="company"
            name="company"
            type="text"
            placeholder="e.g. Google"
            defaultValue={initialApplication?.company ?? ''}
            required
            className="w-full rounded-xl border border-[#E5EAF2] bg-white px-4 py-3 text-sm text-[#17233A] outline-none transition placeholder:text-[#94A3B8] focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="position"
            className="mb-2 block text-sm font-medium text-[#17233A]"
          >
            Position
          </label>

          <input
            id="position"
            name="position"
            type="text"
            placeholder="e.g. Frontend Developer"
            defaultValue={initialApplication?.position ?? ''}
            required
            className="w-full rounded-xl border border-[#E5EAF2] bg-white px-4 py-3 text-sm text-[#17233A] outline-none transition placeholder:text-[#94A3B8] focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="appliedDate"
            className="mb-2 block text-sm font-medium text-[#17233A]"
          >
            Applied Date
          </label>

          <input
            id="appliedDate"
            name="appliedDate"
            type="date"
            defaultValue={initialApplication?.appliedDate ?? ''}
            required
            className="w-full rounded-xl border border-[#E5EAF2] bg-white px-4 py-3 text-sm text-[#17233A] outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="mb-2 block text-sm font-medium text-[#17233A]"
          >
            Status
          </label>

          <select
            id="status"
            name="status"
            defaultValue={initialApplication?.status ?? 'Applied'}
            className="w-full rounded-xl border border-[#E5EAF2] bg-white px-4 py-3 text-sm text-[#17233A] outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
          >
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="mb-2 block text-sm font-medium text-[#17233A]"
        >
          Notes
        </label>

        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Add any notes about this application..."
          defaultValue={initialApplication?.notes ?? ''}
          className="w-full resize-none rounded-xl border border-[#E5EAF2] bg-white px-4 py-3 text-sm text-[#17233A] outline-none transition placeholder:text-[#94A3B8] focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-[#E5EAF2] pt-5 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-[#E5EAF2] bg-white px-5 py-2.5 text-sm font-semibold text-[#64748B] transition hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {isEditing ? 'Save Changes' : 'Add Application'}
        </button>
      </div>
    </form>
  );
}

export default ApplicationForm;
