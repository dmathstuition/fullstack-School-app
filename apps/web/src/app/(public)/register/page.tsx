export default function RegisterPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <form className="glass w-full rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-white">Create account</h1>
        <p className="mt-1 text-sm text-slate-300">Start your school workspace.</p>
        <div className="mt-4 space-y-3">
          <input className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300" placeholder="School Name" />
          <input className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300" placeholder="Email" />
          <input className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300" placeholder="Password" type="password" />
          <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-2 font-semibold text-slate-950">Register</button>
        </div>
      </form>
    </main>
  );
}
