const mongoose = require('mongoose');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '..', 'config/mongoConfig.json');
const config = require(configPath)[ env ];

let host;
if (env === 'production') {
  host = 'mongo-prod';
} else {
  host = '127.0.0.1';
}

mongoose.connect(
  `mongodb://${host}:${ config.port }/${ config.database }`,
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
      console.log('MongoDB connection error:', err);
      process.exit(1);
    } else {
      console.log(`MongoDB connected to ${host}:${ config.port }/${ config.database }`);
    }
  });

mongoose.set('debug', env === 'development');

module.exports = mongoose;
