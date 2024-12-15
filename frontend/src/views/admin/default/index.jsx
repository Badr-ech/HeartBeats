import FullCalendar from "components/calendar/FullCalendar";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import TotalSpent from "views/admin/default/components/TotalSpent";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { useState } from "react";
import { columnsDataCheck, columnsDataComplex } from "./variables/columnsData";

import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import tableDataComplex from "./variables/tableDataComplex.json";
import { MdMedicalServices, MdOutlineGroups } from "react-icons/md";
const Dashboard = () => {
  const [isDashboard, setIsDashboard] = useState(true);
  console.log("paraaam");
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Staff"}
          subtitle={"12"}
        />
        <Widget
          icon={<MdOutlineGroups className="h-6 w-6" />}
          title={"Student"}
          subtitle={"5000"}
        />
        <Widget
          icon={<MdMedicalServices className="h-7 w-7" />}
          title={"Medicaments"}
          subtitle={"342"}
        />
      </div>

      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <WeeklyRevenue />
        <div className="grid grid-cols-2 gap-2">
          <DailyTraffic />
          <PieChartCard />
        </div>
      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-1">
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
