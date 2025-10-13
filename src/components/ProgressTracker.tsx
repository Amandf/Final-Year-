import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const progressData = [
  {
    category: "Active Projects",
    current: 12,
    target: 15,
    percentage: 80,
    trend: "up",
    change: "+2 from last month",
  },
  {
    category: "Student Engagement",
    current: 89,
    target: 100,
    percentage: 89,
    trend: "up",
    change: "+5% from last month",
  },
  {
    category: "Mentor Availability",
    current: 18,
    target: 20,
    percentage: 90,
    trend: "down",
    change: "-1 from last month",
  },
  {
    category: "Proposal Success Rate",
    current: 72,
    target: 80,
    percentage: 90,
    trend: "neutral",
    change: "No change",
  },
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-green-600" />;
    case "down":
      return <TrendingDown className="h-4 w-4 text-red-600" />;
    default:
      return <Minus className="h-4 w-4 text-gray-600" />;
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case "up":
      return "text-green-600";
    case "down":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export function ProgressTracker() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Progress Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {progressData.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-medium text-gray-900">{item.category}</h4>
              <div className="flex items-center space-x-2">
                {getTrendIcon(item.trend)}
                <span className={`text-sm ${getTrendColor(item.trend)}`}>
                  {item.current}/{item.target}
                </span>
              </div>
            </div>
            
            <Progress 
              value={item.percentage} 
              className="h-3 bg-gray-200"
            />
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">{item.percentage}% Complete</span>
              <span className={`${getTrendColor(item.trend)}`}>
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}