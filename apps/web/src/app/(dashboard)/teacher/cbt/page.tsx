import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • CBT"
      subtitle="Configure CBT tests with timer, anti-cheat and analytics."
      actions={["Create CBT", "Preview Timer", "View Proctor Logs"]}
      bullets={["CBT completion rate: 91%", "2 sessions flagged for review", "Auto-submit configured"]}
    />
  );
}
