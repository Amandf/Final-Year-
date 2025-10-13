import { 
  Home, 
  FolderOpen, 
  Users, 
  GraduationCap, 
  FileText, 
  Briefcase, 
  TrendingUp, 
  Settings 
} from "lucide-react";
import { cn } from "./utils/cn";
import { useNavigation } from "./NavigationContext";

const navigation = [
  { name: "Home", icon: Home, page: "home" as const },
  { name: "Projects", icon: FolderOpen, page: "projects" as const },
  { name: "Mentors", icon: Users, page: "mentors" as const },
  { name: "Students", icon: GraduationCap, page: "students" as const },
  { name: "Proposals", icon: FileText, page: "proposals" as const },
  { name: "Workspace", icon: Briefcase, page: "workspace" as const },
  { name: "Progress", icon: TrendingUp, page: "progress" as const },
  { name: "Settings", icon: Settings, page: "settings" as const },
];

export function Sidebar() {
  const { currentPage, setCurrentPage } = useNavigation();

  return (
    <div className="bg-white w-64 min-h-screen border-r border-gray-200">
      <nav className="mt-8 px-3">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setCurrentPage(item.page)}
                className={cn(
                  "w-full group flex items-center px-3 py-2 rounded-lg transition-colors",
                  currentPage === item.page
                    ? "bg-blue-800 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5",
                    currentPage === item.page ? "text-white" : "text-gray-400 group-hover:text-gray-500"
                  )}
                />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}