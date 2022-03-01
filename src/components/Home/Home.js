import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl text-teal-dark mb-5">"Let's bring our net carbon footprint to 0 by 2050" </h1>
        <h3>-- IATA General Assembly</h3>
        <div className="flex space-x-2 mt-5">
          <Link to="/companies">
            <Button text="SEE COMPANIES" />
          </Link>
          <Link to="/data">
            <Button text="SEE DATA" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
