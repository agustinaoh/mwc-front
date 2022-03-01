import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { GoSearch } from "react-icons/go";

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const handleDelayedFilter = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500); //delays the search

  return (
    <div className="p-2 border-2 border-teal-dark w-1/3">
      <span>
        <GoSearch className="inline" />
        <input
          className="bg-transparent focus:outline-none"
          placeholder="Search..."
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            handleDelayedFilter(e.target.value);
          }}
        />
      </span>
    </div>
  );
};
