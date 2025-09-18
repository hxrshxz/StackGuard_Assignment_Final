// File: src/components/dashboard/RecentActivity.tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { IconCircleCheck, IconCircleDot, IconInfoCircle } from "@tabler/icons-react";

type ActivityItem = {
  id: number;
  type: "Login" | "Update" | "Alert";
  description: string;
  time: string;
  status: "success" | "info" | "warning";
};

const activityData: ActivityItem[] = [
  { id: 1, type: "Alert", description: "Hardcoded AWS Key found", time: "5 minutes ago", status: "warning" },
  { id: 2, type: "Alert", description: "Overprivileged GCP Account", time: "18 minutes ago", status: "warning" },
  { id: 3, type: "Alert", description: "CI/CD token nearing expiration", time: "45 minutes ago", status: "info" },
  { id: 4, type: "Alert", description: "Unused service account", time: "1 hour ago", status: "info" },
  { id: 5, type: "Alert", description: "Public S3 Bucket detected", time: "2 hours ago", status: "info" },
  { id: 6, type: "Alert", description: "Admin access key compromised", time: "3 hours ago", status: "warning" },
  { id: 7, type: "Alert", description: "Kubernetes secret exposed", time: "6 hours ago", status: "info" },
];

const getActivityIcon = (status: ActivityItem['status']) => {
  switch (status) {
    case "success": return <IconCircleCheck className="text-gray-400" size={18} />;
    case "info": return <IconCircleDot className="text-gray-500" size={18} />;
    case "warning": return <IconInfoCircle className="text-gray-300" size={18} />;
    default: return <IconInfoCircle className="text-gray-500" size={18} />;
  }
}

export function RecentActivity() {
  return (
    <Card className="bg-gradient-card border-gradient text-white shadow-elegant backdrop-blur-sm">
      <CardHeader className="border-b border-gray-800/50 pb-3">
        <CardTitle className="text-gradient text-lg font-medium">Recent Activity</CardTitle>
        <CardDescription className="text-gray-400 text-sm">Latest events and notifications.</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {activityData.map((activity) => (
            <li key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-button hover:bg-gradient-button-hover transition-all duration-200 shadow-card">
              <div className="flex-shrink-0 mt-1">
                {getActivityIcon(activity.status)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gradient text-sm leading-5">{activity.type}: {activity.description}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}