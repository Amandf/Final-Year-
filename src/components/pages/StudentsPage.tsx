import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Mail, GraduationCap, BookOpen, Trophy, Plus, Search, Filter } from "lucide-react";
import { Input } from "../ui/input";
import { 
  randomStudentNames, 
  randomDepartments, 
  randomProjectTitles,
  getRandomElement, 
  getRandomNumber 
} from "../utils/randomData";

const academicLevels = ["Undergraduate", "Graduate", "PhD", "Postdoc"];
const performanceLevels = ["Excellent", "Good", "Average", "Needs Improvement"];

const generateStudents = () => {
  return Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: getRandomElement(randomStudentNames),
    studentId: `STU${(i + 1).toString().padStart(4, '0')}`,
    department: getRandomElement(randomDepartments),
    level: getRandomElement(academicLevels),
    currentProject: getRandomElement(randomProjectTitles),
    gpa: (2.5 + Math.random() * 1.5).toFixed(2),
    performance: getRandomElement(performanceLevels),
    completedProjects: getRandomNumber(0, 8),
    skills: getRandomNumber(3, 12),
    joinDate: `${getRandomNumber(2020, 2024)}-${getRandomNumber(1, 12).toString().padStart(2, '0')}`,
    email: `${getRandomElement(randomStudentNames).toLowerCase().replace(/[^a-z]/g, '')}@student.krmu.edu`,
  }));
};

const getPerformanceColor = (performance: string) => {
  switch (performance) {
    case "Excellent":
      return "bg-green-100 text-green-800";
    case "Good":
      return "bg-blue-100 text-blue-800";
    case "Average":
      return "bg-yellow-100 text-yellow-800";
    case "Needs Improvement":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "PhD":
      return "bg-purple-100 text-purple-800";
    case "Postdoc":
      return "bg-indigo-100 text-indigo-800";
    case "Graduate":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-cyan-100 text-cyan-800";
  }
};

export function StudentsPage() {
  const students = generateStudents();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Students</h1>
          <p className="text-gray-600">Manage student profiles and track their progress</p>
        </div>
        <Button className="bg-blue-800 hover:bg-blue-900">
          <Plus className="h-4 w-4 mr-2" />
          Add Student
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search students..."
              className="pl-10"
            />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {students.map((student) => (
          <Card key={student.id} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="" alt={student.name} />
                  <AvatarFallback className="bg-cyan-600 text-white text-sm">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base truncate">{student.name}</CardTitle>
                  <p className="text-xs text-gray-600">{student.studentId}</p>
                </div>
              </div>
              
              <div className="flex gap-1 flex-wrap">
                <Badge className={getLevelColor(student.level)} variant="secondary">
                  {student.level}
                </Badge>
                <Badge className={getPerformanceColor(student.performance)} variant="secondary">
                  {student.performance}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Department:</span> {student.department}</p>
                <p><span className="font-medium">GPA:</span> {student.gpa}/4.0</p>
                <p><span className="font-medium">Joined:</span> {student.joinDate}</p>
              </div>

              <div className="space-y-1 text-sm">
                <p className="font-medium text-gray-900 truncate" title={student.currentProject}>
                  Current Project: {student.currentProject}
                </p>
              </div>

              <div className="flex justify-between text-xs text-gray-600">
                <div className="flex items-center">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {student.completedProjects} completed
                </div>
                <div className="flex items-center">
                  <Trophy className="h-3 w-3 mr-1" />
                  {student.skills} skills
                </div>
              </div>

              <div className="flex gap-1 pt-2">
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  <Mail className="h-3 w-3 mr-1" />
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="flex-1 text-xs">
                  Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}