import promise from 'bluebird';
import pgPromise from 'pg-promise';
import { Client } from 'pg';
import { Request, Response, NextFunction } from 'express';
import UserController from '../controllers/Users';

const options = {
  promiseLib: promise,
};
const pgp = pgPromise(options);
const connectionString = `${process.env.DATABASE_URL}?ssl=true`;

const database = pgp(connectionString);
//client.connect();

export default {
  createTableUsers: (req: Request, res: Response, next: NextFunction) => {
    database
      .any(UserController.createTable)
      .then((response) => {
        res.send(response);
      })
      .catch((err) => next(err));
  },
};
