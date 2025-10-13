import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  Calendar,
  Target,
  Award,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";
import { 
  randomProjectTitles,
  randomStudentNames,
  getRandomElement,
  getRandomNumber
} from "../utils/randomData";

const generateProgressData = () => {
  return {
    overview: {
      totalProjects: getRandomNumber(10, 25),
      completedProjects: getRandomNumber(5, 15),
      activeStudents: getRandomNumber(180, 300),
      successRate: getRandomNumber(75, 95),
    },
    projectProgress: Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      title: getRandomElement(randomProjectTitles),
      progress: getRandomNumber(20, 95),
      milestone: `Milestone ${getRandomNumber(2, 5)}`,
      dueDate: `Dec ${getRandomNumber(15, 31)}, 2024`,
      status: getRandomElement(["On Track", "At Risk", "Delayed", "Ahead"]),
      team: getRandomNumber(3, 8),
    })),
    studentMetrics: Array.from({ length: 6 }, (_, i) => ({
      id: i + 1,
      name: getRandomElement(randomStudentNames),
      projectsCompleted: getRandomNumber(2, 8),
      currentProgress: getRandomNumber(60, 95),
      skillsGained: getRandomNumber(5, 15),
      performance: getRandomElement(["Excellent", "Good", "Satisfactory"]),
    })),
    monthlyStats: Array.from({ length: 6 }, (_, i) => ({
      month: ["July", "August", "September", "October", "November", "December"][i],
      projectsStarted: getRandomNumber(2, 8),
      projectsCompleted: getRandomNumber(1, 6),
      studentsEnrolled: getRandomNumber(15, 40),
      mentorHours: getRandomNumber(80, 150),
    })),
  };
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "On Track":
      return "bg-green-100 text-green-800";
    case "Ahead":
      return "bg-blue-100 text-blue-800";
    case "At Risk":
      return "bg-yellow-100 text-yellow-800";
    case "Delayed":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getPerformanceColor = (performance: string) => {
  switch (performance) {
    case "Excellent":
      return "bg-green-100 text-green-800";
    case "Good":
      return "bg-blue-100 text-blue-800";
    case "Satisfactory":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getTrendIcon = (current: number, previous: number) => {
  if (current > previous) return <TrendingUp className="h-4 w-4 text-green-600" />;
  if (current < previous) return <TrendingDown className="h-4 w-4 text-red-600" />;
  return <Minus className="h-4 w-4 text-gray-600" />;
};

export function ProgressPage() {
  const data = generateProgressData();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Progress Tracking</h1>
          <p className="text-gray-600">Monitor performance metrics and project advancement</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button className="bg-blue-800 hover:bg-blue-900">
            <PieChart className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Projects</p>
                <p className="text-2xl font-semibold">{data.overview.totalProjects}</p>
                <div className="flex items-center mt-1">
                  {getTrendIcon(data.overview.totalProjects, data.overview.totalProjects - 2)}
                  <span className="text-sm text-green-600 ml-1">+2 this month</span>
                </div>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-semibold">{data.overview.completedProjects}</p>
                <div className="flex items-center mt-1">
                  <Award className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 ml-1">+3 this month</span>
                </div>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Students</p>
                <p className="text-2xl font-semibold">{data.overview.activeStudents}</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-blue-600 ml-1">+12 this month</span>
                </div>
              </div>
              <Activity className="h-8 w-8 text-cyan-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-semibold">{data.overview.successRate}%</p>
                <div className="flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600 ml-1">+5% this month</span>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">Project Progress</TabsTrigger>
          <TabsTrigger value="students">Student Metrics</TabsTrigger>
          <TabsTrigger value="trends">Trends & Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data.projectProgress.map((project) => (
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-3" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Current Milestone</p>
                      <p className="font-medium">{project.milestone}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Due Date</p>
                      <p className="font-medium">{project.dueDate}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Activity className="h-4 w-4 mr-1" />
                      {project.team} team members
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.studentMetrics.map((student) => (
              <Card key={student.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{student.name}</CardTitle>
                    <Badge className={getPerformanceColor(student.performance)}>
                      {student.performance}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current Progress</span>
                      <span className="text-sm font-medium">{student.currentProgress}%</span>
                    </div>
                    <Progress value={student.currentProgress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Completed Projects</p>
                      <p className="text-xl font-semibold">{student.projectsCompleted}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Skills Gained</p>
                      <p className="text-xl font-semibold">{student.skillsGained}</p>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.monthlyStats.map((month, i) => (
                  <div key={i} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{month.month} 2024</h4>
                      <Calendar className="h-4 w-4 text-gray-500" />
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Projects Started</p>
                        <p className="font-semibold text-blue-600">{month.projectsStarted}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Projects Completed</p>
                        <p className="font-semibold text-green-600">{month.projectsCompleted}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Students Enrolled</p>
                        <p className="font-semibold text-cyan-600">{month.studentsEnrolled}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Mentor Hours</p>
                        <p className="font-semibold text-purple-600">{month.mentorHours}h</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}