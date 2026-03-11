import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="teacher"
      title="Teacher • Messages"
      subtitle="Communicate with parents, students and admins securely."
      actions={["New Message", "Broadcast Notice", "Open Inbox"]}
      bullets={["15 unread conversations", "Parent reply SLA: 12h", "Noticeboard synced"]}
    />
  );
}
