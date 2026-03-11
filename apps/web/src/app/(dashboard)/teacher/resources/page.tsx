import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Resources"
      subtitle="Access curriculum files and multimedia learning content."
      actions={["Upload Resource", "Open Library", "Share to Class"]}
      bullets={["123 resources uploaded", "9 shared this week", "Storage usage: 62%"]}
    />
  );
}
