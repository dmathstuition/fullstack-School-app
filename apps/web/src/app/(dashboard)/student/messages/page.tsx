import { PlatformModulePage } from "@/components/features/PlatformModulePage";

export default function Page() {
  return (
    <PlatformModulePage
      role="student"
      title="Student • Messages"
      subtitle="Stay connected with teachers and school updates."
      actions={["Open Inbox", "Reply Teacher", "View Announcements"]}
      bullets={["7 unread messages", "2 new announcements", "Parent thread linked"]}
    />
  );
}
