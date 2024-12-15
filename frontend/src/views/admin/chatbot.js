import React, { useState } from "react";

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const API_KEY = "key"; // Use an environment variable for security

  const sendMessage = async () => {
    if (!input.trim() || isRequestInProgress) return;
  
    setRequestInProgress(true);
    const userMessage = { role: "user", content: input };
    const updatedMessages = [...messages, userMessage];
  
    setMessages(updatedMessages);
    setInput("");
  
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: updatedMessages,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch response from GPT API");
      }
  
      const data = await response.json();
      const botMessage = { role: "assistant", content: data.choices[0].message.content };
  
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prevMessages) => {
        const lastMessage = prevMessages[prevMessages.length - 1];
        if (lastMessage?.content === "Sorry, I couldn't process your request.") {
          return prevMessages;
        }
        return [...prevMessages, { role: "assistant", content: "Sorry, I couldn't process your request." }];
      });
    } finally {
      setRequestInProgress(false);
    }
  };
  

  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="w-1/3 rounded-lg bg-white p-6 shadow-lg dark:bg-navy-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-navy-700 dark:text-white">Chatbot</h3>
          <button className="text-red-500 hover:text-red-600" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="h-64 overflow-y-auto border-b border-gray-300 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${msg.role === "user" ? "text-right text-blue-500" : "text-left text-gray-700"}`}
            >
              {msg.role === "user" ? "You" : "Bot"}: {msg.content}
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
