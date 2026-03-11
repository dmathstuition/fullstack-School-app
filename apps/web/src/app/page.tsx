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
    <main className="mx-auto max-w-7xl px-6 py-12">
      <section className="glass rounded-3xl p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Enterprise School ERP</p>
        <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Global School Management System</h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          Colorful, responsive, role-driven dashboards inspired by modern SaaS UX with secure module-centric navigation.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/login" className="edu-btn edu-gradient-blue">
            Login
          </Link>
          <Link href="/register" className="edu-btn edu-gradient-purple">
            Register
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold text-white">Role Dashboards</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role) => (
            <Link key={role} href={`/${role}`} className="glass rounded-2xl p-4 text-sm text-slate-100 transition hover:-translate-y-1">
              {role}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
