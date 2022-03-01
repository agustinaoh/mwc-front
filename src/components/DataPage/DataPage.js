import React, { useMemo } from "react";
import { Table } from "../Table/Table";
import { COLUMNS_DATA } from "./../Table/helpers/columns";
import MOCK_DATA from "./../Table/helpers/MOCK_DATA.json"; //mocked // REPLACE

function DataPage() {
  const columns = useMemo(() => COLUMNS_DATA, []);
  const data = useMemo(() => MOCK_DATA, []);

  return (
    <div className="flex flex-col w-full justify-center p-12 my-20">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default DataPage;
