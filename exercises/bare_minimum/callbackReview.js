/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = (filePath, callback) => {
  fs.readFile(filePath, {encoding: 'utf8'}, (err, text) => {
    if (err) {
      callback(err);
    } else {
      callback(null, text.split('\n')[0]);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
/*var getStatusCode = (url, callback) => {
  request(url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });
};
*/
var getStatusCode = (url, callback) => {

  request(url, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response.statusCode);
    }
  });

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
