const http = require('http');
const express = require('express');
const cors = require('cors');
require('./dbMongo/mongoose');
const router = require('./router');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');
const multerHandError = require('./handlerError/multerHandler');
const path = require ('path');
const { FILES_PATH } = require('./constants');
const { loggerErrors } = require('../LoggerErrors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(FILES_PATH)));

app.get('/error-tests', (req, res, next) => {
  const err = new Error('This is a test error');
  err.status = 400;
  next(err);
});

app.use(router);
app.use(multerHandError);
app.use(handlerError);

app.use((err, req, res, next) => {
  loggerErrors(err, err.status || 500);
  res.status(err.status || 500).send({error: 'Internal server error'});
});

const server = http.createServer(app);
server.listen(PORT,
  () => console.log(`Example app listening on port ${ PORT }!`));
controller.createConnection(server);

require('../TimeTable');
