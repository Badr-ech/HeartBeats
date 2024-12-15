import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import aiIcon from "assets/chatbot.png";

const Navbar = (props) => {
  const { brandText } = props;
  const [darkmode, setDarkmode] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChatbot = () => setIsChatbotOpen(!isChatbotOpen);

  const sendMessage = async () => {
    // Add logic for sending message (API or mock response)
    const userMessage = input;
    const mockResponse = "This is a response from the chatbot.";
    setMessages([
      ...messages,
      { role: "user", content: userMessage },
      { role: "assistant", content: mockResponse },
    ]);
    setInput(""); // Clear the input field
  };

  return (
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
          onClick={toggleChatbot}
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
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>
      </div>

      {/* Chatbot Modal */}
      {isChatbotOpen && (
        <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
          <div className="w-1/3 rounded-lg bg-white p-6 shadow-lg dark:bg-navy-800">
            <h3 className="mb-4 text-xl font-bold text-navy-700 dark:text-white">
              Chatbot
            </h3>
            <div className="chatbot-body mb-4 max-h-60 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`my-2 ${
                    msg.role === "user"
                      ? "text-right text-blue-500"
                      : "text-left text-gray-700"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full rounded-md border p-2 text-sm text-gray-700 dark:text-gray-300"
            />
            <div className="mt-4 flex justify-between">
              <button
                className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
                onClick={sendMessage}
              >
                Send
              </button>
              <button
                className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600"
                onClick={toggleChatbot}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
