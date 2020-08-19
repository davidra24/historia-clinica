import { LOCALES } from '../locales';

export default {
  [LOCALES.SPANISH]: {
    //APP
    'app.title': 'HISTORIA CLÍNICA DIGITAL',
    //LANGUAGE
    'lang.selectedLang': 'Idioma',
    'lang.spanish': 'Español',
    'lang.english': 'Inglés',
    //LOGIN
    'login.title': 'Iniciar Sesión',
    'login.signup': 'Registrarse',
    'login.signin': 'Iniciar sesión',
    'login.authError-title': 'Autenticación: ',
    'login.authError-body':
      'No se ha podido autenticar correctamente, usuario no existente',
    'login.authError-noauth':
      'No se ha podido autenticar correctamente, usuario o contraseña erroeos',
    //SIGN UP
    'signup.title': 'Registrarse',
    'signup.back': 'Volver',
    'signup.signup': 'Registrarse',
    'signup.authError-title': 'Registro: ',
    'signup.authError-body':
      'Ha ocurrido un error inesperado al obtener al usuario {document}',
    'signup.success-title': '',
    'signup.success-body': 'Se ha creado el usuario {document} correctamente',
    'signup.error-body':
      'Ha ocurrido un error inesperado al insertar al usuario {document}',
    'signup.error-existent':
      'El usuario ya existe en la base de datos, inicie sesión en su lugar',
    //SIGNFORM
    'signForm.document': 'Documento',
    'signForm.password': 'Contraseña',
    'signForm.people': 'Persona',
    'signForm.healtCarecenter': 'IPS',
    'document.required': 'El documento es requerido',
    'password.required': 'La contraseña es requerida es requerida',
    'password.invalid':
      'La contraseña no tiene el formato correcto, mínimo 8 caracteres, 1 caracter especial, 1 letra mayúscula, 1 minúscula y 1 número',
    //Authotization
    'auth.noAuth': 'No está auorizado para realizar esta acción',
    //404
    'state.404': 'No hemos podido encontrar tu contenido 🙁',
    //Failed to fetch
    'state.failedToFetch':
      'No se ha podido acceder a los datos, revise su conexión a Internet',
  },
};

/**
 * hello: 'Hola',
    hi: 'Yo soy {valueHi} y que bien conocerte',
 */
