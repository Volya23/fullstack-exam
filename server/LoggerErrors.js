const fs = require('fs');
const { LOGS_PATH, LOG_FILE } = require('./src/constants');

if (!fs.existsSync(LOGS_PATH)) {
  fs.mkdirSync(LOGS_PATH, { recursive: true});
}

function loggerErrors(err, code = 500) {
  const logMessage = {
    message: err.message || String(err),
    time: Date.now(),
    code,
    stackTrace: err.stack ? { raw: err.stack } : {},
  };
  
  fs.appendFileSync(LOG_FILE, JSON.stringify(logMessage) + '\n', 'utf-8');
}

loggerErrors(new Error('Test error for log file'), 400);

module.exports = { loggerErrors };