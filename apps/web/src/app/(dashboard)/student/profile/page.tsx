import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Profile"
      subtitle="Manage profile data, guardian info and preferences."
      actions={["Edit Profile", "Update Guardian", "Security Settings"]}
      bullets={["Profile completeness: 91%", "Guardian contacts verified", "Last synced today"]}
    />
  );
}
