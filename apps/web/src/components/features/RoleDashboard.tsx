import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { DataTable } from "@/components/ui/DataTable";
import { StatCard } from "@/components/ui/StatCard";

export function RoleDashboard({ role, title }: { role: any; title: string }) {
  return (
    <div className="min-h-screen md:flex md:gap-4 md:p-4">
      <Sidebar role={role} />
      <main className="flex-1 p-4 md:p-2">
        <Header title={title} />

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Active Students" value="1,284" />
          <StatCard label="Attendance Today" value="94.2%" />
          <StatCard label="Pending Fees" value="$24,300" />
          <StatCard label="Open Tickets" value="18" />
        </section>

        <section className="mt-6 grid gap-4 xl:grid-cols-3">
          <article className="glass rounded-2xl p-5 xl:col-span-2">
            <h2 className="mb-3 text-lg font-semibold text-white">Recent Activities</h2>
            <DataTable
              headers={["Date", "Module", "Action", "Status"]}
              rows={[
                ["2026-03-10", "Admissions", "Application reviewed", "Done"],
                ["2026-03-10", "Attendance", "Class attendance posted", "Done"],
                ["2026-03-11", "Finance", "Fee reminder sent", "Queued"]
              ]}
            />
          </article>

          <article className="glass rounded-2xl p-5">
            <h3 className="mb-3 text-base font-semibold text-white">Quick Actions</h3>
            <div className="flex flex-col gap-2">
              {['Create Announcement', 'Take Attendance', 'Generate Report', 'Message Parents'].map((action) => (
                <button key={action} className="rounded-xl bg-white/10 px-3 py-2 text-left text-sm text-slate-100 hover:bg-white/20">
                  {action}
                </button>
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}
