var fs = require("fs");
var fetch = require("node-fetch");
var requestOptions = {
  method: "GET",
  redirect: "follow",
};
console.log("lla");

fetch("https://coronavirus-19-api.herokuapp.com/countries", requestOptions)
  .then((response) => response.json())
  .then((result) => fs.writeFileSync("covidata2.json", JSON.stringify(result)))
  .catch((error) => console.log("error", error));
