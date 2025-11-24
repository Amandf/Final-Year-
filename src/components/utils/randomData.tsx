// Utility functions for generating randomized dummy data

export const randomNames = [
  "Dr. Anjali Mehra",
  "Prof. Rohit Khanna",
  "Dr. Priyanka Bansal",
  "Dr. Rajeev Malik",
  "Prof. Kavita Sharma",
  "Dr. Vikas Bhatia",
  "Dr. Neha Tandon",
  "Prof. Sandeep Chauhan",
  "Dr. Ritu Verma",
  "Prof. Manoj Goyal",
  "Dr. Shalini Kapoor",
  "Dr. Amit Arora",
  "Prof. Nisha Gupta",
  "Dr. Harish Yadav",
  "Prof. Meenakshi Singh",
  "Dr. Deepak Ahuja"
];

export const randomStudentNames = [
  "Mohini",
  "Tannu",
  "Ritesh Kumar Jha",
  "Nibha Kumari",
  "Satwik Mishra",
  "Hitesh Singh",
  "Jaskaran Dhillon",
  "Khushal",
  "Geeta Bhatt",
  "Abhinay Kumar",
  "Brajesh Kumar",
  "Rishav Kumar",
  "Ayaan Ur Rehman",
  "Sandeep Rajmania",
  "Tanishq",
  "Ajay Kumar",
  "Ankur Dhanda",
  "Tanishq",          // duplicate kept as provided
  "Rohan Verma",
  "Priya Singh",
  "Aditya Sharma"
];

export const randomProjectTitles = [
  "Smart Campus IoT Integration", "AI-Driven Learning Analytics", "Sustainable Energy Management",
  "Blockchain-based Student Credential System", "AR/VR Learning Platform for Chemistry",
  "Smart Parking Management System", "AI-Powered Mental Health Chatbot", "Digital Twin Campus Model",
  "Automated Attendance Tracking System", "Smart Library Resource Management", 
  "Campus Safety Alert Network", "Green Building Optimization Platform", "Student Performance Prediction Model",
  "Virtual Lab Simulation Platform", "Crowd Management Analytics System", "Food Waste Reduction System",
  "Campus Navigation Mobile App", "Energy Consumption Monitoring Dashboard", "Academic Collaboration Platform",
  "Smart Dormitory Management System"
];

export const randomDepartments = [
  "Computer Science", "Engineering", "Chemistry", "Physics", "Mathematics", 
  "Biology", "Psychology", "Business", "Economics", "Literature", "Art", "Music"
];

export const randomStatuses = ["In Progress", "Planning", "Completed", "On Hold", "Review"];
export const randomProposalStatuses = ["Under Review", "Approved", "Needs Revision", "Rejected"];

export const randomAnnouncements = [
  "New project guidelines have been updated. Please review the documentation before our next meeting.",
  "Workshop on Machine Learning fundamentals scheduled for next Friday at 2 PM.",
  "Great progress on the energy optimization module! Keep up the excellent work team.",
  "review meeting scheduled for next week. Please prepare your expense reports.",
  "New research collaboration opportunities available with industry partners.",
  "Technical presentation skills workshop available for all students next month.",
  "Laboratory equipment maintenance scheduled for this weekend.",
  "Guest lecture by industry expert on emerging technologies this Thursday."
];

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomElements<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomDate(daysAgo: number = 30): string {
  const date = new Date();
  date.setDate(date.getDate() - getRandomNumber(0, daysAgo));
  return date.toLocaleDateString();
}

export function getRandomFutureDate(daysAhead: number = 90): string {
  const date = new Date();
  date.setDate(date.getDate() + getRandomNumber(1, daysAhead));
  return date.toLocaleDateString();
}

export function getRandomTimeAgo(): string {
  const timeUnits = [
    { unit: "minutes", max: 60 },
    { unit: "hours", max: 24 },
    { unit: "days", max: 7 }
  ];
  
  const selected = getRandomElement(timeUnits);
  const value = getRandomNumber(1, selected.max);
  
  if (value === 1) {
    return `${value} ${selected.unit.slice(0, -1)} ago`;
  }
  return `${value} ${selected.unit} ago`;
}


