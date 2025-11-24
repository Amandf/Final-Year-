import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  FileText, 
  Upload, 
  Download, 
  Share2, 
  Folder, 
  Calendar,
  Clock,
  Users,
  MessageCircle,
  Video,
  Plus
} from "lucide-react";
import { 
  randomProjectTitles,
  randomStudentNames,
  getRandomElement,
  getRandomNumber,
  getRandomTimeAgo
} from "../utils/randomData";

const fileTypes = [
  { name: "Research_Paper_v3.pdf", type: "PDF", size: "2.4 MB" },
  { name: "Project_Presentation.pptx", type: "PPT", size: "5.1 MB" },
  { name: "Code_Documentation.docx", type: "DOC", size: "850 KB" },
  { name: "Dataset_Analysis.xlsx", type: "XLS", size: "1.2 MB" },
  { name: "UI_Mockups.fig", type: "FIG", size: "3.7 MB" },
  { name: "Source_Code.zip", type: "ZIP", size: "12.5 MB" }
];

const generateRecentFiles = () => {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    ...getRandomElement(fileTypes),
    project: getRandomElement(randomProjectTitles),
    uploadedBy: getRandomElement(randomStudentNames),
    uploadedAt: getRandomTimeAgo(),
    shared: Math.random() > 0.5,
  }));
};

const generateMeetings = () => {
  return Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `${getRandomElement(["Project Review", "Weekly Standup", "Research Discussion", "Progress Meeting"])} - ${getRandomElement(randomProjectTitles)}`,
    time: `${getRandomNumber(9, 17)}:${getRandomNumber(0, 59).toString().padStart(2, '0')}`,
    date: `Dec ${getRandomNumber(15, 30)}, 2024`,
    attendees: getRandomNumber(3, 8),
    type: getRandomElement(["Video Call", "In-Person", "Hybrid"]),
    status: getRandomElement(["Scheduled", "In Progress", "Completed"]),
  }));
};

const getFileTypeColor = (type: string) => {
  const colors = {
    PDF: "bg-red-100 text-red-800",
    PPT: "bg-orange-100 text-orange-800",
    DOC: "bg-blue-100 text-blue-800",
    XLS: "bg-green-100 text-green-800",
    FIG: "bg-purple-100 text-purple-800",
    ZIP: "bg-gray-100 text-gray-800"
  };
  return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
};

const getMeetingStatusColor = (status: string) => {
  switch (status) {
    case "Scheduled":
      return "bg-blue-100 text-blue-800";
    case "In Progress":
      return "bg-green-100 text-green-800";
    case "Completed":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function WorkspacePage() {
  const recentFiles = generateRecentFiles();
  const meetings = generateMeetings();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Workspace</h1>
          <p className="text-gray-600">Collaborative space for projects, files, and team coordination</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload File
          </Button>
          <Button className="bg-blue-800 hover:bg-blue-900">
            <Plus className="h-4 w-4 mr-2" />
            New Meeting
          </Button>
        </div>
      </div>

      <Tabs defaultValue="files" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="files">Files & Documents</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="files" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Files */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Files</span>
                  <Button variant="outline" size="sm">
                    <Folder className="h-4 w-4 mr-2" />
                    Browse All
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white rounded-md border">
                          <FileText className="h-4 w-4 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{file.name}</p>
                          <p className="text-sm text-gray-500">
                            {file.project} • {file.size} • {file.uploadedAt}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Badge className={getFileTypeColor(file.type)}>
                          {file.type}
                        </Badge>
                        {file.shared && (
                          <Badge variant="outline" className="bg-cyan-50 text-cyan-700">
                            Shared
                          </Badge>
                        )}
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {meetings.map((meeting) => (
              <Card key={meeting.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base line-clamp-2">
                      {meeting.title}
                    </CardTitle>
                    <Badge className={getMeetingStatusColor(meeting.status)}>
                      {meeting.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {meeting.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {meeting.time}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {meeting.attendees} attendees
                      </div>
                      <Badge variant="outline">
                        {meeting.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Video className="h-4 w-4 mr-1" />
                      Join
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="collaboration" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Chat Rooms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-cyan-100 rounded-full">
                        <MessageCircle className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {getRandomElement(randomProjectTitles)}
                        </p>
                        <p className="text-sm text-gray-500">
                          {getRandomNumber(3, 12)} members • {getRandomNumber(1, 25)} new messages
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-cyan-100 text-cyan-800">
                      {getRandomNumber(1, 25)}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shared Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Research Library", "Code Repository", "Design Assets", "Documentation Hub", "Dataset Collection"].map((resource, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Folder className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">{resource}</p>
                        <p className="text-sm text-gray-500">
                          {getRandomNumber(15, 200)} items
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Access
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Learning Materials", "Research Papers", "Software Tools", "Hardware Resources", "External Links", "Templates"].map((category, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Access curated {category.toLowerCase()} for your projects and research.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {getRandomNumber(25, 150)} resources available
                    </span>
                    <Button variant="outline" size="sm">
                      Browse
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}