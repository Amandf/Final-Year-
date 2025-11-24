import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MessageCircle, Clock } from "lucide-react";
import { 
  randomNames, 
  randomAnnouncements, 
  randomProjectTitles,
  getRandomElement, 
  getRandomTimeAgo 
} from "./utils/randomData";

const generateAnnouncements = () => {
  return Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    mentor: getRandomElement(randomNames),
    avatar: "",
    message: getRandomElement(randomAnnouncements),
    time: getRandomTimeAgo(),
    project: getRandomElement(randomProjectTitles),
  }));
};

export function MentorAnnouncements() {
  const announcements = generateAnnouncements();
  
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Mentor Announcements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={announcement.avatar} alt={announcement.mentor} />
                <AvatarFallback className="bg-blue-800 text-white text-sm">
                  {announcement.mentor.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-gray-900">{announcement.mentor}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {announcement.time}
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-2">{announcement.message}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-600 bg-cyan-50 px-2 py-1 rounded-full">
                    {announcement.project}
                  </span>
                  <MessageCircle className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}