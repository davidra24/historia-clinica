import promise from 'bluebird';
import pgPromise from 'pg-promise';

export class Database {
  private static database: Database;
  private options: object;
  private pgp: pgPromise.IMain<{}, any>;
  private connectionString: string;
  private db: pgPromise.IMain;

  private constructor() {
    dotEnv();
    this.options = { promiseLib: promise };
    this.pgp = pgPromise(this.options);
    this.connectionString = `${process.env.DATABASE_URL}?ssl=true`;
    this.db = this.pgp(this.connectionString);
  }

  public static getInstance() {
    if (Database.database === null) {
      Database.database = new Database();
    }
    return Database.database;
  }
}

function dotEnv() {
  if (require('dotenv/config')) {
    return require('dotenv/config');
  }
}
