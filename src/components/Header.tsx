interface HeaderProps {
  onMenuClick: () => void;
}

function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="border-b border-[#E5EAF2] bg-white">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E5EAF2] text-lg text-[#64748B] transition hover:bg-slate-50 lg:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#17233A] sm:text-base">
              Job Application Tracker
            </p>

            <p className="hidden text-xs text-[#64748B] sm:block">
              Keep your applications organized.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <div className="hidden w-64 items-center gap-2 rounded-xl border border-[#E5EAF2] bg-[#F8FAFC] px-3 py-2 sm:flex">
            <span className="text-[#64748B]">⌕</span>

            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent text-sm text-[#17233A] outline-none placeholder:text-[#94A3B8]"
            />
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5EAF2] text-[#64748B] transition hover:bg-slate-50 sm:hidden"
            aria-label="Search"
          >
            ⌕
          </button>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5EAF2] text-[#64748B] transition hover:bg-slate-50"
            aria-label="Notifications"
          >
            🔔
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
            AM
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
