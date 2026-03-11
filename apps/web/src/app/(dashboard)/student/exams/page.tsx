import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Exams"
      subtitle="View exam schedules, instructions and prep checklist."
      actions={["View Exam Plan", "Download Instructions", "Set Revision Plan"]}
      bullets={["3 exams upcoming", "First paper: Monday", "Seat allocations released"]}
    />
  );
}
