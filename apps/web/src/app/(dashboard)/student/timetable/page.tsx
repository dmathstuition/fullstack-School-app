import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Timetable"
      subtitle="Follow your class schedule and room changes in real time."
      actions={["View Today", "Download PDF", "Set Reminders"]}
      bullets={["8 periods scheduled today", "Next class starts in 22 mins", "No room conflicts"]}
    />
  );
}
