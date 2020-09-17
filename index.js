const express = require('express');
const app = express();

const { config } = require('./config/index');

const moviesApi= require('./routes/movies.js');

const {
  logErrors,
  errorHandler,
  wrapError}
  = require('./utils/middlewares/errorHandlers.js');

const notFoundHandler=require('./utils/middlewares/notFoundHandler');

//body parser
app.use(express.json());
//routes
moviesApi(app)
//catch 404
app.use(notFoundHandler);
//errors middlewares
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});