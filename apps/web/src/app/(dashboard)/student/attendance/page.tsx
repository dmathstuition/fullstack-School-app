import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Attendance"
      subtitle="Monitor attendance records and punctuality metrics."
      actions={["View Monthly", "Request Excuse", "Notify Parent"]}
      bullets={["Attendance this term: 93%", "Late count: 3", "0 unresolved absences"]}
    />
  );
}
