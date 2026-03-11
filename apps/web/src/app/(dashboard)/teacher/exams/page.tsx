import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Exams"
      subtitle="Build exams, schedule sittings and manage invigilation."
      actions={["Create Exam", "Assign Invigilators", "Publish Instructions"]}
      bullets={["Midterm window opens next Monday", "6 papers pending upload", "Question moderation at 82%"]}
    />
  );
}
