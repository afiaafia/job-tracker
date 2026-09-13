function FilterBar() {
  return (
    <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-[#E5EAF2] bg-[#F8FAFC] px-3 py-2.5">
        <span className="text-lg text-[#94A3B8]">⌕</span>

        <input
          type="text"
          placeholder="Search company or position..."
          className="w-full min-w-0 bg-transparent text-sm text-[#17233A] outline-none placeholder:text-[#94A3B8]"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          defaultValue="all"
          className="rounded-xl border border-[#E5EAF2] bg-white px-4 py-2.5 text-sm font-medium text-[#64748B] outline-none transition focus:border-blue-400"
        >
          <option value="all">All Statuses</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          defaultValue="latest"
          className="rounded-xl border border-[#E5EAF2] bg-white px-4 py-2.5 text-sm font-medium text-[#64748B] outline-none transition focus:border-blue-400"
        >
          <option value="latest">Sort by: Latest</option>
          <option value="oldest">Sort by: Oldest</option>
          <option value="company">Sort by: Company</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;
