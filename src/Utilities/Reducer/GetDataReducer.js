import GetData from "../Contexts/GetDataContext";
import { GET_DATA } from "./types";
import { useState } from "react";

function getData() {
  const [details, setDetails] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
}

const GetDataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return getData();
    default:
      return state;
  }
};

export default GetDataReducer;
