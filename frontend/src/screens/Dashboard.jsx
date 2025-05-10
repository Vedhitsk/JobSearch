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
  } from "lucide-react"
  
  export default function JobDashboard() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-black text-white p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
                <span className="font-bold text-lg">LuckyJob</span>
              </div>
  
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="border-b-2 border-white pb-4 px-2">
                  Find job
                </a>
                <a href="#" className="pb-4 px-2">
                  Messages
                </a>
                <a href="#" className="pb-4 px-2">
                  Hiring
                </a>
                <a href="#" className="pb-4 px-2">
                  Community
                </a>
                <a href="#" className="pb-4 px-2">
                  FAQ
                </a>
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
            <div className="bg-black text-white rounded-lg overflow-hidden mb-6">
              <div className="p-6 relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full border-t border-l border-white rounded-full transform translate-x-1/4 translate-y-1/4"></div>
                </div>
                <h2 className="text-2xl font-bold relative z-10">Get Your best profession with LuckyJob</h2>
                <button className="mt-6 bg-blue-400 text-white px-4 py-2 rounded-full text-sm">Learn more</button>
              </div>
            </div>
  
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
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">386</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="mr-2">Sort by: Last updated</span>
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Job Card 1 */}
              <div className="bg-orange-100 rounded-lg p-4 relative">
                <div className="flex justify-between mb-4">
                  <span className="text-sm">20 May, 2023</span>
                  <Bookmark className="w-4 h-4" />
                </div>
                <div className="mb-2">
                  <div className="text-sm">Amazon</div>
                  <h3 className="text-xl font-bold">Senior UI/UX Designer</h3>
                </div>
                <div className="absolute right-4 top-16">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">A</div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Part time</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Senior level</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Distant</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Project work</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <div className="font-bold">$250/hr</div>
                    <div className="text-xs">San Francisco, CA</div>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Details</button>
                </div>
              </div>
  
              {/* Job Card 2 */}
              <div className="bg-green-100 rounded-lg p-4 relative">
                <div className="flex justify-between mb-4">
                  <span className="text-sm">4 Feb, 2023</span>
                  <BookmarkFilled className="w-4 h-4 text-black" />
                </div>
                <div className="mb-2">
                  <div className="text-sm">Google</div>
                  <h3 className="text-xl font-bold">Junior UI/UX Designer</h3>
                </div>
                <div className="absolute right-4 top-16">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-500">G</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Full time</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Junior level</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Distant</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Project work</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Flexible Schedule</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <div className="font-bold">$150/hr</div>
                    <div className="text-xs">California, CA</div>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Details</button>
                </div>
              </div>
  
              {/* Job Card 3 */}
              <div className="bg-purple-100 rounded-lg p-4 relative">
                <div className="flex justify-between mb-4">
                  <span className="text-sm">29 Jan, 2023</span>
                  <Bookmark className="w-4 h-4" />
                </div>
                <div className="mb-2">
                  <div className="text-sm">Dribbble</div>
                  <h3 className="text-xl font-bold">Senior Motion Designer</h3>
                </div>
                <div className="absolute right-4 top-16">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">D</div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Part time</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Senior level</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Full Day</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Shift work</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <div className="font-bold">$260/hr</div>
                    <div className="text-xs">New York, NY</div>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Details</button>
                </div>
              </div>
  
              {/* Job Card 4 */}
              <div className="bg-blue-100 rounded-lg p-4 relative">
                <div className="flex justify-between mb-4">
                  <span className="text-sm">11 Apr, 2023</span>
                  <Bookmark className="w-4 h-4" />
                </div>
                <div className="mb-2">
                  <div className="text-sm">Twitter</div>
                  <h3 className="text-xl font-bold">UX Designer</h3>
                </div>
                <div className="absolute right-4 top-16">
                  <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Full time</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Middle level</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Distant</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Project work</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <div className="font-bold">$120/hr</div>
                    <div className="text-xs">California, CA</div>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Details</button>
                </div>
              </div>
  
              {/* Job Card 5 */}
              <div className="bg-pink-100 rounded-lg p-4 relative">
                <div className="flex justify-between mb-4">
                  <span className="text-sm">2 Apr, 2023</span>
                  <Bookmark className="w-4 h-4" />
                </div>
                <div className="mb-2">
                  <div className="text-sm">Airbnb</div>
                  <h3 className="text-xl font-bold">Graphic Designer</h3>
                </div>
                <div className="absolute right-4 top-16">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Part time</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Senior level</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <div className="font-bold">$300/hr</div>
                    <div className="text-xs">New York, NY</div>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Details</button>
                </div>
              </div>
  
              {/* Job Card 6 */}
              <div className="bg-gray-100 rounded-lg p-4 relative">
                <div className="flex justify-between mb-4">
                  <span className="text-sm">18 Jan, 2023</span>
                  <Bookmark className="w-4 h-4" />
                </div>
                <div className="mb-2">
                  <div className="text-sm">Apple</div>
                  <h3 className="text-xl font-bold">Graphic Designer</h3>
                </div>
                <div className="absolute right-4 top-16">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Part time</span>
                  <span className="bg-white px-3 py-1 rounded-full text-xs">Distant</span>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div>
                    <div className="font-bold">$140/hr</div>
                    <div className="text-xs">San Francisco, CA</div>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Details</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
  