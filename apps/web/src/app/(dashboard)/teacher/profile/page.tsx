import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Profile"
      subtitle="Manage personal profile, preferences and availability."
      actions={["Edit Profile", "Set Office Hours", "Update Password"]}
      bullets={["Profile completeness: 88%", "Emergency contact on file", "Last updated 2 days ago"]}
    />
  );
}
