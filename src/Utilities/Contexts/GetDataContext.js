import { createContext } from "react";

const GetData = createContext({
  results: [],
  isLoading: false,
});

export default GetData;
