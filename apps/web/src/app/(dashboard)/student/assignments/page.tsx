import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Assignments"
      subtitle="Track homework, upload submissions and monitor feedback."
      actions={["Open Assignment", "Upload Work", "View Feedback"]}
      bullets={["5 pending assignments", "2 due within 24 hours", "Teacher comments available"]}
    />
  );
}
