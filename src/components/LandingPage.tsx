import { ArrowRight, Users, BookOpen, Target, TrendingUp, CheckCircle, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useNavigation } from "./NavigationContext";

export function LandingPage() {
  const { setCurrentPage, setShowLanding } = useNavigation();

  const handleEnterDashboard = () => {
    setShowLanding(false);
    setCurrentPage('home');
  };

  const features = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry professionals and academic experts for guided learning"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Access structured programs designed to bridge academic knowledge with industry needs"
    },
    {
      icon: Target,
      title: "Real Projects",
      description: "Work on actual industry challenges and build your professional portfolio"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Track your progress and earn certifications recognized by industry partners"
    }
  ];

  const stats = [
    { number: "500+", label: "Active Students" },
    { number: "150+", label: "Industry Mentors" },
    { number: "250+", label: "Projects Completed" },
    { number: "50+", label: "Partner Companies" }
  ];

  const benefits = [
    "Bridge the gap between academic learning and industry requirements",
    "Access to cutting-edge industry projects and research opportunities",
    "Personalized mentorship from experienced professionals",
    "Earn recognized certifications and build your portfolio",
    "Network with peers, mentors, and industry leaders",
    "Flexible learning paths tailored to your goals"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-blue-800 text-white px-3 py-2 rounded-lg mr-3">
              <span>KRMU</span>
            </div>
            <h1 className="text-xl text-gray-900">InnoServe</h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <Button onClick={handleEnterDashboard} className="bg-blue-800 hover:bg-blue-900">
              Enter Dashboard
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-5xl mb-6">
              Bridging Academia & Industry Through Innovation
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              KRMU InnoServe connects students, academic mentors, and industry professionals
              for collaborative consultancy projects and skill development programs.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={handleEnterDashboard} 
                size="lg"
                className="bg-white text-blue-800 hover:bg-gray-100"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl text-blue-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">Why Choose KRMU InnoServe?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive platform designed to foster collaboration between academia and industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-800" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to start your journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-gray-900 mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up as a student, mentor, or industry partner and complete your profile
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-gray-900 mb-2">Explore & Connect</h3>
              <p className="text-gray-600">
                Browse projects, find mentors, or submit proposals for industry challenges
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-gray-900 mb-2">Collaborate & Grow</h3>
              <p className="text-gray-600">
                Work on real projects, build skills, and advance your career with certifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">
                Unlock Your Potential with Industry-Academia Collaboration
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                KRMU InnoServe provides the perfect ecosystem for students to gain real-world
                experience while helping industry partners solve critical challenges.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-cyan-500 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-blue-800 text-white p-6">
                <Building2 className="h-10 w-10 mb-4" />
                <h3 className="mb-2">For Industry</h3>
                <p className="text-blue-100 text-sm">
                  Access fresh talent and innovative solutions to your business challenges
                </p>
              </Card>
              <Card className="bg-cyan-500 text-white p-6 mt-8">
                <Users className="h-10 w-10 mb-4" />
                <h3 className="mb-2">For Students</h3>
                <p className="text-cyan-50 text-sm">
                  Gain practical experience and build industry connections
                </p>
              </Card>
              <Card className="bg-blue-600 text-white p-6">
                <BookOpen className="h-10 w-10 mb-4" />
                <h3 className="mb-2">For Mentors</h3>
                <p className="text-blue-100 text-sm">
                  Share expertise and shape the next generation of professionals
                </p>
              </Card>
              <Card className="bg-blue-900 text-white p-6 mt-8">
                <Target className="h-10 w-10 mb-4" />
                <h3 className="mb-2">For Academia</h3>
                <p className="text-blue-100 text-sm">
                  Bridge the gap between research and real-world application
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of students, mentors, and industry professionals collaborating on KRMU InnoServe
          </p>
          <Button 
            onClick={handleEnterDashboard}
            size="lg"
            className="bg-white text-blue-800 hover:bg-gray-100"
          >
            Access Dashboard <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-blue-800 text-white px-3 py-2 rounded-lg mr-3">
                  <span>KRMU</span>
                </div>
                <span className="text-white">InnoServe</span>
              </div>
              <p className="text-sm">
                Bridging academia and industry through collaborative innovation
              </p>
            </div>
            <div>
              <h4 className="text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">For Students</a></li>
                <li><a href="#" className="hover:text-white">For Mentors</a></li>
                <li><a href="#" className="hover:text-white">For Industry</a></li>
                <li><a href="#" className="hover:text-white">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2025 KRMU InnoServe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
