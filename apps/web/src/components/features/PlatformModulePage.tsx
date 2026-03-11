import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { DataTable } from "@/components/ui/DataTable";

interface PlatformModulePageProps {
  role: "teacher" | "student";
  title: string;
  subtitle: string;
  actions: string[];
  bullets: string[];
}

export function PlatformModulePage({ role, title, subtitle, actions, bullets }: PlatformModulePageProps) {
  return (
    <div className="min-h-screen md:flex md:gap-4 md:p-4">
      <Sidebar role={role} />
      <main className="flex-1 p-4 md:p-2">
        <Header title={title} />

        <section className="glass rounded-2xl p-5">
          <p className="text-sm text-slate-200">{subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {actions.map((action, index) => (
              <button
                key={action}
                className={`edu-btn text-sm ${
                  ["edu-gradient-blue", "edu-gradient-purple", "edu-gradient-green", "edu-gradient-orange"][index % 4]
                }`}
              >
                {action}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="glass rounded-2xl p-5">
            <h3 className="mb-3 text-base font-semibold text-white">Highlights</h3>
            <div className="space-y-2">
              {bullets.map((item) => (
                <div key={item} className="glass-soft rounded-xl px-3 py-2 text-sm text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="glass rounded-2xl p-5">
            <h3 className="mb-3 text-base font-semibold text-white">Recent Updates</h3>
            <DataTable
              headers={["Date", "Context", "Detail", "State"]}
              rows={[
                ["2026-03-10", title, "Task submitted", "Done"],
                ["2026-03-11", title, "Review ongoing", "In Progress"],
                ["2026-03-12", title, "Reminder queued", "Queued"]
              ]}
            />
          </article>
        </section>
      </main>
    </div>
  );
}
