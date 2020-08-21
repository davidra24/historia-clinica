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
    //USERS
    'getUsers.success':
      'Se han obtenido todos los usuarios de la base de datos',
    'getUsers.error':
      'Ha ocurrido un error inesperado al obtener todos los usuarios',
    'getUser.success': 'Se ha obtenido el usuario {document}',
    'updateUser.success':
      'Se ha actualizado el usuario {user.document} correctamente',
    'updateUser.error':
      'Ha ocurrido un error inesperado al actualizar al usuario {document}',
    'deleteUser.success': 'Se ha eliminado al usuario {document} correctamente',
    'deleteUser.error':
      'Ha ocurrido un error inesperado al eliminar al usuario {document}',
    //ATTENTION CENTERS
    'getAttentionCenters.success':
      'Se han obtenido todos los centros de atencion de la base de datos',
    'getAttentionCenters.error':
      'Ha ocurrido un error inesperado al obtener todos los centros de atencion',
    'getAttentionCenter.success':
      'Se ha obtenido el centro de atencion {id}, {document}',
    'getAttentionCenter.error':
      'Ha ocurrido un error inesperado al obtener el centro de atencion {id}, {document}',
    'insertAttentionCenter.success':
      'Se ha creado el centro de atencion {attentionCenter.id}, {attentionCenter.document} correctamente',
    'insertAttentionCenter.error':
      'Ha ocurrido un error inesperado creando el centro de atencion {attentionCenter.id}, {attentionCenter.document}',
    'updateAttentionCenter.success':
      'Se ha actualizado el centro de atencion {idCenter}, {document} correctamente',
    'updateAttentionCenter.error':
      'Ha ocurrido un error inesperado al actualizar el centro de atencion {idCenter}, {document}',
    'deleteAttentionCenter.success':
      'Se ha eliminado el centro de atencion {id}, {document} correctamente',
    'deleteAttentionCenter.error':
      'Ha ocurrido un error inesperado al eliminar el centro de atencion {id}, {document}',
    //CONTACTS
    'getContacts.success':
      'Se han obtenido todos los contactos de la base de datos',
    'getContacts.error':
      'Ha ocurrido un error inesperado al obtener todos los contactos',
    'getContact.success': 'Se ha obtenido el contacto {document}',
    'getContact.error':
      'Ha ocurrido un error inesperado al obtener el contacto {document}',
    'insertContact.success':
      'Se ha creado el contacto {contact.document} correctamente',
    'insertContact.error':
      'Ha ocurrido un error inesperado creando el contacto {contact.document}',
    'updateContact.success':
      'Se ha actualizado el contacto {contact.document} correctamente',
    'updateContact.error':
      'Ha ocurrido un error inesperado al actualizar el contacto {document}',
    'deleteContact.success':
      'Se ha eliminado el contacto {document} correctamente',
    'deleteContact.error':
      'Ha ocurrido un error inesperado al eliminar el contacto {document} correctamente',
    //CONTACTS PERSON
    'getContactsPerson.success':
      'Se han obtenido todos los contactos de personas de la base de datos',
    'getContactsPerson.error':
      'Ha ocurrido un error inesperado al obtener todos los contactos de personas',
    'getContactPerson.success':
      'Se ha obtenido el contacto {contactDocument} de la persona {userDocument}',
    'getContactPerson.error':
      'Ha ocurrido un error inesperado al obtener el contacto {contactDocument} de la persona {userDocument}',
    'insertContactPerson.success':
      'Se ha creado el contacto {contactPerson.contactDocument} de la persona {contactPerson.userDocument} correctamente',
    'insertContactPerson.error':
      'Ha ocurrido un error inesperado creando el contacto {contactPerson.contactDocument} y/o la persona {contactPerson.userDocument}',
    'updateContactPerson.success':
      'Se ha actualizado el contacto {contactPerson.contactDocument} de la persona {contactPerson.userDocument} correctamente',
    'updateContactPerson.error':
      'Ha ocurrido un error inesperado al actualizar el contacto {contactDocument} de la persona {userDocument}',
    'deleteContactPerson.success':
      'Se ha eliminado el contacto {contactDocument} de la persona {userDocument} correctamente',
    'deleteContactPerson.error':
      'Ha ocurrido un error inesperado al eliminar el contacto {contactDocument} de la persona {userDocument} correctamente',
    //EPS
    'getEPS.success': 'Se han obtenido todas las EPS de la base de datos',
    'getEPS.error': 'Ha ocurrido un error inesperado al obtener todas las EPS',
    'getOneEPS.success': 'Se ha obtenido la eps {id}',
    'getOneEPS.error': 'Ha ocurrido un error inesperado al obtener la EPS {id}',
    'insertEPStEPS.success': 'Se ha creado la EPS correctamente',
    'insertEPS.error': 'Ha ocurrido un error inesperado creando la EPS',
    'updateEPS.success': 'Se ha actualizado la EPS {EPS.id} correctamente',
    'updateEPS.error':
      'Ha ocurrido un error inesperado al actualizar la EPS {id}',
    'deleteEPSEPS.success': 'Se ha eliminado la EPS {id} correctamente',
    'deleteEPS.error':
      'Ha ocurrido un error inesperado al eliminar la EPS {id} correctamente',
    //GENERAL MEDICAL FEATURES
    'getGeneralMedicalFeatures.success':
      'Se han obtenido todas las caracteristicas medicas generales de la base de datos',
    'getGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado al obtener todas las caracteristicas medicas generales',
    'getOneGeneralMedicalFeatures.success':
      'Se han obtenido las caracteristicas medicas generales {id}',
    'getOneGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado al obtener las caracteristicas medicas generales {id}',
    'insertGeneralMedicalFeatures.success':
      'Se han creado las caracteristicas medicas generales {generalMedicalFeatures.id} correctamente',
    'insertGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado creando las caracteristicas medicas generales {generalMedicalFeatures.id}',
    'updateGeneralMedicalFeatures.success':
      'Se han actualizado las caracteristicas medicas generales {generalMedicalFeatures.id} correctamente',
    'updateGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado al actualizar las caracteristicas medicas generales ${id}',
    'deleteGeneralMedicalFeatures.success':
      'Se han eliminado las caracteristicas medicas generales {id} correctamente',
    'deleteGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado al eliminar las caracteristicas medicas generales {id} correctamente',
    //HEALTH CENTERS
    'getHealthCenters.success':
      'Se han obtenido todos los centros de salud de la base de datos',
    'getHealthCenters.error':
      'Ha ocurrido un error inesperado al obtener todos los centros de salud',
    'getHealthCenter.success': 'Se han obtenido el centro de salud {idCenter}',
    'getHealthCenter.error':
      'Ha ocurrido un error inesperado al obtener el centro de salud {idCenter}',
    'insertHealthCenter.success':
      'Se han creado el centro de salud {healthCenter.idCenter} correctamente',
    'insertHealthCenter.error':
      'Ha ocurrido un error inesperado creando el centro de salud ${healthCenter.idCenter}',
    'updateHealthCenter.success':
      'Se han actualizado el centro de salud {healthCenter.idCenter} correctamente',
    'updateHealthCenter.error':
      'Ha ocurrido un error inesperado al actualizar el centro de salud {idCenter}',
    'deleteHealthCenter.success':
      'Se han eliminado el centro de salud {idCenter} correctamente',
    'deleteHealthCenter.error':
      'Ha ocurrido un error inesperado al eliminar el centro de salud {idCenter} correctamente',
    //PEOPLE
    'getPeople.success':
      'Se han obtenido todas las personas de la base de datos',
    'getPeople.error':
      'Ha ocurrido un error inesperado al obtener todas las personas',
    'getPerson.success': 'Se han obtenido la persona {document}',
    'getPerson.error':
      'Ha ocurrido un error inesperado al obtener la persona {document}',
    'insertPerson.success':
      'Se han creado la persona {person.document} correctamente',
    'insertPerson.error':
      'Ha ocurrido un error inesperado creando la persona {person.document}',
    'updatePerson.success':
      'Se han actualizado la persona {person.document} correctamente',
    'updatePerson.error':
      'Ha ocurrido un error inesperado al actualizar la persona {document}',
    'deletePerson.success':
      'Se han eliminado la persona {document} correctamente',
    'deletePerson.error':
      'Ha ocurrido un error inesperado al eliminar la persona {document} correctamente',
    //PROFESSIONS
    'getProfessions.success':
      'Se han obtenido todas las profesiones de la base de datos',
    'getProfessions.error':
      'Ha ocurrido un error inesperado al obtener todas las profesiones',
    'getProfession.success': 'Se ha obtenido la profesion',
    'getProfession.error':
      'Ha ocurrido un error inesperado al obtener la profesion',
    'insertProfession.success': 'Se ha creado la profesion correctamente',
    'insertProfession.error':
      'Ha ocurrido un error inesperado creando la profesion',
    'updateProfession.success':
      'Se ha actualizado la profesion {profession.id} correctamente',
    'updateProfession.error':
      'Ha ocurrido un error inesperado al actualizar la profesion {id}',
    'deleteProfession.success':
      'Se ha eliminado la profesion {id} correctamente',
    'deleteProfession.error':
      'Ha ocurrido un error inesperado al eliminar la profesion {id} correctamente',
    //QUERIES
    'getQueries.success':
      'Se han obtenido todas las consultas de la base de datos',
    'getQueries.error':
      'Ha ocurrido un error inesperado al obtener todas las consultas',
    'getQuery.success': 'Se ha obtenido la consulta {id}',
    'getQuery.error':
      'Ha ocurrido un error inesperado al obtener la consulta {id}',
    'insertQuery.success': 'Se ha creado la consulta correctamente',
    'insertQuery.error': 'Ha ocurrido un error inesperado creando la consulta',
    'updateQuery.success':
      'Se ha actualizado la consulta {query.id} correctamente',
    'updateQuery.error':
      'Ha ocurrido un error inesperado al actualizar la consulta {id}',
    'deleteQuery.success': 'Se ha eliminado la consulta {id} correctamente',
    'deleteQuery.error':
      'Ha ocurrido un error inesperado al eliminar la consulta {id} correctamente',
    //SPECIALTIES
    'getSpecialties.success':
      'Se han obtenido todas las especialidades de la base de datos',
    'getSpecialties.error':
      'Ha ocurrido un error inesperado al obtener todas las especialidades',
    'getSpecialty.success': 'Se ha obtenido la especialidad {id}',
    'getSpecialty.error':
      'Ha ocurrido un error inesperado al obtener la especialidad {id}',
    'insertSpecialty.success': 'Se ha creado la especialidad correctamente',
    'insertSpecialty.error':
      'Ha ocurrido un error inesperado creando la especialidad',
    'updateSpecialty.success':
      'Se ha actualizado la especialidad {specialty.id} correctamente',
    'updateSpecialty.error':
      'Ha ocurrido un error inesperado al actualizar la especialidad {id}',
    'deleteSpecialty.success':
      'Se ha eliminado la especialidad {id} correctamente',
    'deleteSpecialty.error':
      'Ha ocurrido un error inesperado al eliminar la especialidad {id} correctamente',
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
