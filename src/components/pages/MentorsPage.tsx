import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Mail, Phone, Users, BookOpen, Plus, Search } from "lucide-react";
import { Input } from "../ui/input";
import { 
  randomNames, 
  randomDepartments, 
  getRandomElement, 
  getRandomNumber 
} from "../utils/randomData";

const specializations = [
  "Machine Learning", "IoT Systems", "Blockchain", "Data Science", "Cybersecurity",
  "Mobile Development", "Web Technologies", "Cloud Computing", "AI Ethics", "Robotics",
  "Computer Vision", "Natural Language Processing", "DevOps", "Software Engineering"
];

const generateMentors = () => {
  return Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    name: getRandomElement(randomNames),
    department: getRandomElement(randomDepartments),
    specialization: getRandomElement(specializations),
    activeProjects: getRandomNumber(1, 5),
    totalStudents: getRandomNumber(8, 25),
    experience: `${getRandomNumber(5, 20)} years`,
    availability: getRandomElement(["Available", "Busy", "Limited"]),
    email: `${getRandomElement(randomNames).toLowerCase().replace(/[^a-z]/g, '')}@krmu.edu`,
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
  }));
};

const getAvailabilityColor = (availability: string) => {
  switch (availability) {
    case "Available":
      return "bg-green-100 text-green-800";
    case "Busy":
      return "bg-red-100 text-red-800";
    case "Limited":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function MentorsPage() {
  const mentors = generateMentors();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Mentors</h1>
          <p className="text-gray-600">Connect with experienced faculty and industry experts</p>
        </div>
        <Button className="bg-blue-800 hover:bg-blue-900">
          <Plus className="h-4 w-4 mr-2" />
          Add Mentor
        </Button>
      </div>

      {/* Search */}
      <div className="flex gap-4 items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search mentors by name or specialization..."
              className="pl-10"
            />
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <Card key={mentor.id} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="" alt={mentor.name} />
                  <AvatarFallback className="bg-blue-800 text-white">
                    {mentor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <p className="text-sm text-gray-600">{mentor.department}</p>
                </div>
                <Badge className={getAvailabilityColor(mentor.availability)}>
                  {mentor.availability}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm"><span className="font-medium">Specialization:</span> {mentor.specialization}</p>
                <p className="text-sm"><span className="font-medium">Experience:</span> {mentor.experience}</p>
                <p className="text-sm"><span className="font-medium">Rating:</span> ⭐ {mentor.rating}/5.0</p>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {mentor.activeProjects} active projects
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {mentor.totalStudents} students
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-4 w-4 mr-1" />
                  Contact
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}