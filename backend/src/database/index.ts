import promise from 'bluebird';
import pgPromise from 'pg-promise';
import config from '../config';
import { UserController } from '../controllers/user.controller';

const options = {
  promiseLib: promise,
};
const pgp = pgPromise(options);
const connectionString = config.DB;

export const db = pgp(connectionString);
