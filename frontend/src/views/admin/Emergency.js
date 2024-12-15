import React from "react";
import { MdError } from "react-icons/md";
import firstAidImage from './firstaid.jpeg';  // Adjusted path since image is in the same folder

const Emergency = () => {
  return (
    <div className="min-h-screen flex flex-col space-y-6 px-4 py-6 lg:px-16 lg:py-12 bg-red-50">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Emergency First Aid</h1>
      <p className="mb-4 text-lg text-gray-700">
        In case of an emergency, here are some essential first aid steps to follow:
      </p>

      {/* Flexbox container to position text on the left and image on the right */}
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-xl p-8 flex items-center">
        {/* Text content on the left */}
        <div className="flex-1 space-y-4">
          {/* Removed the previously mentioned list and paragraph */}
        </div>

        {/* Image on the right */}
        <div className="ml-8">
          <img 
            src={firstAidImage} 
            alt="First Aid" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Alert Icon */}
      <div className="mt-4 flex items-center gap-2 text-red-600">
        <MdError className="h-8 w-8" />
        <span className="text-xl font-bold">Important Note:</span>
      </div>
      <p className="text-lg text-gray-700 mt-2">
        Always call emergency services <strong>05-35-86-22-22</strong> in case of a serious injury or medical emergency.
      </p>
    </div>
  );
};

export default Emergency;