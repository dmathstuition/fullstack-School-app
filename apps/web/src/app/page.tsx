import Link from "next/link";

const roles = [
  "super-admin",
  "school-admin",
  "teacher",
  "student",
  "parent",
  "accountant",
  "librarian",
  "admission-officer"
];

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="rounded-2xl bg-gradient-to-r from-brand-600 to-indigo-600 p-10 text-white">
        <h1 className="text-4xl font-bold">Global School Management System</h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Production-grade, role-aware school ERP UI with secure access flows, analytics dashboards, and module-driven navigation.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/login" className="rounded-lg bg-white px-4 py-2 font-medium text-brand-600">
            Login
          </Link>
          <Link href="/register" className="rounded-lg border border-white/40 px-4 py-2">
            Register
          </Link>
        </div>
      </section>
      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Role Dashboards</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <Link key={role} href={`/${role}`} className="rounded-xl border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900">
              {role}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
