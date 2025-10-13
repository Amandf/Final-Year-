import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Bell, AlertCircle, CheckCircle, Info, Clock } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "success",
    title: "Project Milestone Completed",
    message: "Smart Campus IoT Integration reached 65% completion",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "warning",
    title: "Deadline Approaching",
    message: "Sustainable Energy Management project due in 3 days",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    type: "info",
    title: "New Mentor Available",
    message: "Dr. James Wilson joined as a mentor for AI projects",
    time: "2 hours ago",
    unread: false,
  },
  {
    id: 4,
    type: "alert",
    title: "Budget Review Required",
    message: "AR/VR Learning Platform needs budget approval",
    time: "4 hours ago",
    unread: true,
  },
  {
    id: 5,
    type: "info",
    title: "Weekly Report Ready",
    message: "Your weekly progress report is now available",
    time: "1 day ago",
    unread: false,
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    case "warning":
      return <Clock className="h-5 w-5 text-yellow-600" />;
    case "alert":
      return <AlertCircle className="h-5 w-5 text-red-600" />;
    default:
      return <Info className="h-5 w-5 text-blue-600" />;
  }
};

export function NotificationsPanel() {
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-gray-900 flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
          </CardTitle>
          {unreadCount > 0 && (
            <Badge className="bg-cyan-500 text-white">
              {unreadCount} new
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3 max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 rounded-lg border transition-colors ${
              notification.unread 
                ? "bg-blue-50 border-blue-200 hover:bg-blue-100" 
                : "bg-gray-50 border-gray-200 hover:bg-gray-100"
            }`}
          >
            <div className="flex items-start space-x-3">
              {getNotificationIcon(notification.type)}
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className={`font-medium ${
                    notification.unread ? "text-gray-900" : "text-gray-700"
                  }`}>
                    {notification.title}
                  </h4>
                  {notification.unread && (
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-2">
                  {notification.message}
                </p>
                
                <span className="text-xs text-gray-500">
                  {notification.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}