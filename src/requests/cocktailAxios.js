import axios from "axios";

const cocktailRequest = axios.create({
  method: "GET",
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});

export default cocktailRequest;
