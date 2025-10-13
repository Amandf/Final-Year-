import { Search, Bell, User, Home } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { useNavigation } from "./NavigationContext";

export function Header() {
  const { setShowLanding } = useNavigation();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center cursor-pointer" onClick={() => setShowLanding(true)}>
            <div className="bg-blue-800 text-white px-3 py-2 rounded-lg mr-3">
              <span className="font-semibold">KRMU</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">InnoServe</h1>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setShowLanding(true)}
            className="text-gray-600 hover:text-gray-900"
          >
            <Home className="h-4 w-4 mr-2" />
            Landing Page
          </Button>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search projects, mentors, students..."
              className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Right side - Notifications and Profile */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-cyan-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </Button>
          
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback className="bg-blue-800 text-white">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}