export function Header({ title }: { title: string }) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold md:text-2xl">{title}</h1>
      <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">Toggle Theme</button>
    <header className="glass mb-6 rounded-2xl p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/90">GSMS Workspace</p>
          <h1 className="mt-1 text-2xl font-semibold text-white md:text-3xl">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20">
            Notifications
          </button>
          <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-2 text-sm font-semibold text-slate-950">
            Toggle Theme
          </button>
          <button className="edu-btn edu-gradient-purple text-sm">Notifications</button>
          <button className="edu-btn edu-gradient-blue text-sm">Toggle Theme</button>
        </div>
      </div>
    </header>
  );
}
