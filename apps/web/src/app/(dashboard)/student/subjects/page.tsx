import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Subjects"
      subtitle="Explore enrolled subjects and curriculum outlines."
      actions={["Open Syllabus", "Track Progress", "Join Study Group"]}
      bullets={["9 active subjects", "2 practical sessions this week", "Syllabus completion: 64%"]}
    />
  );
}
