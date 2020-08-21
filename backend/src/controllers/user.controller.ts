import express, { Request, Response } from 'express';
import { db } from '../database';
import userDB from '../database/users.database';
import { compareSync } from 'bcrypt';
import { UserModel } from 'src/models/User';
import { cryptedResponse, decryptRequest } from 'src/util/cryptedConnection';
import { signToken, verifyToken } from 'src/token';
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
      .catch((error) => ({
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
          status: 'success getting all users',
          message: 'Se han obtenido todos los usuarios de la base de datos',
          data: usuarios,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess getting all users',
          message: `Ha ocurrido un error inesperado al obtener todos los usuarios`,
          data: error.message.toString(),
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
          status: 'success getting one user',
          message: `Se ha obtenido el usuario ${document}`,
          data: usuario,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess getting one user',
          message: 'signup.authError-body',
          data: error.message,
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
            ok: false,
            status: 500,
            message: 'signup.error-body',
            data: error.toString(),
          });
        });
    } else {
      return cryptedResponse(res, 400, {
        ok: false,
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
          status: 'success updating user',
          message: `Se ha actualizado el usuario ${user.document} correctamente`,
          data: usuario,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess updating user',
          message: `Ha ocurrido un error inesperado al actualizar al usuario ${document}`,
          data: error.toString(),
        })
      );
  }
  async deleteUser(req: Request, res: Response) {
    const { document } = req.params;
    await db
      .result(() => userDB.deleteUser(document))
      .then((user) =>
        cryptedResponse(res, 200, {
          ok: true,
          status: 'success deleting user',
          message: `Se ha eliminado al usuario ${document} correctamente`,
          data: user,
        })
      )
      .catch((error) =>
        cryptedResponse(res, 500, {
          ok: false,
          status: 'unsuccess deleting user',
          message: `Ha ocurrido un error inesperado al eliminar al usuario ${document}`,
          data: error.toString(),
        })
      );
  }
  async login(req: Request, res: Response) {
    const { document, password } = await decryptRequest(req);
    await db
      .one(() => userDB.getOneUser(document))
      .then((user: UserModel) => {
        const auth = compareSync(password, user.password);
        if (auth) {
          //expiresIn => One day
          const token = signToken({ id: user.document }, config.jwtSecret, {
            expiresIn: 86400,
          });
          cryptedResponse(res, 200, {
            ok: true,
            status: 200,
            message: 'Se ha autenticado correctamente',
            data: { token, user },
          });
        } else {
          cryptedResponse(res, 401, {
            ok: false,
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
  async validateUser(req: Request, res: Response) {
    const { token } = await decryptRequest(req);
    //const token = req.body;
    if (token) {
      try {
        const verify: any = verifyToken(token, config.jwtSecret);
        const { id } = verify;
        await db
          .one(() => userDB.getOneUser(id))
          .then((newuser: UserModel) => {
            const user = Object.assign({}, newuser);
            delete user.password;
            return cryptedResponse(res, 200, {
              ok: true,
              status: 200,
              message: 'login.authOk',
              data: { user },
            });
          })
          .catch((error) =>
            cryptedResponse(res, 500, {
              ok: false,
              status: 500,
              message: 'login.authError-body',
              data: error.message,
            })
          );
      } catch (error) {
        cryptedResponse(res, 401, {
          ok: false,
          status: 401,
          message: 'login.authError-body',
          data: error.message,
        });
      }
    } else {
      cryptedResponse(res, 500, {
        ok: false,
        status: 500,
        message: 'verify.not-found',
        data: null,
      });
    }
  }
}
