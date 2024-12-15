import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCalendarToday, MdAccessTime, MdOutlineDescription } from "react-icons/md";

const BookAppointment = () => {
  const [step, setStep] = useState("date");
  const [formData, setFormData] = useState({
    date: "", // Ensure no preselection
    time: "",
    reason: "",
  });

  const navigate = useNavigate();

  // Handle changes in form inputs
  const handleInputChange = (name, value) => {
    console.log(`Updating ${name} to:`, value); // Debugging
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    console.log("Form Data on Submit:", formData); // Debugging

    if (!formData.date) {
      alert("Please select a date for the appointment.");
      return;
    }
    if (!formData.time) {
      alert("Please select a time for the appointment.");
      return;
    }
    if (!formData.reason) {
      alert("Please provide a reason for the appointment.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Appointment saved:", result);
        navigate("/success");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.error);
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error while saving appointment:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col space-y-6 px-4 py-6 lg:px-16 lg:py-12">
      {/* Step Buttons */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {/* Date Button */}
        <button
          className={`flex items-center justify-between w-full p-6 bg-white shadow-lg rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 ${
            step === "date" ? "border-2 border-blue-600" : ""
          }`}
          onClick={() => setStep("date")}
        >
          <div className="flex items-center gap-4">
            <MdCalendarToday className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Date</span>
          </div>
          <span className="text-lg text-gray-500">{formData.date || "Select"}</span>
        </button>

        {/* Time Button */}
        <button
          className={`flex items-center justify-between w-full p-6 bg-white shadow-lg rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 ${
            step === "time" ? "border-2 border-blue-600" : ""
          }`}
          onClick={() => setStep("time")}
        >
          <div className="flex items-center gap-4">
            <MdAccessTime className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Time</span>
          </div>
          <span className="text-lg text-gray-500">{formData.time || "Select"}</span>
        </button>

        {/* Reason Button */}
        <button
          className={`flex items-center justify-between w-full p-6 bg-white shadow-lg rounded-xl hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 ${
            step === "reason" ? "border-2 border-blue-600" : ""
          }`}
          onClick={() => setStep("reason")}
        >
          <div className="flex items-center gap-4">
            <MdOutlineDescription className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Reason</span>
          </div>
          <span className="text-lg text-gray-500">{formData.reason ? "Provided" : "Write"}</span>
        </button>
      </div>

      {/* Interactive Sections */}
      <div className="w-full max-w-5xl bg-white dark:bg-gray-800 dark:text-gray-200 shadow-lg rounded-xl p-8">
        {step === "date" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Date</h2>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
            />
          </div>
        )}
        {step === "time" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Time</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
                <button
                  key={time}
                  className={`p-4 rounded-xl text-center shadow-md ${
                    formData.time === time ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800"
                  }`}
                  onClick={() => handleInputChange("time", time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}
        {step === "reason" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Reason</h2>
            <textarea
              rows="4"
              placeholder="Describe your reason for the appointment"
              value={formData.reason}
              onChange={(e) => handleInputChange("reason", e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-blue-300 dark:focus:ring-blue-500"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="mt-8 flex flex-col gap-y-4">
        <button
          onClick={handleSubmit}
          className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-green-500 text-white text-lg font-bold"
        >
          Submit Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointment;





