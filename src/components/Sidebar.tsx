function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-[#E5EAF2] bg-white lg:flex lg:flex-col">
      <div className="flex h-full flex-col p-5">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
            💼
          </div>

          <span className="text-lg font-bold text-[#17233A]">JobTrack</span>
        </div>

        <nav className="mt-8 space-y-2">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-600"
          >
            <span>⌂</span>
            Dashboard
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50"
          >
            <span>▣</span>
            Applications
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50"
          >
            <span>◔</span>
            Analytics
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-[#64748B] transition hover:bg-slate-50"
          >
            <span>⚙</span>
            Settings
          </button>
        </nav>

        <div className="mt-auto border-t border-[#E5EAF2] pt-4">
          <div className="flex items-center gap-3 rounded-xl px-2 py-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
              AM
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#17233A]">
                Afia Mubassira
              </p>
              <p className="truncate text-xs text-[#64748B]">
                Frontend Developer
              </p>
            </div>

            <span className="text-[#64748B]">⌄</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
