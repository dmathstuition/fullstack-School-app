import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Payments"
      subtitle="Track fees, receipts and payment status."
      actions={["Pay Now", "Download Receipt", "View Fee Plan"]}
      bullets={["Outstanding fees: 20", "Last payment: Confirmed", "Installment plan active"]}
    />
  );
}
