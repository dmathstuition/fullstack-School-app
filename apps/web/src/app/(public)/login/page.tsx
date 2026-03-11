export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <form className="w-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <div className="mt-4 space-y-3">
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-800" placeholder="Email" />
          <input className="w-full rounded-lg border border-slate-300 px-3 py-2 dark:border-slate-700 dark:bg-slate-800" placeholder="Password" type="password" />
          <button className="w-full rounded-lg bg-brand-600 px-3 py-2 font-medium text-white">Login</button>
      <form className="glass w-full rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-white">Sign in</h1>
        <p className="mt-1 text-sm text-slate-300">Welcome back to GSMS.</p>
        <div className="mt-4 space-y-3">
          <input className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300" placeholder="Email" />
          <input className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-slate-300" placeholder="Password" type="password" />
          <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-2 font-semibold text-slate-950">Login</button>
          <button className="edu-btn edu-gradient-blue w-full">Login</button>
        </div>
      </form>
    </main>
  );
}
