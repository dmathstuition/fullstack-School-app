export function Header({ title }: { title: string }) {
  return (
    <header className="glass mb-6 rounded-2xl p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/90">GSMS Workspace</p>
          <h1 className="mt-1 text-2xl font-semibold text-white md:text-3xl">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="edu-btn edu-gradient-purple text-sm">Notifications</button>
          <button className="edu-btn edu-gradient-blue text-sm">Toggle Theme</button>
        </div>
      </div>
    </header>
  );
}
