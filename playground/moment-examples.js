var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('current timestamp', now.unix());

var timestamp = 1492517115;
var currMoment = moment.unix(timestamp);
console.log('current moment', currMoment.format());
