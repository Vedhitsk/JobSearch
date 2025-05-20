import {
  MapPin,
  Search,
  Briefcase,
  Calendar,
  Settings,
  Bell,
  ChevronDown,
  Bookmark,
  BookmarkIcon as BookmarkFilled,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";
import PostJobPopup from "../components/PostJobPopup";
import JobCard from "../components/JobCard";
import JobDetailsPopup from "../components/JobDetailsPopup";


export default function Dashboard() {
  const jobListings = [
    {
      id: 1,
      postedDate: "20 May, 2023",
      company: "Amazon",
      title: "Senior UI/UX Designer",
      logoBackground: "bg-black",
      logoTextColor: "text-white",
      logoContent: "A",
      bookmarked: false,
      tags: ["Part time", "Senior level", "Distant", "Project work"],
      salary: "$250/hr",
      location: "San Francisco, CA",
      bgColor: "bg-orange-100",
    },
    {
      id: 2,
      postedDate: "18 May, 2023",
      company: "Google",
      title: "Product Designer",
      logoBackground: "bg-blue-500",
      logoTextColor: "text-white",
      logoContent: "G",
      bookmarked: true,
      tags: ["Full time", "Senior level", "Remote", "Long-term"],
      salary: "$180/hr",
      location: "Mountain View, CA",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      postedDate: "15 May, 2023",
      company: "Microsoft",
      title: "UX Researcher",
      logoBackground: "bg-gray-800",
      logoTextColor: "text-white",
      logoContent: "M",
      bookmarked: false,
      tags: ["Full time", "Mid level", "Hybrid", "Project work"],
      salary: "$160/hr",
      location: "Seattle, WA",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      postedDate: "12 May, 2023",
      company: "Apple",
      title: "Visual Designer",
      logoBackground: "bg-gray-200",
      logoTextColor: "text-black",
      logoContent: "A",
      bookmarked: false,
      tags: ["Contract", "Senior level", "On-site", "Short-term"],
      salary: "$200/hr",
      location: "Cupertino, CA",
      bgColor: "bg-blue-100",
    },
    {
      id: 5,
      postedDate: "10 May, 2023",
      company: "Netflix",
      title: "Motion Designer",
      logoBackground: "bg-red-600",
      logoTextColor: "text-white",
      logoContent: "N",
      bookmarked: true,
      tags: ["Full time", "Senior level", "Remote", "Long-term"],
      salary: "$220/hr",
      location: "Los Gatos, CA",
      bgColor: "bg-pink-100",
    },
    {
      id: 6,
      postedDate: "8 May, 2023",
      company: "Spotify",
      title: "Interaction Designer",
      logoBackground: "bg-green-600",
      logoTextColor: "text-white",
      logoContent: "S",
      bookmarked: false,
      tags: ["Part time", "Mid level", "Remote", "Project work"],
      salary: "$175/hr",
      location: "New York, NY",
      bgColor: "bg-gray-100",
    },
  ];

  // State to control popup visibility
  const [isPostJobPopupOpen, setIsPostJobPopupOpen] = useState(false);

  // Function to open popup
  const openPopup = () => setIsPostJobPopupOpen(true);

  // Function to close popup
  const closePopup = () => setIsPostJobPopupOpen(false);

  // New state for job details popup
  const [selectedJob, setSelectedJob] = useState(null);
  const [isJobDetailsOpen, setIsJobDetailsOpen] = useState(false);

  // Function to open job details popup
  const openJobDetails = (job) => {
    setSelectedJob(job);
    setIsJobDetailsOpen(true);
  };

  // Function to close job details popup
  const closeJobDetails = () => {
    setIsJobDetailsOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {isPostJobPopupOpen && (
        <PostJobPopup
          isPopupOpen={isPostJobPopupOpen}
          closePopup={closePopup}
        />
      )}

      {/* Job Details Popup */}
      {selectedJob && (
        <JobDetailsPopup
          job={selectedJob}
          isOpen={isJobDetailsOpen}
          onClose={closeJobDetails}
        />
      )}

      {/* Header */}
      <header className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
              <span className="font-bold text-lg">LuckyJob</span>
            </div>

            <nav className="hidden md:flex space-x-6">
              <p className="border-b-2 border-white py-2 px-4">Find job</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-2 text-sm"
                onClick={openPopup}
              >
                Post a Job
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>New York, NY</span>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <Settings className="w-5 h-5" />
            <Bell className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-black text-white py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 gap-2">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            <div className="relative flex items-center bg-black border border-gray-700 rounded-full px-4 py-2 w-full sm:w-auto">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <select className="bg-transparent text-white appearance-none pr-8 focus:outline-none">
                <option>Designer</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3" />
            </div>

            <div className="relative flex items-center bg-black border border-gray-700 rounded-full px-4 py-2 w-full sm:w-auto">
              <MapPin className="w-4 h-4 text-gray-400 mr-2" />
              <select className="bg-transparent text-white appearance-none pr-8 focus:outline-none">
                <option>Work location</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3" />
            </div>

            <div className="relative flex items-center bg-black border border-gray-700 rounded-full px-4 py-2 w-full sm:w-auto">
              <Briefcase className="w-4 h-4 text-gray-400 mr-2" />
              <select className="bg-transparent text-white appearance-none pr-8 focus:outline-none">
                <option>Experience</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3" />
            </div>

            <div className="relative flex items-center bg-black border border-gray-700 rounded-full px-4 py-2 w-full sm:w-auto">
              <Calendar className="w-4 h-4 text-gray-400 mr-2" />
              <select className="bg-transparent text-white appearance-none pr-8 focus:outline-none">
                <option>Per month</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3" />
            </div>
          </div>

          <div className="w-full lg:w-auto mt-4 lg:mt-0">
            <div className="flex flex-col">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Salary range</span>
                <span className="text-sm">$1,200 - $20,000</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/4">
          {/* <div className="bg-black text-white rounded-lg overflow-hidden mb-6">
              <div className="p-6 relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full border-t border-l border-white rounded-full transform translate-x-1/4 translate-y-1/4"></div>
                </div>
                <h2 className="text-2xl font-bold relative z-10">Get Your best profession with LuckyJob</h2>
                <button className="mt-6 bg-blue-400 text-white px-4 py-2 rounded-full text-sm">Learn more</button>
              </div>
            </div> */}

          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold">Filters</h3>
              <button className="text-gray-500">
                <ChevronDown className="w-4 h-4 transform rotate-90" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-500 mb-2 text-sm">Working schedule</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" checked />
                  <span>Full time</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" checked />
                  <span>Part time</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" />
                  <span>Internship</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" checked />
                  <span>Project work</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" />
                  <span>Volunteering</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-500 mb-2 text-sm">Employment type</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" checked />
                  <span>Full day</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" checked />
                  <span>Flexible schedule</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" />
                  <span>Shift work</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" checked />
                  <span>Distant work</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded-sm mr-2" />
                  <span>Shift method</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold mr-3">Recommended jobs</h2>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                {jobListings.length}
              </span>
            </div>
            <div className="flex items-center text-sm">
              <span className="mr-2">Sort by: Last updated</span>
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobListings.map((job) => (
              <div
                key={job.id}
                className={`${job.bgColor} rounded-lg p-4 relative`}
              >
                <div className="flex justify-between mb-4">
                  <span className="text-sm">{job.postedDate}</span>
                  {job.bookmarked ? (
                    <BookmarkFilled className="w-4 h-4 text-black" />
                  ) : (
                    <Bookmark className="w-4 h-4" />
                  )}
                </div>
                <div className="mb-2">
                  <div className="text-sm">{job.company}</div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                </div>
                <div className="absolute right-4 top-16">
                  <div
                    className={`w-10 h-10 ${job.logoBackground} rounded-full flex items-center justify-center ${job.logoTextColor}`}
                  >
                    {job.logoContent}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <div className="font-bold">{job.salary}</div>
                    <div className="text-xs">{job.location}</div>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm" onClick={() => openJobDetails(job)}>
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}