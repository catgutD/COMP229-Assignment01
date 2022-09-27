//server.js Cathy Da 301177731 Sept 26

//third-party modules
import express from 'express';
import logger from 'morgan';
import session from 'express-session';

//__dirname fix
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//import routes
import indexRouter from './app/routes/index.route.server.js'

//config module

//instantiate express application
const app = express();

app.use('/', indexRouter)

app.listen(3000);