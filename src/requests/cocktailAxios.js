import axios from "axios";

const cocktailRequest = axios.create({
  method: "GET",
  baseURL: "https://the-cocktail-db.p.rapidapi.com/search.php",
  headers: { "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com" },
});

export default cocktailRequest;
