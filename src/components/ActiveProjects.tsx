import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Users } from "lucide-react";
import { 
  randomProjectTitles, 
  randomNames, 
  randomStatuses, 
  getRandomElement, 
  getRandomNumber, 
  getRandomFutureDate 
} from "./utils/randomData";

// Generate fresh random projects each render for demo purposes
const generateProjects = () => {
  return [
    {
      id: 1,
      title: getRandomElement(randomProjectTitles),
      mentor: getRandomElement(randomNames),
      students: getRandomNumber(3, 7),
      status: "In Progress",
      deadline: getRandomFutureDate(45),
      progress: getRandomNumber(60, 85),
    },
    {
      id: 2,
      title: getRandomElement(randomProjectTitles),
      mentor: getRandomElement(randomNames),
      students: getRandomNumber(2, 5),
      status: "Planning",
      deadline: getRandomFutureDate(90),
      progress: getRandomNumber(15, 35),
    },
    {
      id: 3,
      title: getRandomElement(randomProjectTitles),
      mentor: getRandomElement(randomNames),
      students: getRandomNumber(4, 8),
      status: getRandomElement(["In Progress", "Review"]),
      deadline: getRandomFutureDate(30),
      progress: getRandomNumber(70, 95),
    },
  ];
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Planning":
      return "bg-yellow-100 text-yellow-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ActiveProjects() {
  const projects = generateProjects();
  
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Active Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-900">{project.title}</h4>
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </div>
            
            <p className="text-sm text-gray-600 mb-3">Mentor: {project.mentor}</p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                {project.students} students
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {project.deadline}
              </div>
            </div>
            
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-800 h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}