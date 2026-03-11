export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass group rounded-2xl p-4 transition hover:-translate-y-1 hover:shadow-cyan-500/20">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-300">{label}</p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
        <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500" />
      </div>
    </div>
  );
}
