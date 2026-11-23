
export const adminInfo = {
  id: 1,
  name: "Admin",
  role: "Administrator",
  email: "admin@fixtech.com",
};

export const dashboardNavigation = [
  { id: 1, label: "Dashboard", icon: "LayoutDashboard", path: "/admin" },
  { id: 2, label: "Customers", icon: "Users", path: "/admin/customers" },
  { id: 3, label: "Devices", icon: "Smartphone", path: "/admin/devices" },
  { id: 4, label: "Repairs", icon: "Wrench", path: "/admin/repairs" },
  { id: 5, label: "Technicians", icon: "UserRound", path: "/admin/technicians" },
  { id: 6, label: "Inventory", icon: "ShoppingCart", path: "/admin/inventory" },
  { id: 7, label: "Payments", icon: "CreditCard", path: "/admin/payments" },
  { id: 8, label: "Invoices", icon: "ReceiptText", path: "/admin/invoices" },
  { id: 9, label: "Reports", icon: "ChartNoAxesColumn", path: "/admin/reports" },
  { id: 10, label: "Notifications", icon: "Bell", path: "/admin/notifications" },
  { id: 11, label: "Audit Logs", icon: "ClipboardList", path: "/admin/audit-logs" },
  { id: 12, label: "Settings", icon: "Settings", path: "/admin/settings" },
];

export const repairStatuses = [
  { name: "Received", value: 8, color: "#2f8cff" },
  { name: "Pending Inspection", value: 7, color: "#ffc34d" },
  { name: "In Progress", value: 14, color: "#24b47e" },
  { name: "Waiting for Parts", value: 5, color: "#8057f5" },
  { name: "Ready for Pickup", value: 8, color: "#12b8c8" },
  { name: "Completed", value: 14, color: "#159b68" },
  { name: "Cancelled", value: 2, color: "#ff4560" },
];

// Example records for the recent repairs table.
// The status chart represents the full shop's mock summary.
export const recentRepairs = [
  {
    id: "REP-2026-000125",
    device: "Laptop",
    customer: "Ahmad Hassan",
    status: "In Progress",
    technician: "Ahmed",
    updated: "Apr 22, 10:45 AM",
  },
  {
    id: "REP-2026-000124",
    device: "iPhone 14",
    customer: "Sara Khalil",
    status: "Waiting for Parts",
    technician: "Omar",
    updated: "Apr 22, 09:30 AM",
  },
  {
    id: "REP-2026-000123",
    device: "Desktop",
    customer: "Ali Mansour",
    status: "Ready for Pickup",
    technician: "Ali",
    updated: "Apr 22, 09:15 AM",
  },
  {
    id: "REP-2026-000122",
    device: "Samsung S23",
    customer: "Maya Ahmad",
    status: "Pending Inspection",
    technician: "Unassigned",
    updated: "Apr 22, 08:50 AM",
  },
  {
    id: "REP-2026-000121",
    device: "iPad",
    customer: "Nour Hassan",
    status: "Completed",
    technician: "Rami",
    updated: "Apr 22, 08:20 AM",
  },
];

export const inventoryParts = [
  { id: 1, name: "iPhone Battery", stock: 2, minimum: 5 },
  { id: 2, name: "Laptop Screen", stock: 1, minimum: 3 },
  { id: 3, name: "Charging Port", stock: 3, minimum: 5 },
  { id: 4, name: "RAM 8GB", stock: 4, minimum: 10 },
  { id: 5, name: "Power Adapter", stock: 2, minimum: 5 },
];

export const technicians = [
  { id: 1, name: "Ahmed", repairs: 8, color: "#12b8b2" },
  { id: 2, name: "Omar", repairs: 6, color: "#2f8cff" },
  { id: 3, name: "Ali", repairs: 5, color: "#f59e0b" },
  { id: 4, name: "Rami", repairs: 4, color: "#a855f7" },
];

export const monthlyRepairVolume = [
  { month: "Jan", repairs: 9 },
  { month: "Feb", repairs: 12 },
  { month: "Mar", repairs: 18 },
  { month: "Apr", repairs: 22 },
];

export const weeklyRevenue = [
  { week: "Week 1", revenue: 3000 },
  { week: "Week 2", revenue: 4300 },
  { week: "Week 3", revenue: 5500 },
  { week: "Week 4", revenue: 7300 },
];

export const dashboardTrends = {
  total: { value: 12, direction: "up" },
  pending: { value: 30, direction: "down" },
  progress: { value: 22, direction: "down" },
  parts: { value: 17, direction: "down" },
  pickup: { value: 33, direction: "up" },
  delivered: { value: 27, direction: "up" },
};

export const businessMetrics = [
  {
    id: 1,
    title: "Total Revenue (This Month)",
    value: 6420,
    format: "currency",
    icon: "BriefcaseBusiness",
    change: 18,
    direction: "up",
  },
  {
    id: 2,
    title: "Average Repair Duration",
    value: 2.8,
    suffix: " days",
    icon: "Clock3",
    change: 25,
    direction: "down",
  },
  {
    id: 3,
    title: "Total Customers",
    value: 124,
    icon: "Users",
    change: 14,
    direction: "up",
  },
  {
    id: 4,
    title: "Pending Payments",
    value: 980,
    format: "currency",
    icon: "CreditCard",
    change: 5,
    direction: "up",
  },
];

export const dashboardNotifications = [
  { id: 1, message: "New repair request received", read: false },
  { id: 2, message: "iPhone Battery stock is low", read: false },
  { id: 3, message: "Repair ready for pickup", read: false },
];
