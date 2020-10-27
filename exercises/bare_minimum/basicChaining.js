/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var getUser = require('./promiseConstructor.js')
var getProfile = require('./promisification.js')


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return getUser.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(username) {
      return username;
    })
    .then(function(gotUserName) {
      return getProfile.getGitHubProfileAsync(gotUserName)
    })
    .then(function(usernameToWrite) {
      return new Promise(function(resolve, reject) {
        fs.writeFile(writeFilePath, JSON.stringify(usernameToWrite), (err, file) => {
          if (err) {
            reject(err);
          } else {
            resolve(file);
          }
        })
      })
    })
    .catch(function(err) {
      console.log(err);
    })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
