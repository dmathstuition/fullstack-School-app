import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Results"
      subtitle="View report cards, grades and performance trends."
      actions={["View Report Card", "Compare Terms", "Download Transcript"]}
      bullets={["Current GPA trend: 3.6", "Top subject: Mathematics", "1 result awaiting publication"]}
    />
  );
}
