import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { DataTable } from "@/components/ui/DataTable";
import { StatCard } from "@/components/ui/StatCard";

export function RoleDashboard({ role, title }: { role: any; title: string }) {
  return (
    <div className="min-h-screen md:flex">
      <Sidebar role={role} />
      <main className="flex-1 p-4 md:p-8">
        <Header title={title} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Active Students" value="1,284" />
          <StatCard label="Attendance Today" value="94.2%" />
          <StatCard label="Pending Fees" value="$24,300" />
          <StatCard label="Open Tickets" value="18" />
        </div>
        <section className="mt-6">
          <h2 className="mb-3 text-lg font-semibold">Recent Activities</h2>
          <DataTable
            headers={["Date", "Module", "Action", "Status"]}
            rows={[
              ["2026-03-10", "Admissions", "Application reviewed", "Done"],
              ["2026-03-10", "Attendance", "Class attendance posted", "Done"],
              ["2026-03-11", "Finance", "Fee reminder sent", "Queued"]
            ]}
          />
        </section>
      </main>
    </div>
  );
}
