import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • My Classes"
      subtitle="Manage class rosters, sections and lesson pacing with quick controls."
      actions={["Open Classboard", "Upload Lesson Plan", "Export Class List"]}
      bullets={["28 classes assigned this term", "4 classes need attendance updates", "2 syllabus milestones due this week"]}
    />
  );
}
