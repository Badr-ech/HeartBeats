import React, { useMemo } from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import { useGlobalFilter, usePagination, useSortBy, useTable } from "react-table";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { useFetch } from "hooks/api";

const ComplexTable = () => {
  // Fetch data from the backend API
  const { data: result, error } = useFetch("http://localhost:8000/StaffRouter");

  // Safely extract the fetched data or default to an empty array
  const loopingResult = useMemo(() => result?.response || [], [result]);

  // Define columns for the table
  const columns = useMemo(() => [
    {
      Header: "NAME",
      accessor: "name",
    },
    {
      Header: "STATUS",
      accessor: "status",
      Cell: ({ value }) => (
        <div className="flex items-center gap-2">
          {value === "available" ? (
            <MdCheckCircle className="text-green-500" />
          ) : (
            <MdCancel className="text-red-500" />
          )}
          <span className="text-sm font-bold text-navy-700 dark:text-white">
            {value === "available" ? "Available" : "Out of the office"}
          </span>
        </div>
      ),
    },
    {
      Header: "TYPE",
      accessor: "type",
    },
    {
      Header: "AVAILABILITY",
      accessor: "availability",
    },
  ], []);

  // Initialize the React Table instance
  const tableInstance = useTable(
    {
      columns,
      data: loopingResult, // Use the fetched data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  // Handle loading and error states
  if (!result && !error) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      <div className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Complex Table
        </div>
        <CardMenu />
      </div>

      <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      {column.render("Header")}
                    </p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="pt-[14px] pb-[18px] sm:text-[14px]"
                      key={cell.column.id}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default ComplexTable;

