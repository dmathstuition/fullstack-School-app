import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Performance"
      subtitle="Track teaching KPIs and learner outcome metrics."
      actions={["View KPI Board", "Download Insights", "Set Improvement Goal"]}
      bullets={["Average class score: 78%", "Engagement trend up 6%", "Observation cycle active"]}
    />
  );
}
