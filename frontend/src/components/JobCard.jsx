import { Bookmark, BookmarkIcon as BookmarkFilled, Edit } from "lucide-react";

const JobCard = ({ job, colorIndex = 0, onEdit, onDetails }) => {
  // Use job prop if provided, otherwise fallback to hardcoded data
  const jobData = job || {
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
  };

  // Function to determine card color based on index
  const getCardColor = (index) => {
    const colors = ["orange", "green", "purple", "blue", "pink", "gray"];
    return colors[index % colors.length];
  };

  // Use bgColor from job data if available, otherwise use colorIndex
  const cardBgColor = jobData.bgColor || `bg-${getCardColor(colorIndex)}-100`;

  return (
    <div className={`${cardBgColor} rounded-lg p-4 relative`}>
      {/* Edit button - always visible */}
      {onEdit && (
        <button
          onClick={onEdit}
          className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
          title="Edit job"
        >
          <Edit className="w-4 h-4" />
        </button>
      )}

      <div className="flex justify-between mb-4">
        <span className="text-sm">{jobData.postedDate}</span>
        {jobData.bookmarked ? (
          <BookmarkFilled className="w-4 h-4 text-black" />
        ) : (
          <Bookmark className="w-4 h-4" />
        )}
      </div>
      <div className="mb-2">
        <div className="text-sm">{jobData.company}</div>
        <h3 className="text-xl font-bold">{jobData.title}</h3>
      </div>
      <div className="absolute right-4 top-16">
        <div
          className={`w-10 h-10 ${jobData.logoBackground} rounded-full flex items-center justify-center ${jobData.logoTextColor}`}
        >
          {jobData.logoContent}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 my-4">
        {jobData.tags.map((tag, index) => (
          <span key={index} className="bg-white px-3 py-1 rounded-full text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-end mt-4">
        <div>
          <div className="font-bold">{jobData.salary}</div>
          <div className="text-xs">{jobData.location}</div>
        </div>
        <button
          className="bg-black text-white px-4 py-2 rounded-full text-sm"
          onClick={onDetails}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
