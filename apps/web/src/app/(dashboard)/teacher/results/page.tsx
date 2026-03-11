import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Results"
      subtitle="Enter and publish subject results across streams."
      actions={["Enter Scores", "Moderate Grades", "Publish Results"]}
      bullets={["Result lock date: Friday", "2 subjects need moderation", "Grade distribution preview enabled"]}
    />
  );
}
