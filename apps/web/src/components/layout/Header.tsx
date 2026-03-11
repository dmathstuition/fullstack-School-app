export function Header({ title }: { title: string }) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold md:text-2xl">{title}</h1>
      <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">Toggle Theme</button>
    </header>
  );
}
