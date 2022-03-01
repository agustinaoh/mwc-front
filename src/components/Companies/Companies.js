import React, { useEffect, useMemo, useState } from "react";
import { Table } from "../Table/Table";
import { COLUMNS } from "./../Table/helpers/columns";
//import MOCK_DATA from "./../Table/helpers/MOCK_DATA.json";
import { Modal } from "../Modal/Modal";
import { FormNewCompany } from "./../FormCompany/FormNewCompany";
import { FormNewFlight } from "./../FormFlight/FormNewFlight";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/company")
      .then(res => res.json())
      .then(data => setCompanies(data));
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => companies, [companies]);

  const [isCompanyModalVisible, setIsCompanyModalVisible] = useState(false);
  const [isFlightModalVisible, setIsFlightModalVisible] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full justify-center p-12 my-20">
        {isCompanyModalVisible && (
          <Modal>
            <FormNewCompany />
          </Modal>
        )}
        {isFlightModalVisible && (
          <Modal>
            <FormNewFlight />
          </Modal>
        )}
        <Table
          columns={columns}
          data={data}
          handleNewCompany={setIsCompanyModalVisible}
          handleNewFlight={setIsFlightModalVisible}
        />
      </div>
    </>
  );
}

export default Companies;
