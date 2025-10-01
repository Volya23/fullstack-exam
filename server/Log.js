const fs = require('fs');
const path = require('path');
const { LOGS_PATH, LOG_FILE } = require('./src/constants');

function logBlock(line) {
  try {
    const obj = JSON.parse(line);
    return {
      message: obj.message || 'No message',
      code: obj.code || 500,
      time: obj.time || Date.now()
    }
  } catch (err) {
    return { message: line, code: 500, time: Date.now() }
  }
}

function recordingLogs() {
  if (!fs.existsSync(LOG_FILE)) return;

  const content = fs.readFileSync(LOG_FILE, 'utf-8');
  if (!content.trim()) return;

  const lines = content.trim().split('\n');
  const changed = lines.map(logBlock);

  const timestamp = new Date().toISOString().split('T')[0];
  const newNameForFile = path.join(LOGS_PATH, `log-${timestamp}.json`);

  fs.writeFileSync(newNameForFile, JSON.stringify(changed, null, 2), 'utf-8');
  fs.writeFileSync(LOG_FILE, '[]', 'utf-8');

  console.log(`Logs rotated to ${newNameForFile}`);
}

module.exports = recordingLogs;