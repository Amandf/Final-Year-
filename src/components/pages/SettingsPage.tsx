import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Separator } from "../ui/separator";
import { Download } from "lucide-react";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Database,
  Mail,
  Phone,
  Save,
  Upload
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account and system preferences</p>
        </div>
        <Button className="bg-blue-800 hover:bg-blue-900">
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Admin" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="User" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="admin@krmu.edu" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="Administration" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea 
                    className="w-full p-3 border border-gray-200 rounded-md resize-none"
                    rows={3}
                    placeholder="Tell us about yourself..."
                    defaultValue="Administrator of KRMU InnoServe platform, overseeing project coordination and student-mentor relationships."
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="" alt="Profile" />
                    <AvatarFallback className="bg-blue-800 text-white text-xl">AU</AvatarFallback>
                  </Avatar>
                </div>
                
                <Button variant="outline" className="w-full">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Photo
                </Button>
                
                <div className="text-sm text-gray-600 text-center">
                  Recommended: Square image, at least 200x200px
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive notifications via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Project Updates</h4>
                    <p className="text-sm text-gray-600">Get notified about project milestones and progress</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">New Student Proposals</h4>
                    <p className="text-sm text-gray-600">Alert when new proposals are submitted</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Mentor Announcements</h4>
                    <p className="text-sm text-gray-600">Notifications from mentor announcements</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">System Maintenance</h4>
                    <p className="text-sm text-gray-600">Important system updates and maintenance notices</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Weekly Reports</h4>
                    <p className="text-sm text-gray-600">Receive weekly progress summaries</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Communications</h4>
                    <p className="text-sm text-gray-600">Updates about new features and platform improvements</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Password & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
                
                <Button className="w-full">Update Password</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Enable 2FA</h4>
                    <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="font-medium">Active Sessions</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Current Session</p>
                          <p className="text-sm text-gray-600">Chrome on Windows • Active now</p>
                        </div>
                        <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Mobile Device</p>
                          <p className="text-sm text-gray-600">Safari on iPhone • 2 hours ago</p>
                        </div>
                        <Button variant="outline" size="sm">Revoke</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                Display & Language
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Dark Mode</h4>
                  <p className="text-sm text-gray-600">Switch to dark theme</p>
                </div>
                <Switch />
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>Language</Label>
                <select className="w-full p-2 border border-gray-200 rounded-md">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label>Timezone</Label>
                <select className="w-full p-2 border border-gray-200 rounded-md">
                  <option value="utc">UTC</option>
                  <option value="est">Eastern Time (EST)</option>
                  <option value="pst">Pacific Time (PST)</option>
                  <option value="cst">Central Time (CST)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label>Date Format</Label>
                <select className="w-full p-2 border border-gray-200 rounded-md">
                  <option value="mdy">MM/DD/YYYY</option>
                  <option value="dmy">DD/MM/YYYY</option>
                  <option value="ymd">YYYY-MM-DD</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export All Data
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Import Data
                </Button>
                
                <Separator />
                
                <div className="space-y-2">
                  <h4 className="font-medium text-red-600">Danger Zone</h4>
                  <Button variant="destructive" className="w-full">
                    Clear All Cache
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  System Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Version:</span>
                    <span>v2.4.1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Updated:</span>
                    <span>Dec 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Database Status:</span>
                    <span className="text-green-600">Healthy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Storage Used:</span>
                    <span>2.4 GB / 10 GB</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Check for Updates
                  </Button>
                  <Button variant="outline" className="w-full">
                    System Diagnostics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}