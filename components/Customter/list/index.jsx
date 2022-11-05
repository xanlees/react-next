import React from "react";
import { useTable } from "react-table";

function index({ header, cell_data }) {
  const data = React.useMemo(() => cell_data, []);
  const columns = React.useMemo(() => header, []);


  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <button className="bg-green-400  hover:bg-green-700 text-white font-bold py-2 px-4 rounded">New</button>
      <table {...getTableProps()} border="1"
      className="min-w-full divide-y divide-gray-200">
      <thead  className="bg-gray-50">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th 
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody 
      className="bg-white divide-y divide-gray-200"
      {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td 
                className="px-6 py-4 whitespace-nowrap"
                {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    
   
  );
}

export default index;
