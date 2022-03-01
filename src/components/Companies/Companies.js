import React, { useEffect, useMemo, useState } from "react";
import { Table } from "../Table/Table";
import { COLUMNS_COMPANIES as COLUMNS } from "./../Table/helpers/columns";
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
            <FormNewCompany handleClose={() => setIsCompanyModalVisible(false)} />
          </Modal>
        )}
        {isFlightModalVisible && (
          <Modal>
            <FormNewFlight handleClose={() => setIsFlightModalVisible(false)} />
          </Modal>
        )}

        <Table columns={columns} data={data}>
          <button
            onClick={setIsCompanyModalVisible}
            className="bg-teal-dark py-2 px-6 text-white hover:bg-teal-light mr-6"
          >
            Add new Company
          </button>
          <button onClick={setIsFlightModalVisible} className="bg-teal-dark py-2 px-6 text-white hover:bg-teal-light">
            Add new Flight
          </button>
        </Table>
      </div>
    </>
  );
}

export default Companies;
