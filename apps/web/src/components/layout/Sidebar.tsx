"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { roleNavigation } from "@/lib/navigation";

export function Sidebar({ role }: { role: keyof typeof roleNavigation }) {
  const pathname = usePathname();

  return (
    <aside className="glass hidden h-[calc(100vh-2rem)] w-72 overflow-y-auto rounded-r-3xl p-5 md:block">
      <h2 className="mb-2 text-xl font-black tracking-wide text-cyan-200">GSMS</h2>
      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-slate-300">{role.replace("-", " ")}</p>
      <nav className="flex flex-col gap-2">
        {roleNavigation[role].map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={`${item.label}-${item.href}`}
              href={item.href}
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                isActive ? "bg-gradient-to-r from-cyan-400/35 to-indigo-500/35 text-white" : "glass-soft text-slate-200 hover:bg-white/15"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-xs text-slate-300">›</span>
            </Link>
          );
        })}
import { roleNavigation } from "@/lib/navigation";

export function Sidebar({ role }: { role: keyof typeof roleNavigation }) {
  return (
    <aside className="glass hidden w-72 rounded-r-3xl p-5 md:block">
      <h2 className="mb-2 text-xl font-black tracking-wide text-cyan-200">GSMS</h2>
      <p className="mb-6 text-xs uppercase tracking-[0.2em] text-slate-300">{role.replace("-", " ")}</p>
      <nav className="flex flex-col gap-2">
        {roleNavigation[role].map((item, index) => (
          <div
            key={item}
            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
              index === 0 ? "bg-gradient-to-r from-cyan-400/35 to-indigo-500/35 text-white" : "glass-soft text-slate-200 hover:bg-white/15"
            }`}
          >
            <span>{item}</span>
            <span className="text-xs text-slate-300">›</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
