import React from "react";
import { useTable } from "react-table";
const index = ({ header, cell_data }) => {
  const data = React.useMemo(() => cell_data, []);
  const columns = React.useMemo(() => header, []);

  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
    });
  return (
    <>
      <button
        type="button"
        className="inline-block px-6 py-2 border-2 border-blue-400 text-blue-400 font-medium text-xs leading-tight  rounded hover:bg-sky-500 hover:bg-opacity-10 focus:outline-none focus:ring-0 transition duration-150 ease-in-out "
      >
        Add New Agent
      </button>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              <table
                {...getTableProps()}
                border="1"
                className="min-w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps()}
                        >
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="bg-white divide-y divide-gray-200"
                  {...getTableBodyProps()}
                >
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className="px-6 py-4 whitespace-nowrap"
                              {...cell.getCellProps()}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
