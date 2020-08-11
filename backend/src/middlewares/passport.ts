import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import config from '../config';
import { db } from '../database';
import userDB from '../database/users.database';
import { UserModel } from 'src/models/User';
import { authenticate } from 'passport';
import { Request, Response, NextFunction } from 'express';
import { cryptedResponse } from 'src/util/cryptedConnection';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret,
};

export const passportMiddleware = new Strategy(
  options,
  async (payload, done) => {
    try {
      const user: UserModel = await db.one(() => userDB.getOneUser(payload.id));
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    } catch (error) {
      console.log(error);
      return done(null, false);
    }
  }
);

export const auth = (req: Request, res: Response, next: NextFunction) => {
  authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      return cryptedResponse(res, 401, {
        ok: true,
        status: 'unsuccess loggining user',
        message: 'auth.noAuth',
        data: info,
      });
    }
    return next();
  })(req, res, next);
};
