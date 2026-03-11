const classPerformance = [
  { name: "JSS 1", score: 76, color: "bg-cyan-400" },
  { name: "JSS 2", score: 82, color: "bg-violet-400" },
  { name: "JSS 3", score: 69, color: "bg-emerald-400" },
  { name: "SS 1", score: 88, color: "bg-amber-400" },
  { name: "SS 2", score: 79, color: "bg-pink-400" }
];

export function ClassCharts() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <article className="glass rounded-2xl p-5">
        <h3 className="mb-4 text-base font-semibold text-white">Class Performance Chart</h3>
        <div className="space-y-3">
          {classPerformance.map((item) => (
            <div key={item.name}>
              <div className="mb-1 flex items-center justify-between text-xs text-slate-200">
                <span>{item.name}</span>
                <span>{item.score}%</span>
              </div>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${item.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="glass rounded-2xl p-5">
        <h3 className="mb-4 text-base font-semibold text-white">Subject Distribution</h3>
        <div className="mx-auto grid w-56 place-items-center rounded-full border border-white/20 bg-white/5 p-5">
          <div className="h-40 w-40 rounded-full border-[18px] border-cyan-400 border-r-violet-400 border-b-emerald-400 border-l-amber-300" />
          <div className="mt-3 grid w-full grid-cols-2 gap-2 text-xs text-slate-200">
            <span>Math</span><span className="text-right">32%</span>
            <span>Science</span><span className="text-right">24%</span>
            <span>Arts</span><span className="text-right">18%</span>
            <span>Languages</span><span className="text-right">26%</span>
          </div>
        </div>
      </article>
    </div>
  );
}
