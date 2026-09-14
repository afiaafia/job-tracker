import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import type { Application, Status } from '../types/application';
import ApplicationCard from './ApplicationCard';
import ApplicationDetailsModal from './ApplicationDetailsModal';
import ApplicationModal from './ApplicationModal';
import FilterBar from './FilterBar';

interface RecentApplicationsProps {
  applications: Application[];
  setApplications: React.Dispatch<React.SetStateAction<Application[]>>;
}

type SortOption = 'latest' | 'oldest' | 'company';

function RecentApplications({
  applications,
  setApplications,
}: RecentApplicationsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<Status | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('latest');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApplication, setEditingApplication] =
    useState<Application | null>(null);
  const [viewingApplication, setViewingApplication] =
    useState<Application | null>(null);

  const filteredApplications = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    const result = applications.filter((application) => {
      const matchesSearch =
        application.company.toLowerCase().includes(search) ||
        application.position.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === 'all' || application.status === statusFilter;

      return matchesSearch && matchesStatus;
    });

    return [...result].sort((a, b) => {
      if (sortBy === 'latest') {
        return b.appliedDate.localeCompare(a.appliedDate);
      }

      if (sortBy === 'oldest') {
        return a.appliedDate.localeCompare(b.appliedDate);
      }

      return a.company.localeCompare(b.company);
    });
  }, [applications, searchTerm, statusFilter, sortBy]);

  const hasActiveFilters = searchTerm.trim() !== '' || statusFilter !== 'all';

  const handleOpenAddModal = () => {
    setEditingApplication(null);
    setIsModalOpen(true);
  };

  const handleView = (application: Application) => {
    setViewingApplication(application);
  };

  const handleCloseDetails = () => {
    setViewingApplication(null);
  };

  const handleEdit = (application: Application) => {
    setViewingApplication(null);
    setEditingApplication(application);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingApplication(null);
  };

  const handleStatusChange = (id: string, status: Status) => {
    const applicationToUpdate = applications.find(
      (application) => application.id === id
    );

    setApplications((currentApplications) =>
      currentApplications.map((application) =>
        application.id === id
          ? {
              ...application,
              status,
            }
          : application
      )
    );

    setViewingApplication((currentApplication) =>
      currentApplication?.id === id
        ? {
            ...currentApplication,
            status,
          }
        : currentApplication
    );

    if (applicationToUpdate) {
      toast.success(
        `${applicationToUpdate.company} status updated to ${status}.`
      );
    }
  };

  const handleDelete = (id: string) => {
    const applicationToDelete = applications.find(
      (application) => application.id === id
    );

    setApplications((currentApplications) =>
      currentApplications.filter((application) => application.id !== id)
    );

    if (applicationToDelete) {
      toast.success(
        `${applicationToDelete.company} application deleted successfully.`
      );
    }
  };

  const handleSubmitApplication = (applicationData: {
    company: string;
    position: string;
    appliedDate: string;
    status: Application['status'];
    notes: string;
  }) => {
    if (editingApplication) {
      setApplications((currentApplications) =>
        currentApplications.map((application) =>
          application.id === editingApplication.id
            ? {
                ...application,
                ...applicationData,
              }
            : application
        )
      );

      toast.success(
        `${applicationData.company} application updated successfully.`
      );
    } else {
      const newApplication: Application = {
        id: crypto.randomUUID(),
        ...applicationData,
      };

      setApplications((currentApplications) => [
        newApplication,
        ...currentApplications,
      ]);

      toast.success(
        `${applicationData.company} application added successfully.`
      );
    }

    handleCloseModal();
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
  };

  return (
    <>
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
              onClick={handleOpenAddModal}
              className="w-full rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
            >
              + Add Application
            </button>
          </div>

          <FilterBar
            searchTerm={searchTerm}
            statusFilter={statusFilter}
            sortBy={sortBy}
            onSearchChange={setSearchTerm}
            onStatusChange={setStatusFilter}
            onSortChange={setSortBy}
          />
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
          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              <ApplicationCard
                key={application.id}
                company={application.company}
                position={application.position}
                appliedDate={application.appliedDate}
                status={application.status}
                notes={application.notes ?? ''}
                onView={() => handleView(application)}
                onEdit={() => handleEdit(application)}
                onDelete={() => handleDelete(application.id)}
              />
            ))
          ) : (
            <div className="px-5 py-14 text-center sm:px-6">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600">
                {hasActiveFilters ? '⌕' : '▣'}
              </div>

              <h3 className="mt-5 text-base font-bold text-[#17233A]">
                {hasActiveFilters
                  ? 'No matching applications'
                  : 'No applications yet'}
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#64748B]">
                {hasActiveFilters
                  ? "We couldn't find any applications matching your current search or filter."
                  : 'Start tracking your job search by adding your first application.'}
              </p>

              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="rounded-xl border border-[#E5EAF2] bg-white px-4 py-2.5 text-sm font-semibold text-[#64748B] transition hover:bg-slate-50"
                  >
                    Clear Filters
                  </button>
                )}

                {!hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleOpenAddModal}
                    className="rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    + Add Application
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {viewingApplication && (
        <ApplicationDetailsModal
          application={viewingApplication}
          onClose={handleCloseDetails}
          onEdit={() => handleEdit(viewingApplication)}
          onStatusChange={(status) =>
            handleStatusChange(viewingApplication.id, status)
          }
        />
      )}

      {isModalOpen && (
        <ApplicationModal
          application={editingApplication ?? undefined}
          onClose={handleCloseModal}
          onSubmit={handleSubmitApplication}
        />
      )}
    </>
  );
}

export default RecentApplications;
