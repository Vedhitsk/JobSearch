import { X, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

const DeleteConfirmationPopup = ({
  isOpen,
  onClose,
  onConfirm,
  jobTitle,
  jobCompany,
}) => {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    if (isOpen) {
      setAnimationClass("animate-in");
      document.body.style.overflow = "hidden";
    } else {
      setAnimationClass("animate-out");
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    console.log("Delete confirmed for:", jobTitle);
    onConfirm();
  };

  const handleCancel = () => {
    console.log("Delete cancelled for:", jobTitle);
    onClose();
  };

  // Prevent event propagation when clicking inside the modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-6 transition-opacity duration-300 ${
        animationClass === "animate-in" ? "opacity-100" : "opacity-0"
      }`}
      // Remove the onClick={handleCancel} to prevent outside click closing
    >
      <div
        className={`bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden transition-transform duration-300 ${
          animationClass === "animate-in"
            ? "scale-100 translate-y-0"
            : "scale-95 translate-y-8"
        }`}
        onClick={handleModalClick} // Prevent clicks inside modal from bubbling up
      >
        {/* Header */}
        <div className="bg-red-50 p-6 relative border-b border-red-100">
          <button
            onClick={handleCancel}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Delete Job
              </h3>
              <p className="text-sm text-gray-600">
                This action cannot be undone
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-4">
            Are you sure you want to delete the job posting for{" "}
            <span className="font-semibold text-gray-900">"{jobTitle}"</span> at{" "}
            <span className="font-semibold text-gray-900">{jobCompany}</span>?
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <div className="flex">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                This will permanently remove the job posting and all associated
                data.
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
          >
            Delete Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
