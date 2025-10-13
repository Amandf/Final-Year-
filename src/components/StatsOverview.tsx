import { Card, CardContent } from "./ui/card";
import { FolderOpen, Users, GraduationCap, TrendingUp } from "lucide-react";
import { getRandomNumber } from "./utils/randomData";

const generateStats = () => [
  {
    title: "Active Projects",
    value: getRandomNumber(10, 20).toString(),
    change: `+${getRandomNumber(1, 4)}`,
    changeType: "increase",
    icon: FolderOpen,
    color: "blue",
  },
  {
    title: "Total Mentors",
    value: getRandomNumber(15, 25).toString(),
    change: `+${getRandomNumber(0, 3)}`,
    changeType: "increase",
    icon: Users,
    color: "green",
  },
  {
    title: "Enrolled Students",
    value: getRandomNumber(200, 300).toString(),
    change: `+${getRandomNumber(5, 25)}`,
    changeType: "increase",
    icon: GraduationCap,
    color: "purple",
  },
  {
    title: "Success Rate",
    value: `${getRandomNumber(85, 95)}%`,
    change: `+${getRandomNumber(2, 8)}%`,
    changeType: "increase",
    icon: TrendingUp,
    color: "cyan",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "bg-blue-100",
        text: "text-blue-600",
        icon: "text-blue-600",
      };
    case "green":
      return {
        bg: "bg-green-100",
        text: "text-green-600",
        icon: "text-green-600",
      };
    case "purple":
      return {
        bg: "bg-purple-100",
        text: "text-purple-600",
        icon: "text-purple-600",
      };
    case "cyan":
      return {
        bg: "bg-cyan-100",
        text: "text-cyan-600",
        icon: "text-cyan-600",
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-600",
        icon: "text-gray-600",
      };
  }
};

export function StatsOverview() {
  const stats = generateStats();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => {
        const colors = getColorClasses(stat.color);
        return (
          <Card key={index} className="shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-sm text-green-600 font-medium">
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">vs last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg ${colors.bg}`}>
                  <stat.icon className={`h-6 w-6 ${colors.icon}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}