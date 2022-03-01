import MOCK_DATA from "./MOCK_DATA.json";

const keys = Object.keys(MOCK_DATA[0]);

export const COLUMNS = keys.map((key) => {
  const transformedHeader =
    key[0].toUpperCase() + key.slice(1).split("_").join(" ");

  return {
    Header: transformedHeader,
    accessor: key,
  };
});
