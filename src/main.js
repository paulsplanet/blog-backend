require('dotenv').config();
import Koa from "koa";
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

const { PORT, MONGO_URI } = process.env;

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

mongoose
 .connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
      console.log("Conected to MongoDB");
  })
  .catch(e => {
      console.error(e)
  });      

const app = new Koa();
const router = new Router();

// set up router
router.use('/api', api.routes());

// apply bodyParser
app.use(bodyParser());
app.use(jwtMiddleware);

// apply router on app
app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;

app.listen(port, () => {
    console.log('Listening to port %d', port);
});