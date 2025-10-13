import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { User, Calendar, DollarSign } from "lucide-react";

const proposals = [
  {
    id: 1,
    title: "Blockchain-based Student Credential System",
    student: "Alex Thompson",
    submittedDate: "2024-09-18",
    budget: "$5,000",
    status: "Under Review",
    department: "Computer Science",
  },
  {
    id: 2,
    title: "AR/VR Learning Platform for Chemistry",
    student: "Maria Garcia",
    submittedDate: "2024-09-17",
    budget: "$7,500",
    status: "Approved",
    department: "Chemistry",
  },
  {
    id: 3,
    title: "Smart Parking Management System",
    student: "David Kim",
    submittedDate: "2024-09-16",
    budget: "$3,200",
    status: "Needs Revision",
    department: "Engineering",
  },
  {
    id: 4,
    title: "AI-Powered Mental Health Chatbot",
    student: "Sophie Wilson",
    submittedDate: "2024-09-15",
    budget: "$4,800",
    status: "Under Review",
    department: "Psychology",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
      return "bg-green-100 text-green-800";
    case "Under Review":
      return "bg-yellow-100 text-yellow-800";
    case "Needs Revision":
      return "bg-red-100 text-red-800";
    case "Rejected":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-blue-100 text-blue-800";
  }
};

export function StudentProposals() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Student Proposals</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {proposals.map((proposal) => (
          <div
            key={proposal.id}
            className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-medium text-gray-900 flex-1 pr-4">{proposal.title}</h4>
              <Badge className={getStatusColor(proposal.status)}>
                {proposal.status}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {proposal.student}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(proposal.submittedDate).toLocaleDateString()}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-600">
                <DollarSign className="h-4 w-4 mr-1" />
                Budget: {proposal.budget}
              </div>
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {proposal.department}
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}