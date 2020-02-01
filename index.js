let cron = require('node-cron');
let shell = require('shelljs');

cron.schedule('* * * * * *',  () => {
console.log("Shell running");

});