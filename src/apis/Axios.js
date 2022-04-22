//what is axios instance

//axios instance basically an external library, which is used to make promise based http calls (fetch made easy,plus gives a structured responce) this is one of the recommended library used with react.

//creating instances
//Creating instances
//What if we were to make multiple api calls, to the same endpoint. Having to add the the full url doesn't seem right, plus what if later on the endpoint is changed, the changes just seem too much of manual rework.

//Let create our instance by using the create method which is part of the axios import you did above




import axios from "axios";
// axios instance
export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "content-type": "application/json",
  },
});