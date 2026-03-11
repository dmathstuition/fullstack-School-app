export interface NavItem {
  label: string;
  href: string;
}

export const roleNavigation: Record<string, NavItem[]> = {
  "super-admin": [
    { label: "Overview", href: "/super-admin" },
    { label: "Schools", href: "/super-admin" },
    { label: "Users", href: "/super-admin" },
    { label: "Billing", href: "/super-admin" },
    { label: "Security", href: "/super-admin" }
  ],
  "school-admin": [
    { label: "Overview", href: "/school-admin" },
    { label: "Admissions", href: "/school-admin" },
    { label: "Students", href: "/school-admin" },
    { label: "Teachers", href: "/school-admin" },
    { label: "Classes", href: "/school-admin" }
  ],
  teacher: [
    { label: "Overview", href: "/teacher" },
    { label: "My Classes", href: "/teacher/my-classes" },
    { label: "Attendance", href: "/teacher/attendance" },
    { label: "Assignments", href: "/teacher/assignments" },
    { label: "Results", href: "/teacher/results" },
    { label: "Timetable", href: "/teacher/timetable" },
    { label: "Exams", href: "/teacher/exams" },
    { label: "CBT", href: "/teacher/cbt" },
    { label: "Messages", href: "/teacher/messages" },
    { label: "Performance", href: "/teacher/performance" },
    { label: "Salary", href: "/teacher/salary" },
    { label: "Resources", href: "/teacher/resources" },
    { label: "Profile", href: "/teacher/profile" }
  ],
  student: [
    { label: "Overview", href: "/student" },
    { label: "Timetable", href: "/student/timetable" },
    { label: "Assignments", href: "/student/assignments" },
    { label: "Results", href: "/student/results" },
    { label: "Payments", href: "/student/payments" },
    { label: "Attendance", href: "/student/attendance" },
    { label: "Subjects", href: "/student/subjects" },
    { label: "Library", href: "/student/library" },
    { label: "Exams", href: "/student/exams" },
    { label: "CBT", href: "/student/cbt" },
    { label: "Messages", href: "/student/messages" },
    { label: "Profile", href: "/student/profile" }
  ],
  parent: [
    { label: "Overview", href: "/parent" },
    { label: "Children", href: "/parent" },
    { label: "Attendance", href: "/parent" },
    { label: "Fees", href: "/parent" },
    { label: "Messages", href: "/parent" }
  ],
  accountant: [
    { label: "Overview", href: "/accountant" },
    { label: "Invoices", href: "/accountant" },
    { label: "Payments", href: "/accountant" },
    { label: "Reports", href: "/accountant" }
  ],
  librarian: [
    { label: "Overview", href: "/librarian" },
    { label: "Books", href: "/librarian" },
    { label: "Borrow Records", href: "/librarian" },
    { label: "Fines", href: "/librarian" }
  ],
  "admission-officer": [
    { label: "Overview", href: "/admission-officer" },
    { label: "Leads", href: "/admission-officer" },
    { label: "Applications", href: "/admission-officer" },
    { label: "Interviews", href: "/admission-officer" }
  ]
export const roleNavigation = {
  "super-admin": ["Overview", "Schools", "Users", "Billing", "Security"],
  "school-admin": ["Overview", "Admissions", "Students", "Teachers", "Classes"],
  teacher: ["Overview", "My Classes", "Attendance", "Assignments", "Results"],
  student: ["Overview", "Timetable", "Assignments", "Results", "Payments"],
  parent: ["Overview", "Children", "Attendance", "Fees", "Messages"],
  accountant: ["Overview", "Invoices", "Payments", "Reports"],
  librarian: ["Overview", "Books", "Borrow Records", "Fines"],
  "admission-officer": ["Overview", "Leads", "Applications", "Interviews"]
};
