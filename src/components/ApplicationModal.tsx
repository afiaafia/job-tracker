import type { Application, Status } from '../types/application';
import ApplicationForm from './ApplicationForm';

interface ApplicationModalProps {
  application?: Application;
  onClose: () => void;
  onSubmit: (application: {
    company: string;
    position: string;
    appliedDate: string;
    status: Status;
    notes: string;
  }) => void;
}

function ApplicationModal({
  application,
  onClose,
  onSubmit,
}: ApplicationModalProps) {
  const isEditing = Boolean(application);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-modal-title"
    >
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-[#E5EAF2] px-5 py-4 sm:px-6">
          <div>
            <h2
              id="application-modal-title"
              className="text-lg font-bold text-[#17233A]"
            >
              {isEditing ? 'Edit Application' : 'Add Application'}
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              {isEditing
                ? 'Update the details of this job application.'
                : 'Add a new job application to your tracker.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-[#64748B] transition hover:bg-slate-100 hover:text-[#17233A]"
          >
            ×
          </button>
        </div>

        <div className="p-5 sm:p-6">
          <ApplicationForm
            initialApplication={application}
            onSubmit={onSubmit}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
}

export default ApplicationModal;
