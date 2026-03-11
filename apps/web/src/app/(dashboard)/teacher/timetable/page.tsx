import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Timetable"
      subtitle="Review and optimize your weekly teaching schedule."
      actions={["View Week", "Request Swap", "Print Timetable"]}
      bullets={["24 periods scheduled this week", "1 clash detected", "Room allocations synchronized"]}
    />
  );
}
