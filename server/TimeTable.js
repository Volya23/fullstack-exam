const cron = require('node-cron');
const recordingLogs = require('./Log');

cron.schedule('0 10 * * *', () => {
  recordingLogs();
});