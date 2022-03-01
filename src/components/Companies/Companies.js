import React, { useMemo, useState } from "react";
import { Table } from "../Table/Table";
import { COLUMNS } from "./../Table/helpers/columns";
import MOCK_DATA from "./../Table/helpers/MOCK_DATA.json";
import { Modal } from "../Modal/Modal";
import { FormNewCompany } from "./../FormCompany/FormNewCompany";

function Companies() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full justify-center p-12 my-20">
        {isModalVisible && (
          <Modal>
            <FormNewCompany />
          </Modal>
        )}
        <Table columns={columns} data={data} onClick={setIsModalVisible} />
      </div>
    </>
  );
}

export default Companies;
