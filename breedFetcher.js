const args = process.argv.slice(2);
const searchParameter = args[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${searchParameter}`;

const request = require("request");
request(url, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
  console.log(data[0].description);
});
