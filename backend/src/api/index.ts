import express, { urlencoded } from 'express';
import bodyParser from 'body-parser';

class Api {
  api = express.Router();
  constructor() {
    this.initialize();
  }
  private initialize() {
    this.api.use(bodyParser.json({ limit: '100mb' }));
    this.api.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
  }
}
