import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { NavigationProvider, useNavigation } from "./components/NavigationContext";
import { LandingPage } from "./components/LandingPage";

// Dashboard Components
import { StatsOverview } from "./components/StatsOverview";
import { ActiveProjects } from "./components/ActiveProjects";
import { MentorAnnouncements } from "./components/MentorAnnouncements";
import { StudentProposals } from "./components/StudentProposals";
import { ProgressTracker } from "./components/ProgressTracker";
import { NotificationsPanel } from "./components/NotificationsPanel";

// Page Components
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { MentorsPage } from "./components/pages/MentorsPage";
import { StudentsPage } from "./components/pages/StudentsPage";
import { ProposalsPage } from "./components/pages/ProposalsPage";
import { WorkspacePage } from "./components/pages/WorkspacePage";
import { ProgressPage } from "./components/pages/ProgressPage";
import { SettingsPage } from "./components/pages/SettingsPage";

function DashboardHome() {
  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">
          Welcome back, Admin
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your projects and community today.
        </p>
      </div>

      {/* Stats Overview */}
      <StatsOverview />

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-8">
          <ActiveProjects />
          <MentorAnnouncements />
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          <NotificationsPanel />
          <ProgressTracker />
        </div>
      </div>

      {/* Student Proposals - Full Width */}
      <div className="mt-8">
        <StudentProposals />
      </div>
    </>
  );
}

function MainContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <DashboardHome />;
      case 'projects':
        return <ProjectsPage />;
      case 'mentors':
        return <MentorsPage />;
      case 'students':
        return <StudentsPage />;
      case 'proposals':
        return <ProposalsPage />;
      case 'workspace':
        return <WorkspacePage />;
      case 'progress':
        return <ProgressPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <main className="flex-1 p-8">
      <div className="max-w-7xl mx-auto">
        {renderPage()}
      </div>
    </main>
  );
}

function AppContent() {
  const { showLanding } = useNavigation();

  if (showLanding) {
    return <LandingPage />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}