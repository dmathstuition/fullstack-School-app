import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • CBT"
      subtitle="Access computer-based tests and attempt history."
      actions={["Start Mock Test", "View Attempts", "Read CBT Rules"]}
      bullets={["Mock score average: 81%", "2 attempts left", "Proctor checks passed"]}
    />
  );
}
