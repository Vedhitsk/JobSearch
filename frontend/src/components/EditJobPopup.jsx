import { X } from "lucide-react";
import { useEffect, useState } from "react";

const EditJobPopup = ({ job, isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    tags: [],
    description: "",
  });

  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isOpen && job) {
      // Pre-populate form with existing job data
      setFormData({
        title: job.title,
        company: job.company,
        location: job.location,
        salary: job.salary,
        tags: job.tags.join(", "), // Convert array to comma-separated string
        description: job.description || "",
      });
      setAnimationClass("animate-in");
      document.body.style.overflow = "hidden";
    } else {
      setAnimationClass("animate-out");
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, job]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create updated job object
    const updatedJob = {
      ...job,
      title: formData.title,
      company: formData.company,
      location: formData.location,
      salary: formData.salary,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag), // Convert back to array
      description: formData.description,
      logoContent: formData.company.charAt(0).toUpperCase(), // Update logo content
    };

    onUpdate(updatedJob);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6 transition-opacity duration-300 ${
        animationClass === "animate-in" ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden my-4 max-h-[90vh] transition-transform duration-300 ${
          animationClass === "animate-in"
            ? "scale-100 translate-y-0"
            : "scale-95 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className={`${job.bgColor} p-6 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>

          <h2 className="text-2xl font-bold">Edit Job</h2>
          <p className="text-sm text-gray-600">Update job information</p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Salary
                  </label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. $250/hr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Full time, Senior level, Remote"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Describe the job responsibilities and requirements..."
                ></textarea>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-black to-gray-800 text-white font-medium rounded-lg hover:from-gray-800 hover:to-gray-900 hover:shadow-xl transition-all duration-200 shadow-lg"
                >
                  Update Job
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditJobPopup;
