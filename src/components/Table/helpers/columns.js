import MOCK_DATA from "./MOCK_DATA.json";

const keys = Object.keys(MOCK_DATA[0]);

export const COLS = keys.map((key) => {
  const transformedHeader =
    key[0].toUpperCase() + key.slice(1).split("_").join(" ");

  return {
    Header: transformedHeader,
    accessor: key,
  };
});

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Company",
    accessor: "company",
  },
  {
    Header: "Date",
    accessor: "first_name",
  },
  {
    Header: "Origin Country",
    accessor: "originCountry",
  },
  {
    Header: "Origin Continent",
    accessor: "originContinent",
  },
  {
    Header: "Destination Country",
    accessor: "destinationCountry",
  },
  {
    Header: "Destination Continent",
    accessor: "destinationContinent",
  },
  {
    Header: "Seats",
    accessor: "seats",
  },
];

// company, date, originCountry, originContinent, destinationContinent, destinationCountry, seats
