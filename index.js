const express = require('express');
const helmet=require('helmet')
const app = express();
const cors = require('cors')
const { config } = require('./config/index');

const authApi=require('./routes/auth');
const moviesApi= require('./routes/movies.js');
const userMoviesApi=require('./routes/userMovies.js');

const {
  logErrors,
  errorHandler,
  wrapError}
  = require('./utils/middlewares/errorHandlers.js');

const notFoundHandler=require('./utils/middlewares/notFoundHandler');

//body parser
app.use(express.json());
app.use(helmet());
app.use(cors())
//routes
authApi(app);
moviesApi(app);
userMoviesApi(app);
//catch 404
app.use(notFoundHandler);
//errors middlewares
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});



//vercel production https://movies-api-ten-bice.vercel.app/api/movies
