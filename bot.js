var config = require("./config.js");
var Twit = require('twit');

var Bot = new Twit(config);

var message = process.argv[2];

console.log(message);

Bot.post('statuses/update', { status: message }, function(err, data, response) {
  if(err) {
    console.log("There was a problem tweeting the message.", err);
  }
});
