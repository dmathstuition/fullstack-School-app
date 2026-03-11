import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Library"
      subtitle="Borrow books, renew items and monitor fines."
      actions={["Search Books", "Renew Loan", "View Fines"]}
      bullets={["4 active borrow records", "1 due this week", "Fine balance: /bin/bash"]}
    />
  );
}
