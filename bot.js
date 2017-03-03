var config = require("./config.js");
var Twit = require('twit');
var got = require('got');

got("https://emploi.alsacreations.com/offres.json")
  .then(function(response){ console.log(response.body)});

var message = process.argv[2];
console.log(message);

var Bot = new Twit(config);
Bot.post('statuses/update', { status: message }, function(err, data, response) {
  if(err) {
    console.log("There was a problem tweeting the message.", err);
  }
});
