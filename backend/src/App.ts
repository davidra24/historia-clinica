import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import logger from './shared/Logger';
import cors from 'cors';
import { BAD_REQUEST } from 'http-status-codes';
import 'express-async-errors';
import { api } from './routes/api';
import passport from 'passport';
import { passportMiddleware } from './middlewares/passport';

// Init express
const app = express();
//pm2 start npm -- start
/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
passport.use(passportMiddleware);

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
}

// Add APIs
//app.use('/api', BaseRouter);

// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message, err);
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/
/*
const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));
app.get('*', (req: Request, res: Response) => {
    res.sendFile('index.html', {root: viewsDir});
});*/

// Export express instance

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.use('/api', api);

export default app;
