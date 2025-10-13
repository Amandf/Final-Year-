import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Clock, Users, Plus, Filter, Search } from "lucide-react";
import { Input } from "../ui/input";
import { 
  randomProjectTitles, 
  randomNames, 
  randomStatuses, 
  getRandomElement, 
  getRandomNumber, 
  getRandomFutureDate 
} from "../utils/randomData";

// Generate random projects data
const generateProjects = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: getRandomElement(randomProjectTitles),
    mentor: getRandomElement(randomNames),
    students: getRandomNumber(2, 8),
    status: getRandomElement(randomStatuses),
    deadline: getRandomFutureDate(),
    progress: getRandomNumber(15, 95),
    budget: `$${getRandomNumber(3, 15)},${getRandomNumber(0, 9)}00`,
  }));
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Planning":
      return "bg-yellow-100 text-yellow-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    case "On Hold":
      return "bg-orange-100 text-orange-800";
    case "Review":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ProjectsPage() {
  const projects = generateProjects();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Projects</h1>
          <p className="text-gray-600">Manage and track all ongoing projects</p>
        </div>
        <Button className="bg-blue-800 hover:bg-blue-900">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4 items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search projects..."
              className="pl-10"
            />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">Mentor: {project.mentor}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {project.students} students
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Due {project.deadline}
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-gray-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-800 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-medium text-gray-900">Budget: {project.budget}</span>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}