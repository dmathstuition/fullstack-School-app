import type { ReactNode } from "react";

export function DataTable({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <table className="min-w-full text-sm text-slate-100">
        <thead>
          <tr className="bg-white/10">
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 text-left text-xs uppercase tracking-[0.15em] text-slate-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/10 hover:bg-white/5">
              {row.map((cell, c) => (
                <td key={c} className="px-4 py-3 text-slate-100">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
