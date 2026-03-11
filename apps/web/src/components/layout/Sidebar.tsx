import { roleNavigation } from "@/lib/navigation";

export function Sidebar({ role }: { role: keyof typeof roleNavigation }) {
  return (
    <aside className="hidden w-64 border-r border-slate-200 bg-white p-4 md:block dark:border-slate-800 dark:bg-slate-950">
      <h2 className="mb-6 text-lg font-bold text-brand-600">GSMS</h2>
      <nav className="space-y-2">
        {roleNavigation[role].map((item) => (
          <div key={item} className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800">
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
