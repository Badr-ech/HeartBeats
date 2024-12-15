import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Search icon
import { RiMoonFill, RiSunFill } from "react-icons/ri"; // Dark mode icons
import aiIcon from "assets/chatbot.png"; // Chatbot icon
import Chatbot from "components/chatbot/chatbot"; // Import Chatbot component

const Navbar = ({ brandText }) => {
  // State to control chatbot visibility
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Toggle the chatbot visibility
  const toggleChatbot = () => {
    setIsChatbotOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
        <div className="ml-[6px]">
          <div className="h-6 w-[224px] pt-1">
            <span className="text-sm font-normal text-navy-700 dark:text-white">
              {brandText}
            </span>
          </div>
        </div>

        <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
          {/* Chatbot Button */}
          <button
            className="h-full rounded-full bg-blue-500 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none"
            onClick={toggleChatbot} // Trigger the chatbot toggle
          >
            <img src={aiIcon} alt="AI Icon" className="h-6 w-6" />
          </button>

          {/* Search Bar */}
          <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
            </p>
            <input
              type="text"
              placeholder="Search..."
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
            />
          </div>

          {/* Dark Mode Toggle */}
          <div
            className="cursor-pointer text-gray-600"
            onClick={() => {
              document.body.classList.toggle("dark");
            }}
          >
            {document.body.classList.contains("dark") ? (
              <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
            ) : (
              <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
            )}
          </div>
        </div>
      </nav>

      {/* Chatbot Modal */}
      {isChatbotOpen && <Chatbot onClose={toggleChatbot} />}
    </>
  );
};

export default Navbar;
