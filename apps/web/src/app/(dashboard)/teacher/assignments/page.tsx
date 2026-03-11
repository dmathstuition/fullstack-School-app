import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Assignments"
      subtitle="Create, review and grade assignments with feedback loops."
      actions={["Create Assignment", "Review Submissions", "Publish Grades"]}
      bullets={["42 submissions awaiting review", "8 assignments due this week", "Rubric templates available"]}
    />
  );
}
