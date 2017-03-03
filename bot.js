var config = require("./config.js");
var Twit = require('twit');

var Bot = new Twit(config);

console.log('The bot is running...');
