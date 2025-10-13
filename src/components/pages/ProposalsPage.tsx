import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { User, Calendar, DollarSign, FileText, Plus, Search, Filter, Eye } from "lucide-react";
import { Input } from "../ui/input";
import { 
  randomProjectTitles,
  randomStudentNames, 
  randomDepartments,
  randomProposalStatuses,
  getRandomElement, 
  getRandomDate,
  generateRandomBudget
} from "../utils/randomData";

const generateProposals = () => {
  return Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: getRandomElement(randomProjectTitles),
    student: getRandomElement(randomStudentNames),
    submittedDate: getRandomDate(30),
    budget: generateRandomBudget(),
    status: getRandomElement(randomProposalStatuses),
    department: getRandomElement(randomDepartments),
    description: "Innovative project proposal focusing on modern technology solutions and practical implementation strategies.",
    priority: getRandomElement(["High", "Medium", "Low"]),
    reviewScore: getRandomElement(["A", "B", "C", "D", "Pending"]),
  }));
};

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

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800";
    case "Medium":
      return "bg-yellow-100 text-yellow-800";
    case "Low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getScoreColor = (score: string) => {
  switch (score) {
    case "A":
      return "bg-green-100 text-green-800";
    case "B":
      return "bg-blue-100 text-blue-800";
    case "C":
      return "bg-yellow-100 text-yellow-800";
    case "D":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ProposalsPage() {
  const proposals = generateProposals();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Student Proposals</h1>
          <p className="text-gray-600">Review and manage project proposals from students</p>
        </div>
        <Button className="bg-blue-800 hover:bg-blue-900">
          <Plus className="h-4 w-4 mr-2" />
          New Review
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 items-center">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search proposals..."
              className="pl-10"
            />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter by Status
        </Button>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter by Department
        </Button>
      </div>

      {/* Proposals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {proposals.map((proposal) => (
          <Card key={proposal.id} className="shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-3">
                <CardTitle className="text-lg flex-1 pr-4 line-clamp-2">
                  {proposal.title}
                </CardTitle>
                <div className="flex flex-col gap-1">
                  <Badge className={getStatusColor(proposal.status)}>
                    {proposal.status}
                  </Badge>
                  {proposal.reviewScore !== "Pending" && (
                    <Badge className={getScoreColor(proposal.reviewScore)} variant="outline">
                      Score: {proposal.reviewScore}
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    {proposal.student}
                  </div>
                  <Badge className={getPriorityColor(proposal.priority)} variant="outline">
                    {proposal.priority}
                  </Badge>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Submitted: {proposal.submittedDate}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Budget: {proposal.budget}
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {proposal.department}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-700 line-clamp-2">
                {proposal.description}
              </p>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  Review
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <FileText className="h-4 w-4 mr-1" />
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}