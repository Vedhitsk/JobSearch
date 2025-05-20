import { X } from "lucide-react";
import { useEffect, useState } from "react";

const JobDetailsPopup = ({ job, isOpen, onClose }) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isOpen) {
      setAnimationClass("animate-in");
      // Prevent body scrolling when popup is open
      document.body.style.overflow = "hidden";
    } else {
      setAnimationClass("animate-out");
      // Restore body scrolling when popup is closed
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6 transition-opacity duration-300 ${
        animationClass === "animate-in" ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-xl w-full max-w-3xl overflow-hidden my-4 max-h-[90vh] transition-transform duration-300 ${
          animationClass === "animate-in"
            ? "scale-100 translate-y-0"
            : "scale-95 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className={`${job.bgColor} p-6 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-700 hover:text-white hover:bg-gray-800 rounded-full transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start">
            <div
              className={`w-16 h-16 ${job.logoBackground} rounded-lg flex items-center justify-center ${job.logoTextColor} mr-4`}
            >
              {job.logoContent}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{job.title}</h2>
              <p className="text-lg">{job.company}</p>
              <p className="text-sm">{job.location}</p>
            </div>
          </div>
        </div>

        {/* Content - Added overflow-y-auto to ensure scrolling within the popup */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-gray-700 mb-3">Job Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Posted:</span>
                  <span>{job.postedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Salary:</span>
                  <span className="font-semibold">{job.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Job Type:</span>
                  <span>
                    {job.tags.find((tag) =>
                      [
                        "Full time",
                        "Part time",
                        "Contract",
                        "Internship",
                      ].includes(tag)
                    ) || "Not specified"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience Level:</span>
                  <span>
                    {job.tags.find((tag) =>
                      ["Junior level", "Mid level", "Senior level"].includes(
                        tag
                      )
                    ) || "Not specified"}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-700 mb-3 px-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">Job Description</h3>
            <p className="text-gray-600">
              {job.description ||
                `${job.company} is looking for a talented ${job.title} to join our team. This is an exciting opportunity to work on cutting-edge projects in a collaborative environment.`}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">Requirements</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Proven experience as a {job.title} or similar role</li>
              <li>Strong portfolio demonstrating relevant skills</li>
              <li>Excellent communication and teamwork abilities</li>
              <li>Proficiency with industry-standard design tools</li>
              <li>
                Bachelor's degree in Design, HCI, or related field (or
                equivalent experience)
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">Benefits</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Competitive salary and benefits package</li>
              <li>Flexible working hours</li>
              <li>Remote work options</li>
              <li>Professional development opportunities</li>
              <li>Collaborative and innovative work environment</li>
            </ul>
          </div>

          <div className="flex justify-end space-x-3 mt-8">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
            <button className="px-4 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-medium rounded-lg hover:from-gray-800 hover:to-gray-900 hover:shadow-xl transition-all duration-200 shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPopup;
