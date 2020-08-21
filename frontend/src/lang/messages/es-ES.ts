import { LOCALES } from '../locales';

export default {
  [LOCALES.SPANISH]: {
    //APP
    'app.title': 'HISTORIA CLÍNICA DIGITAL',
    'app.not-server': 'No se ha encontrado el servidor',
    'app.start': 'Inicio',
    'app.loading': 'Cargando...',
    'app.logout': 'Cerrar Sesión',
    //LANGUAGE
    'lang.selectedLang': 'Idioma',
    'lang.spanish': 'Español',
    'lang.english': 'Inglés',
    //LOGIN
    'login.title': 'Iniciar Sesión',
    'login.signup': 'Registrarse',
    'login.signin': 'Iniciar sesión',
    'login.authError-title': 'Autenticación',
    'login.authError-body':
      'No se ha podido autenticar correctamente, usuario no existente',
    'login.authError-noauth':
      'No se ha podido autenticar correctamente, usuario o contraseña erroneos',
    'login.authOk': 'Devuelve token y usuario',
    //SIGN UP
    'signup.title': 'Registrarse',
    'signup.back': 'Volver',
    'signup.signup': 'Registrarse',
    'signup.authError-title': 'Error de registro ',
    'signup.authError-body':
      'Ha ocurrido un error inesperado al obtener al usuario',
    'signup.success-title': 'Registro exitoso ',
    'signup.success-body': 'Se ha creado el usuario correctamente',
    'signup.error-body':
      'Ha ocurrido un error inesperado al insertar al usuario',
    'signup.error-existent':
      'El usuario ya existe en la base de datos, inicie sesión en su lugar',
    //SIGNFORM
    'signForm.document': 'Documento',
    'signForm.password': 'Contraseña',
    'signForm.people': 'Persona',
    'signForm.healtCarecenter': 'IPS',
    'document.required': 'El documento es requerido',
    'document.invalid':
      'La longitud mínima del documento es de 6 dígitos y la máxima de 15 dígitos.',
    'password.required': 'La contraseña es requerida es requerida',
    'password.invalid':
      'Se debe diligenciar el dato de la contraseña, con las siguientes recomendaciones: \n 1.Debe contener al menos 8 caracteres. \n 2. Contener mayúsculas y minúsculas. \n 3. Contener números. \n 4.Contener caracteres especiales.',
    //Authotization
    'auth.noAuth': 'No está auorizado para realizar esta acción',
    //404
    'state.404': 'No hemos podido encontrar tu contenido 🙁',
    //Failed to fetch
    'state.failedToFetch':
      'No se ha podido acceder a los datos, revise su conexión a Internet',
    //Register
    'register.person': 'Complete el registro',
    'register.form-firstName': 'Primer nombre *',
    'register.form-secondName': 'Segundo nombre',
    'register.form-lastName': 'Primer apellido *',
    'register.form-lastSecondName': 'Segundo apellido',
    'register.form-genre': 'Género *',
    'register.form-dateBirth': 'Fecha de nacimiento *',
    'register.form-email': 'Correo electrónico',
    'register.form-civilState': 'Estado civil *',
    'register.form-photo': 'Subir fotografía',
    'register.form-phone': 'Teléfono *',
    'register.form-idEPS': 'EPS *',
    'register.form-idProfesion': 'Profesión',
    'register.form-stratum': 'Estrato',
    'register.form-deceased': 'Fallecido',
    'register.form-deceasedDate': 'Fecha de fallecido',
    'register.form-isHealtCareTeam': 'Es profesional de la salud',
    //Required
    'register.form-firstName-required': 'El primer nombre es requerido',
    'register.form-lastName-required': 'El primer apellido es requerido',
    'register.form-genre-required': 'El género es requerido',
    'register.form-dateBirth-required': 'La Fecha de nacimiento es requerida',
    'register.form-civilState-required': 'El estado civil es requerido',
    'register.form-phone-required': 'El teléfono es requerido',
    'register.form-idEPS-required': 'La EPS es requerida',
    'register.form-save': 'Guardar',
    'register.form-Select': 'Seleccione',
    'register.form-GenreM': 'Masculino',
    'register.form-GenreF': 'Femenino',
    'register.form-GenreO': 'Otro',
  },
};

/**
 * hello: 'Hola',
    hi: 'Yo soy {valueHi} y que bien conocerte',
 */
