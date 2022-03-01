import { FormNewCompany } from "../FormCompany/FormNewCompany";
import { FormNewFlight } from "../FormFlight/FormNewFlight";
import { Modal } from "../Modal/Modal";

function Home() {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl text-teal-dark mb-5">"Let's bring our net carbon footprint to 0 by 2050" </h1>
        <h3 className="self-start">-- IATA General Assembly</h3>
      </div>
      <div className="flex flex-row ml-40">
        <button>SEE COMPANIES</button>
        <button>SEE DATA</button>
      </div>
    </>
  );
}

export default Home;
