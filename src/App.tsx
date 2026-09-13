import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-[#F6F8FC] text-[#17233A]">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="min-w-0 flex-1">
          <Header />

          <div className="px-4 py-6 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-350">
              <section className="mb-8">
                <p className="text-sm font-medium text-[#64748B]">
                  Welcome back, Afia
                </p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight text-[#17233A] sm:text-3xl">
                  Job Application Tracker
                </h1>

                <p className="mt-2 max-w-2xl text-sm text-[#64748B] sm:text-base">
                  Keep every application organized and every opportunity in
                  view.
                </p>
              </section>

              <Dashboard />

              <section className="mt-8 rounded-2xl border border-[#E5EAF2] bg-white p-6 shadow-sm">
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

                <div className="mt-6 flex h-48 items-center justify-center rounded-xl border border-dashed border-[#E5EAF2] bg-[#F8FAFC]">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#17233A]">
                      Application list coming next
                    </p>

                    <p className="mt-1 text-xs text-[#64748B]">
                      Search, filter, sort and application cards will be added
                      here.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
