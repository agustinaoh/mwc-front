import React from "react";
import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import { GlobalFilter } from "./helpers/GlobalFilter";
import "./Table.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

export const Table = ({
  columns,
  data,
  handleNewCompany,
  handleNewFlight,
  children,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    rows,
    state,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  const handlePageChange = (value) => {
    let pageNumber = value ? Number(value) - 1 : 0;
    gotoPage(pageNumber);
  };

  return (
    <>
      <div className="mb-12 w-full">
        <div className="flex w-full justify-between">
          <div className="flex items-center justify-start">
            {children && children}
          </div>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted &&
                        (column.isSortedDesc ? (
                          <FaChevronDown className="inline ml-2" />
                        ) : (
                          <FaChevronUp className="inline ml-2" />
                        ))}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full flex justify-between items-center bg-teal-light bg-opacity-20 py-2 mt-2">
          <div>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <FaChevronLeft />
            </button>
          </div>
          <p>
            {rows.length} results |{" "}
            <strong>
              Page {pageIndex + 1} / {pageOptions.length}
            </strong>
          </p>
          <span>
            Go to Page
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => handlePageChange(e.target.value)}
              style={{ width: "40px", textAlign: "center" }}
            />
          </span>

          <div>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
