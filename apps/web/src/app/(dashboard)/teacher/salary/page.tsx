import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Salary"
      subtitle="Review payroll summaries, allowances and deductions."
      actions={["View Payslip", "Download Statement", "Contact Accounts"]}
      bullets={["Next payroll date: 28th", "Allowance claims: 2 pending", "Tax profile verified"]}
    />
  );
}
