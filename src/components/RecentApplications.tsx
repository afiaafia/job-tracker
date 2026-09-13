import ApplicationCard from './ApplicationCard';
import FilterBar from './FilterBar';

function RecentApplications() {
  return (
    <section className="mt-8 overflow-hidden rounded-2xl border border-[#E5EAF2] bg-white shadow-sm">
      <div className="p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#17233A]">
              Recent Applications
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Track your job applications and stay organized.
            </p>
          </div>

          <button
            type="button"
            className="w-full rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            + Add Application
          </button>
        </div>

        <FilterBar />
      </div>

      <div className="hidden border-t border-[#E5EAF2] lg:block">
        <div className="grid grid-cols-[1.2fr_1.5fr_1fr_1fr_2fr_auto] gap-4 bg-[#F8FAFC] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#64748B]">
          <span>Company</span>
          <span>Position</span>
          <span>Applied Date</span>
          <span>Status</span>
          <span>Notes</span>
          <span>Actions</span>
        </div>
      </div>

      <div className="border-t border-[#E5EAF2]">
        <ApplicationCard
          company="Google"
          position="Frontend Developer"
          appliedDate="Sep 10, 2026"
          status="Interview"
          notes="Technical round scheduled for next week."
        />

        <ApplicationCard
          company="Microsoft"
          position="Software Engineer Intern"
          appliedDate="Sep 7, 2026"
          status="Applied"
          notes="Waiting for HR response."
        />

        <ApplicationCard
          company="Shopify"
          position="Frontend Intern"
          appliedDate="Sep 3, 2026"
          status="Offer"
          notes="Received offer. Negotiating terms."
        />

        <ApplicationCard
          company="Atlassian"
          position="React Developer"
          appliedDate="Aug 29, 2026"
          status="Rejected"
          notes="Good experience, but not a match this time."
        />
      </div>
    </section>
  );
}

export default RecentApplications;
