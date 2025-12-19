const fs = require('fs');
const { LOGS_PATH, LOG_FILE } = require('./src/constants');


if (!fs.existsSync(LOGS_PATH)) {
  fs.mkdirSync(LOGS_PATH, { recursive: true});
}

function loggerErrors(err, code = 500) {
  const logMessage = {
    message: err.message || String(err),
    code,
    time: Date.now()
  };
  
  fs.appendFileSync(LOG_FILE, JSON.stringify(logMessage) + '\n', 'utf-8');
}


module.exports = { loggerErrors };