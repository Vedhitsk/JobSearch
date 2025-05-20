import {
  X,
  Briefcase,
  Building2,
  MapPin,
  Clock,
  DollarSign,
  FileText,
} from "lucide-react";

export default function PostJobPopup({ isPopupOpen, closePopup }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log("Job posting submitted");
    closePopup();
  };

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-white to-gray-200 rounded-2xl shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto">
        {/* Header with dark gray accent */}
        <div className="bg-black/95 text-white px-6 py-4 rounded-t-2xl relative border border-gray-700">
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-lg shadow-sm">
              <Briefcase className="w-6 h-6 text-gray-900" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Post New Position</h2>
              <p className="text-gray-300 text-sm">
                Find your next team member
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 space-y-5">
          {/* Job Title */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Briefcase className="w-4 h-4" />
              Job Title *
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:shadow-lg transition-all placeholder-gray-400"
              placeholder="Senior Frontend Developer"
              required
            />
          </div>

          {/* Company */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Building2 className="w-4 h-4" />
              Company *
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:shadow-lg transition-all placeholder-gray-400"
              placeholder="Your company name"
              required
            />
          </div>

          {/* Location & Job Type Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:shadow-lg transition-all placeholder-gray-400"
                placeholder="New York, NY"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4" />
                Employment Type
              </label>
              <select className="w-full px-4 py-3 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:shadow-lg transition-all cursor-pointer">
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Freelance</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          {/* Salary Range */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4" />
              Salary Range (USD)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                className="w-full px-4 py-3 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:shadow-lg transition-all placeholder-gray-400"
                placeholder="80,000"
              />
              <input
                type="text"
                className="w-full px-4 py-3 bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:shadow-lg transition-all placeholder-gray-400"
                placeholder="120,000"
              />
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4" />
              Job Description *
            </label>
            <textarea
              className="w-full px-4 py-3 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent focus:shadow-lg transition-all placeholder-gray-400 resize-none"
              rows="4"
              placeholder="Describe the role, responsibilities, requirements..."
              required
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={closePopup}
              className="flex-1 px-4 py-3 text-gray-700 font-medium bg-gradient-to-r from-gray-50 to-white border border-gray-300 rounded-lg hover:from-gray-100 hover:to-gray-50 hover:shadow-md transition-all duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-medium rounded-lg hover:from-gray-800 hover:to-gray-900 hover:shadow-xl transition-all duration-200 shadow-lg"
            >
              Post Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
