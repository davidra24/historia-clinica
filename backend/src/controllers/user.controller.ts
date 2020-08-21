import express, { Request, Response } from 'express';
import { db } from '../database';
import userDB from '../database/users.database';
import { compareSync } from 'bcrypt';
import { UserModel } from 'src/models/User';
import { cryptedResponse, decryptRequest } from 'src/util/cryptedConnection';
import { signToken } from 'src/token';
import config from '../config';

export class UserController {
  app = express();
  constructor() {
    this.createTable();
  }
  async createTable() {
    await db
      .none(userDB.createTable)
      .then(() => ({
        ok: true,
        status: 'success creating table',
        message: 'User table created',
        data: null,
      }))
      .catch((error: any) => ({
        ok: false,
        status: 'unsuccess creating table',
        message: error,
        data: null,
      }));
  }
  async getUsers(req: Request, res: Response) {
    await db
      .any(userDB.getAllUsers)
      .then((usuarios) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getUsers.success',
          data: usuarios,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'getUsers.error',
          data: error.toString(),
        })
      );
  }
  async getOneuser(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .one(() => userDB.getOneUser(document))
      .then((usuario) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'getUser.success',
          data: usuario,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'signup.authError-body',
          data: error.toString(),
        })
      );
  }
  async insertUser(req: Request, res: Response) {
    const { user } = await decryptRequest(req);
    const userExist = await db.oneOrNone(userDB.getOneUser(user.document));
    if (!userExist) {
      await db
        .none(() => userDB.insertUser(user))
        .then((usuarios) =>
          cryptedResponse(res, 200, {
            ok: true,
            status: 200,
            message: 'signup.success-body',
            data: usuarios,
          })
        )
        .catch((error) => {
          cryptedResponse(res, 500, {
            ok: true,
            status: 500,
            message: 'signup.error-body',
            data: error.toString(),
          });
        });
    } else {
      return cryptedResponse(res, 400, {
        ok: true,
        status: 400,
        message: 'signup.error-existent',
        data: null,
      });
    }
  }
  async updateUser(req: Request, res: Response) {
    const { document } = req.params;
    const { user } = await decryptRequest(req);
    await db
      .none(() => userDB.updateUser(document, user))
      .then((usuario) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 200,
          message: 'updateUser.success',
          data: usuario,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'updateUser.error',
          data: error.toString(),
        })
      );
  }
  async deleteUser(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .result(() => userDB.deleteUser(document))
      .then((usuario) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success deleting user',
          message: 'deleteUser.success',
          data: usuario,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess deleting user',
          message: 'deleteUser.error',
          data: error.toString(),
        })
      );
  }
  async login(req: Request, res: Response) {
    const { document, password } = await decryptRequest(req);
    await db
      .one(() => userDB.getOneUser(document))
      .then((usuario: UserModel) => {
        const auth = compareSync(password, usuario.password);
        if (auth) {
          //expiresIn => One day
          const token = signToken({ id: usuario.document }, config.jwtSecret, {
            expiresIn: 86400,
          });
          cryptedResponse(res, 200, {
            ok: true,
            status: 200,
            message: 'Se ha autenticado correctamente',
            data: { token },
          });
        } else {
          cryptedResponse(res, 401, {
            ok: true,
            status: 401,
            message: 'login.authError-noauth',
            data: null,
          });
        }
      })
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 500,
          message: 'login.authError-body',
          data: error.toString(),
        })
      );
  }
}
