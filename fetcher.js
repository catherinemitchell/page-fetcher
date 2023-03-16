const fs = require('fs');

const request = require('request');

const url = process.argv[2];
const path = process.argv[3];

const fetch = function(url, path) {
  request(url, (error, response, body) => {
    if (error) {
      console.log("There is an error in the request");
    }
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log("Failed")
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`)
    }
  })
});
}

if (!url || !path) {
  console.log("You need to enter both url and path")
} else {
  fetch(url, path)
}

