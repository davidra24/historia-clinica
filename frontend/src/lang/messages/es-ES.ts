import { LOCALES } from '../locales';

export default {
  [LOCALES.SPANISH]: {
    //APP
    '': '',
    'app.title': 'HISTORIA CLÍNICA DIGITAL',
    'app.not-server': 'No se ha encontrado el servidor',
    'app.loading': 'Cargando...',
    'app.start': 'Inicio',
    'app.profile': 'Perfil',
    'app.logout': 'Cerrar Sesión',
    'app.err-connect': 'Error al conectar con el servidor',
    'app.welcome': 'Bienvenido(a)',
    'app.welcomeM': 'Bienvenido',
    'app.welcomeF': 'Bienvenida',
    'app.welcomeO': 'Bienvenide',
    'app.success': '¡Éxitoso!',
    'app.error': '¡Error!',
    'app.nocomplete': 'No se ha podido completar la operación seleccionada',
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
    'signForm.verify-password': 'Repita su contraseña',
    'signForm.people': 'Persona',
    'signForm.healtCarecenter': 'IPS',
    'document.required': 'El documento es requerido',
    'document.invalid':
      'La longitud mínima del documento es de 6 dígitos y la máxima de 15 dígitos.',
    'password.required': 'La contraseña es requerida',
    'password.second-required': 'La confirmación de la contraseña es requerida',
    'password.no-match':
      'La contraseña no requiere con su verificación, por favor corrija',
    'password.invalid':
      'Se debe diligenciar el dato de la contraseña, con las siguientes recomendaciones: \n 1.Debe contener al menos 8 caracteres. \n 2. Contener mayúsculas y minúsculas. \n 3. Contener números. \n 4.Contener caracteres especiales.',
    //USERS
    'getUsers.success':
      'Se han obtenido todos los usuarios de la base de datos',
    'getUsers.error':
      'Ha ocurrido un error inesperado al obtener todos los usuarios',
    'getUser.success': 'Se ha obtenido el usuario',
    'updateUser.success': 'Se ha actualizado el usuario correctamente',
    'updateUser.error':
      'Ha ocurrido un error inesperado al actualizar al usuario',
    'deleteUser.success': 'Se ha eliminado al usuario correctamente',
    'deleteUser.error':
      'Ha ocurrido un error inesperado al eliminar al usuario',
    //ATTENTION CENTERS
    'getAttentionCenters.success':
      'Se han obtenido todos los centros de atencion de la base de datos',
    'getAttentionCenters.error':
      'Ha ocurrido un error inesperado al obtener todos los centros de atencion',
    'getAttentionCenter.success': 'Se ha obtenido el centro de atencion,',
    'getAttentionCenter.error':
      'Ha ocurrido un error inesperado al obtener el centro de atencion,',
    'insertAttentionCenter.success':
      'Se ha creado el centro de atencion correctamente',
    'insertAttentionCenter.error':
      'Ha ocurrido un error inesperado creando el centro de atencion',
    'updateAttentionCenter.success':
      'Se ha actualizado el centro de atencion, correctamente',
    'updateAttentionCenter.error':
      'Ha ocurrido un error inesperado al actualizar el centro de atencion,',
    'deleteAttentionCenter.success':
      'Se ha eliminado el centro de atencion, correctamente',
    'deleteAttentionCenter.error':
      'Ha ocurrido un error inesperado al eliminar el centro de atencion,',
    //CONTACTS
    'getContacts.success':
      'Se han obtenido todos los contactos de la base de datos',
    'getContacts.error':
      'Ha ocurrido un error inesperado al obtener todos los contactos',
    'getContact.success': 'Se ha obtenido el contacto',
    'getContact.error':
      'Ha ocurrido un error inesperado al obtener el contacto',
    'insertContact.success': 'Se han creado los contactos correctamente',
    'insertContact.error':
      'Ha ocurrido un error inesperado creando el contacto',
    'updateContact.success': 'Se ha actualizado el contacto correctamente',
    'updateContact.error':
      'Ha ocurrido un error inesperado al actualizar el contacto',
    'deleteContact.success': 'Se ha eliminado el contacto correctamente',
    'deleteContact.error':
      'Ha ocurrido un error inesperado al eliminar el contacto correctamente',
    //CONTACTS PERSON
    'getContactsPerson.success':
      'Se han obtenido todos los contactos de personas de la base de datos',
    'getContactsPerson.error':
      'Ha ocurrido un error inesperado al obtener todos los contactos de personas',
    'getContactPerson.success': 'Se ha obtenido el contacto de la persona',
    'getContactPerson.error':
      'Ha ocurrido un error inesperado al obtener el contacto de la persona',
    'insertContactPerson.success':
      'Se ha creado el contacto de la persona correctamente',
    'insertContactPerson.error':
      'Ha ocurrido un error inesperado creando el contacto y/o la persona',
    'updateContactPerson.success':
      'Se ha actualizado el contacto de la persona correctamente',
    'updateContactPerson.error':
      'Ha ocurrido un error inesperado al actualizar el contacto de la persona',
    'deleteContactPerson.success':
      'Se ha eliminado el contacto de la persona correctamente',
    'deleteContactPerson.error':
      'Ha ocurrido un error inesperado al eliminar el contacto de la persona correctamente',
    //EPS
    'getEPS.success': 'Se han obtenido todas las EPS de la base de datos',
    'getEPS.error': 'Ha ocurrido un error inesperado al obtener todas las EPS',
    'getOneEPS.success': 'Se ha obtenido la eps',
    'getOneEPS.error': 'Ha ocurrido un error inesperado al obtener la EPS',
    'insertEPStEPS.success': 'Se ha creado la EPS correctamente',
    'insertEPS.error': 'Ha ocurrido un error inesperado creando la EPS',
    'updateEPS.success': 'Se ha actualizado la EPS correctamente',
    'updateEPS.error': 'Ha ocurrido un error inesperado al actualizar la EPS',
    'deleteEPSEPS.success': 'Se ha eliminado la EPS correctamente',
    'deleteEPS.error':
      'Ha ocurrido un error inesperado al eliminar la EPS correctamente',
    //GENERAL MEDICAL FEATURES
    'getGeneralMedicalFeatures.success':
      'Se han obtenido todas las caracteristicas medicas generales de la base de datos',
    'getGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado al obtener todas las caracteristicas medicas generales',
    'getOneGeneralMedicalFeatures.success':
      'Se han obtenido las caracteristicas medicas generales',
    'getOneGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado al obtener las caracteristicas medicas generales',
    'insertGeneralMedicalFeatures.success':
      'Se han insertado las caracteristicas medicas generales correctamente',
    'insertGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado creando las caracteristicas medicas generales',
    'updateGeneralMedicalFeatures.success':
      'Se han actualizado las caracteristicas medicas generales correctamente',
    'updateGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado al actualizar las caracteristicas medicas generales ',
    'deleteGeneralMedicalFeatures.success':
      'Se han eliminado las caracteristicas medicas generales correctamente',
    'deleteGeneralMedicalFeatures.error':
      'Ha ocurrido un error inesperado al eliminar las caracteristicas medicas generales correctamente',
    //HEALTH CENTERS
    'getHealthCenters.success':
      'Se han obtenido todos los centros de salud de la base de datos',
    'getHealthCenters.error':
      'Ha ocurrido un error inesperado al obtener todos los centros de salud',
    'getHealthCenter.success': 'Se han obtenido el centro de salud',
    'getHealthCenter.error':
      'Ha ocurrido un error inesperado al obtener el centro de salud',
    'insertHealthCenter.success':
      'Se han creado el centro de salud correctamente',
    'insertHealthCenter.error':
      'Ha ocurrido un error inesperado creando el centro de salud',
    'updateHealthCenter.success':
      'Se han actualizado el centro de salud correctamente',
    'updateHealthCenter.error':
      'Ha ocurrido un error inesperado al actualizar el centro de salud',
    'deleteHealthCenter.success':
      'Se han eliminado el centro de salud correctamente',
    'deleteHealthCenter.error':
      'Ha ocurrido un error inesperado al eliminar el centro de salud correctamente',
    //PEOPLE
    'getPeople.get-Patient':
      'Se ha encontrado la información del paciente correctamente',
    'getPeople.err-get-Patient':
      'No se ha podido obtener la información del paciente o no existe en el sistema',
    'getPeople.success':
      'Se han obtenido todas las personas de la base de datos',
    'getPeople.error':
      'Ha ocurrido un error inesperado al obtener todas las personas',
    'getPerson.success': 'Se han obtenido la persona',
    'getPerson.error':
      'Ha ocurrido un error inesperado al obtener la información de la persona',
    'insertPerson.success': 'Se han creado la persona correctamente',
    'insertPerson.error': 'Ha ocurrido un error inesperado creando la persona',
    'updatePerson.success': 'Se han actualizado la persona correctamente',
    'updatePerson.error':
      'Ha ocurrido un error inesperado al actualizar la persona',
    'deletePerson.success': 'Se han eliminado la persona correctamente',
    'deletePerson.error':
      'Ha ocurrido un error inesperado al eliminar la persona correctamente',
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
    'updateProfession.success': 'Se ha actualizado la profesion correctamente',
    'updateProfession.error':
      'Ha ocurrido un error inesperado al actualizar la profesion',
    'deleteProfession.success': 'Se ha eliminado la profesion correctamente',
    'deleteProfession.error':
      'Ha ocurrido un error inesperado al eliminar la profesion correctamente',
    //QUERIES
    'getQueries.success':
      'Se han obtenido todas las consultas de la base de datos',
    'getQueries.error':
      'Ha ocurrido un error inesperado al obtener todas las consultas',
    'getQuery.success': 'Se ha obtenido la consulta',
    'getQuery.error': 'Ha ocurrido un error inesperado al obtener la consulta',
    'insertQuery.success': 'Se ha creado la consulta correctamente',
    'insertQuery.error': 'Ha ocurrido un error inesperado creando la consulta',
    'updateQuery.success': 'Se ha actualizado la consulta correctamente',
    'updateQuery.error':
      'Ha ocurrido un error inesperado al actualizar la consulta',
    'deleteQuery.success': 'Se ha eliminado la consulta correctamente',
    'deleteQuery.error':
      'Ha ocurrido un error inesperado al eliminar la consulta correctamente',
    //SPECIALTIES
    'getSpecialties.success':
      'Se han obtenido todas las especialidades de la base de datos',
    'getSpecialties.error':
      'Ha ocurrido un error inesperado al obtener todas las especialidades',
    'getSpecialty.success': 'Se ha obtenido la especialidad',
    'getSpecialty.error':
      'Ha ocurrido un error inesperado al obtener la especialidad',
    'insertSpecialty.success': 'Se ha creado la especialidad correctamente',
    'insertSpecialty.error':
      'Ha ocurrido un error inesperado creando la especialidad',
    'updateSpecialty.success':
      'Se ha actualizado la especialidad correctamente',
    'updateSpecialty.error':
      'Ha ocurrido un error inesperado al actualizar la especialidad',
    'deleteSpecialty.success': 'Se ha eliminado la especialidad correctamente',
    'deleteSpecialty.error':
      'Ha ocurrido un error inesperado al eliminar la especialidad correctamente',
    //Authotization
    'auth.noAuth': 'No está auorizado para realizar esta acción',
    //404
    'state.404': 'No hemos podido encontrar tu contenido 🙁',
    //Failed to fetch
    'state.failedToFetch':
      'No se ha podido acceder a los datos, revise su conexión a Internet',
    //Profile
    'profile.email': 'Correo electrónico',
    'profile.phone': 'Teléfono',
    'profile.genre': 'Género',
    'profile.civil-state': 'Estado civil',
    'profile.eps': 'EPS',
    'profile.stratum': 'Estrato',
    'profile.dateBirth': 'Fecha de nacimiento',
    'profile.profession': 'Profesión',
    'profile.website': 'Sitio web',
    'profile.direction': 'Dirección',
    'profile.description': 'Descripción',
    'profile.edit-button': 'Editar información',
    //Register person
    'register.person': 'Información Personal',
    'register.contact': 'Información de Contacto',
    'register.finalize': 'Previsualización de información',
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
    'register.form-profession': 'Profesión',
    'register.form-stratum': 'Estrato',
    'register.form-deceased': 'Fallecido',
    'register.form-deceasedDate': 'Fecha de fallecido',
    'register.form-isHealtCareTeam': 'Es profesional de la salud',
    //Required
    'register.form-firstName-required': 'El primer nombre es requerido',
    'register.form-lastName-required': 'El primer apellido es requerido',
    'register.form-genre-required': 'El género es requerido',
    'register.form-dateBirth-required':
      'El formato de fecha es inválido, debe ser dd/MM/yyyy',
    'register.form-civilState-required': 'El estado civil es requerido',
    'register.form-phone-required': 'El teléfono es requerido',
    'register.form-email-invalid': 'El formato de e-mail es inválido',
    'register.form-idEPS-required': 'La EPS es requerida',
    'register.form-nameContact-required': 'El nombre de contacto es requerido',
    'register.form-documentContact-table': 'Cédula',
    'register.form-nameContact-table': 'Nombre',
    'register.form-phonneContact-table': 'Teléfono',
    'register.form-documentContact': 'Cédula *',
    'register.form-nameContact': 'Nombre *',
    'register.form-phonneContact': 'Teléfono *',
    'register.form-emailContact': 'Correo electrónico',
    'register.form-directionContact': 'Dirección',
    'register.form-deleteContact': 'Quitar',
    'register.form-add': 'Agregar Contacto',
    'register.form-save': 'Guardar',
    'register.form-update': 'Actualizar',
    'register.form-next': 'Siguiente',
    'register.form-previous': 'Anterior',
    'register.form-back': 'Volver',
    'register.form-Select': 'Seleccione',
    'register.form-GenreM': 'Masculino',
    'register.form-GenreF': 'Femenino',
    'register.form-GenreO': 'Otro',
    'register.form-CivilStateS': 'Soltero(a)',
    'register.form-CivilStateC': 'Casado(a)',
    'register.form-CivilStateD': 'Divorciado(a)',
    'register.form-CivilStateV': 'Viudo(a)',
    'register.form-CivilStateU': 'Unión Libre',
    'register.form-errFetchEPS': 'Error al traer EPSs',
    'register.form-errFetchProfession': 'Error al traer Profesiones',
    'register.form-errTitle-noContact': 'Ingrese contactos',
    //Register Health Center
    'register-healthCenter': 'Registro del centro de salud',
    'update-healthCenter': 'Actualización del centro de salud',
    'register-form-nameCenter': 'Nombre *',
    'register-form-website': 'Sitio web',
    'register-form-phoneCenter': 'Telefono *',
    'register-form-directionCenter': 'Dirección *',
    'register-form-emailCenter': 'Email',
    'register-form-descriptionCenter': 'Información adicional',
    'register.form-name-center-required': 'Ingrese el nombre del centro medico',
    'register.form-direction-required':
      'Ingrese la direccion del centro medico',
    'register.form-errMsg-noContact':
      'No ha ingresado contactos, mínimo debe tener uno',
    'register.success-title': '¡Registro existoso!',
    'register.error-title': '¡Ups, Error de registro!',
    'register.error-titleContact': '¡Ups, Error de contacto!',
    'register.error-msgContact': 'Sólo se permiten 3 contactos por persona',
    //DASHBOARD - PATIENT
    'dashboard-patient.specialties': 'Especialidades',
    'dashboard-patient.specialties-description':
      'A continuación encontrará todas las especialidades disponibles en la plataforma, de tal forma que podrá consultar su evolución, hallazgos y procedimientos médicos en cada una de estas tarjetas, haga click en alguna para conocer su historia clínica.',
    'dashboard-patient.specialties-description-end':
      'Y recuerde su estado de salud es nuestra prioridad.',
    //DASHBOARD - PROFESSIONAL
    'dashboard-professional.specialties': 'Especialidades',
    'dashboard-professional.specialties-description':
      'A continuación encontrará las diferentes especialidades del(los) centro(s) de salud donde se encuentra habilitado para desempeñarse, de tal forma que pueda atender a un paciente ahora mismo y ayudarnos a mejorar este gran mundo de la atención y el cuidado de la salud.',
    'dashboard-professional.specialties-description-end':
      'Y recuerde su ética profesional es nuestra prioridad.',
    'dashboard-professional.no-specialties':
      'En el momento no existen registros de especialidades que requieran de su atención.',
    'dashboard-health.no-specialties':
      'En el momento no existen registros de especialidades y profesionales en su unidad médica.',
    'dashboard-professional.title-consult': 'Consulta de paciente',
    'dashboard-professional.title-info': 'Información de paciente',
    'dashboard-professional.patient-document': 'Documento de paciente',
    'dashboard-professional.patient-consult': 'Consultar paciente',
    'dashboard-professional.patient-consult-document': 'Documento de paciente:',
    'dashboard-professional.patient-consult-name': 'Nombre de paciente:',
    'dashboard-professional.patient-consult-genre': 'Genero de paciente:',
    'dashboard-professional.patient-consult-birth': 'Edad de paciente: ',
    'dashboard-professional.patient-consult-birth-age': 'años',
    'dashboard-professional.patient-general-consultation':
      'INFORMACIÓN MÉDICA GENERAL',
    'dashboard-professional.patient-specialty-history':
      'HISTORIAL DE EVOLUCIÓN',
    'dashboard-professional.patient-specialty-consultation': 'AÑADIR EVOLUCIÓN',
    'dashboard-professional.selection':
      'Sabemos que así como eres un profesional de la salud, también eres paciente en ocasiones, ¡tranquilo! nosotros te dejamos ver tu evolución y estado de salud, cuéntanos, ¿qué rol quieres cumplir hoy?',
    'dashboard-professional.select-patient': 'Paciente consultando',
    'dashboard-professional.select-prof': 'Profesional de la salud',
    //DASHBOARD - HEALTHCENTER
    'dashboard-health.professional': 'Los profesionales de la salud',
    'dashboard-health.professional-description':
      'A continuación encontrará un breve formulario, que le ayudará a asignar los profesionales de la salud a la especialidad en la que se desempeñan en su unidad, de tal forma que puedan atender a sus pacientes de forma rápida y efectiva.',
    'dashboard-health.professional-description-end':
      'Y recuerde facilitar su labor es nuestra prioridad.',
    'dashboard-health.add-professional': 'Agregar profesional',
    'dashboard-health.professional-document': 'Documento de profesional',
    'dashboard-health.specialties-array': 'Especialidad de profesional',
    'dashboard-health.professional-required':
      'El documento del profesional a agregar es requerido',
    'dashboard-health.specialties-required':
      'La especialidad para asignar al profesional es requerida',
    'dashboard-patient.no-specialties':
      'En el momento no existen registros de especialidades para ser atendido.',
    'dashboard-health.name-professional': 'Nombre de profesional',
    'dashboard-health.specialty-professional': 'Especialidad de profesional',
    'dashboard-health.phone-professional': 'Teléfono de profesional',
    'dashboard-health.enabled-professional': 'Profesional habilitado en centro',
    'dashboard-health.professional-openAnotation': 'Abrir anotación',
    'dashboard-health.professional-history':
      'A continuación encontrará el historial completo de anotaciones de paciente, para conocer, de esta forma podrá conocer la evolución que ha tenido el proceso del paciente',
    'dashboard-health.professional-no-history':
      'Hasta el día de hoy, no se han realizado anotaciones en esta especialidad',
    'dashboard-health.success-title': 'Consulta existosa',
    'dashboard-health.error-title': 'Fallo al consultar profesional',
    //Evolution
    'evolution.generalfeature-height': 'Altura',
    'evolution.generalfeature-weight': 'Peso',
    'evolution.generalfeature-drink': 'Bebe',
    'evolution.generalfeature-smokes': 'Fuma',
    'evolution.generalfeature-vices': 'Vicios',
    'evolution.generalfeature-manias': 'Manías',
    'evolution.anotation-add': 'Agregar anotación',
    'evolution.generalfeature-family-background': 'Antecedentes familiares',
    'evolution.generalfeature-medical': 'Antecedentes médicos',
    'evolution.generalfeature-quirurjical': 'Antecedentes médicos',
    'evolution.generalfeature-traimatic_background': 'Antecedentes traumáticos',
    'evolution.generalfeature-allergy-history': 'Antecedentes alérgicos',
    'evolution.generalfeature-save-or-update': 'Guardar',
    'infoProfessional.assign-specialty': 'Asignar a especialidad',
    'infoProfessional.assign-what-specialty': 'Asignar a: ',
  },
};
