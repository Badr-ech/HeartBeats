import React, { useState } from "react"; 
import Calendar from "react-calendar";
import Card from "components/card";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "assets/css/FullCalendar.css";

const FullCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Card extra="flex w-full h-full flex-col px-3 py-3">
        <Calendar
          onChange={onChange}
          value={value}
          prevLabel={<MdChevronLeft className="ml-1 h-6 w-6 " />}
          nextLabel={<MdChevronRight className="ml-1 h-6 w-6 " />}
          view={"month"}
          className="w-full h-auto" // Make the calendar take up full width and auto height
        />
      </Card>
    </div>
  );
};

export default FullCalendar;
