import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import RecentApplications from './components/RecentApplications';
import useLocalStorage from './hooks/useLocalStorage';
import type { Application } from './types/application';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [applications, setApplications] = useLocalStorage<Application[]>(
    'jobtrack-applications',
    []
  );

  return (
    <div className="min-h-screen bg-[#F6F8FC] text-[#17233A]">
      <div className="flex min-h-screen">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="min-w-0 flex-1">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />

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

              <Dashboard applications={applications} />

              <RecentApplications
                applications={applications}
                setApplications={setApplications}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
