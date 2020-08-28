import { LOCALES } from '../locales';

export default {
  [LOCALES.ENGLISH]: {
    //APP
    '': '',
    'app.title': 'DIGITAL CLINICAL HISTORY',
    'app.not-server': 'Server not found',
    'app.loading': 'Loading...',
    'app.start': 'Home',
    'app.profile': 'Profile',
    'app.logout': 'sign out',
    'app.err-connect': 'Failed to connect to server',
    'app.welcome': 'Welcome',
    'app.welcomeM': 'Welcome',
    'app.welcomeF': 'Welcome',
    'app.welcomeO': 'Welcome',
    'app.success': 'Succesfull!',
    'app.error': 'Error!',
    'app.nocomplete': 'The selected operation could not be completed',
    //LANGUAGE
    'lang.selectedLang': 'Language',
    'lang.spanish': 'Spanish',
    'lang.english': 'English',
    //LOGIN
    'login.title': 'Login',
    'login.document': 'Document',
    'login.signup': 'Sign up',
    'login.signin': 'Login',
    'login.authError-title': 'authentication: ',
    'login.authError-body':
      'Failed to authenticate successfully, user does not exist',
    'login.authError-noauth':
      'Failed to authenticate successfully, wrong user or password',
    'login.authOk': 'Returns token and user',
    //SIGN UP
    'signup.title': 'Sign up',
    'signup.back': 'Back',
    'signup.signup': 'Sign up',
    'signup.authError-title': 'Register: ',
    'signup.authError-body':
      'An unexpected error occurred while getting the user',
    'signup.success-title': 'User created',
    'signup.success-body': 'User created successfully',
    'signup.error-body':
      'An unexpected error occurred while inserting the user',
    'signup.error-existent': 'The user already exists in the database, login',
    //SIGNFORM
    'signForm.document': 'Document',
    'signForm.password': 'Password',
    'signForm.verify-password': 'Repeat your password',
    'signForm.people': 'Person',
    'signForm.healtCarecenter': 'IPS',
    'document.required': 'The document is required',
    'password.required': 'The password is required',
    'password.invalid':
      'The password does not have the right format, minimum 8 characters, 1 special caracter, 1 capital letter, 1 lowercase letter and 1 number',
    'document.invalid':
      'The minimum document length is 6 digits and the maximum 15 digits.',
    'password.no-match':
      'Password is not required with your verification, please correct it.',
    //USERS
    'getUsers.success': 'All users of the database have been obtained',
    'getUsers.error': 'An unexpected error occurred while getting all users',
    'getUser.success': 'User has been obtained',
    'updateUser.success': 'User has been updated successfully',
    'updateUser.error': 'An unexpected error occurred while updating the user',
    'deleteUser.success': 'User has been deleted successfully',
    'deleteUser.error': 'An unexpected error occurred while deleting the user',
    //ATTENTION CENTERS
    'getAttentionCenters.success':
      'All attention centers of the database have been obtained',
    'getAttentionCenters.error':
      'An unexpected error occurred while getting all attention centers',
    'getAttentionCenter.success': 'Attention center, has been obtained',
    'getAttentionCenter.error':
      'An unexpected error occurred while getting the attention center,',
    'insertAttentionCenter.success':
      'Attention center has been created successfully',
    'insertAttentionCenter.error':
      'An unexpected error occurred while creating the attention center',
    'updateAttentionCenter.success':
      'Attention center, has been updated successfully',
    'updateAttentionCenter.error':
      'An unexpected error occurred while updating the attention center,',
    'deleteAttentionCenter.success':
      'Attention center, has been deleted successfully',
    'deleteAttentionCenter.error':
      'An unexpected error occurred while deleting the attention center,',
    //CONTACTS
    'getContacts.success': 'All contacts of the database have been obtained',
    'getContacts.error':
      'An unexpected error occurred while getting all contacts',
    'getContact.success': 'Contact has been obtained',
    'getContact.error':
      'An unexpected error occurred while getting the contact',
    'insertContact.success': 'Contact has been created successfully',
    'insertContact.error':
      'An unexpected error occurred while creating the contact',
    'updateContact.success': 'Contact has been updated successfully',
    'updateContact.error':
      'An unexpected error occurred while updating the contact',
    'deleteContact.success': 'Contact has been deleted successfully',
    'deleteContact.error':
      'An unexpected error occurred while deleting the contact ',
    //CONTACTS PERSON
    'getContactsPerson.success':
      'All contacts of the people of the database have been obtained',
    'getContactsPerson.error':
      'An unexpected error occurred while getting all contacts of the people',
    'getContactPerson.success': 'of the person has been obtained',
    'getContactPerson.error':
      'An unexpected error occurred while getting the of the person',
    'insertContactPerson.success':
      'Contact of the person has been created successfully',
    'insertContactPerson.error':
      'An unexpected error occurred while creating the contact and/or the person',
    'updateContactPerson.success':
      'Contact of the person has been updated successfully',
    'updateContactPerson.error':
      'An unexpected error occurred while updating the of the person',
    'deleteContactPerson.success':
      'of the person has been deleted successfully',
    'deleteContactPerson.error':
      'An unexpected error occurred while deleting the of the person ',
    //EPS
    'getEPS.success': 'All EPS of the database have been obtained',
    'getEPS.error': 'An unexpected error occurred while getting all EPS',
    'getOneEPS.success': 'EPS has been obtained',
    'getOneEPS.error': 'An unexpected error occurred while getting the EPS',
    'insertEPStEPS.success': 'EPS has been created successfully',
    'insertEPS.error': 'An unexpected error occurred while creating the EPS',
    'updateEPS.success': 'EPS has been updated successfully',
    'updateEPS.error': 'An unexpected error occurred while updating the EPS',
    'deleteEPSEPS.success': 'EPS has been deleted successfully',
    'deleteEPS.error': 'An unexpected error occurred while deleting the EPS',
    //GENERAL MEDICAL FEATURES
    'getGeneralMedicalFeatures.success':
      'All general medical features of the database have been obtaineds',
    'getGeneralMedicalFeatures.error':
      'An unexpected error occurred while getting all general medical features',
    'getOneGeneralMedicalFeatures.success':
      'General medical features has been obtained',
    'getOneGeneralMedicalFeatures.error':
      'An unexpected error occurred while getting the general medical features',
    'insertGeneralMedicalFeatures.success':
      'General medical features has been created successfully',
    'insertGeneralMedicalFeatures.error':
      'An unexpected error occurred while creating the general medical features',
    'updateGeneralMedicalFeatures.success':
      'General medical features has been updated successfully',
    'updateGeneralMedicalFeatures.error':
      'An unexpected error occurred while updating the general medical features',
    'deleteGeneralMedicalFeatures.success':
      'General medical features has been deleted successfully',
    'deleteGeneralMedicalFeatures.error':
      'An unexpected error occurred while deleting the general medical features',
    //HEALTH CENTERS
    'getHealthCenters.success':
      'All health centers of the database have been obtained',
    'getHealthCenters.error':
      'An unexpected error occurred while getting all health centers',
    'getHealthCenter.success': 'Health center has been obtained',
    'getHealthCenter.error':
      'An unexpected error occurred while getting the health center',
    'insertHealthCenter.success': 'Health center has been created successfully',
    'insertHealthCenter.error':
      'An unexpected error occurred while creating the health center',
    'updateHealthCenter.success': 'Health center has been updated successfully',
    'updateHealthCenter.error':
      'An unexpected error occurred while updating the health center',
    'deleteHealthCenter.success': 'Health center has been deleted successfully',
    'deleteHealthCenter.error':
      'An unexpected error occurred while deleting the health center',
    //PEOPLE
    'getPeople.get-Patient': 'Patient information found correctly',
    'getPeople.err-get-Patient':
      'Patient information could not be obtained or does not exist in the system',
    'getPeople.success': 'All people of the database have been obtained',
    'getPeople.error': 'An unexpected error occurred while getting all people',
    'getPerson.success': 'Person has been obtained',
    'getPerson.error': 'An unexpected error occurred while getting the person',
    'insertPerson.success': 'Person has been created successfully',
    'insertPerson.error':
      'An unexpected error occurred while creating the person',
    'updatePerson.success': 'Person has been updated successfully',
    'updatePerson.error':
      'An unexpected error occurred while updating the person',
    'deletePerson.success': 'Person has been deleted successfully',
    'deletePerson.error':
      'An unexpected error occurred while deleting the person',
    //PROFESSIONS
    'getProfessions.success':
      'All professions of the database have been obtained',
    'getProfessions.error':
      'An unexpected error occurred while getting all professions',
    'getProfession.success': 'Profession has been obtained',
    'getProfession.error':
      'An unexpected error occurred while getting the profession',
    'insertProfession.success': 'Profession has been created successfully',
    'insertProfession.error':
      'An unexpected error occurred while creating the profession',
    'updateProfession.success': 'Profession has been updated successfully',
    'updateProfession.error':
      'An unexpected error occurred while updating the profession',
    'deleteProfession.success': 'Profession has been deleted successfully',
    'deleteProfession.error':
      'An unexpected error occurred while deleting the profession',
    //QUERIES
    'getQueries.success': 'All queries of the database have been obtained',
    'getQueries.error':
      'An unexpected error occurred while getting all queries',
    'getQuery.success': 'Query has been obtained',
    'getQuery.error': 'An unexpected error occurred while getting the query',
    'insertQuery.success': 'Query has been created successfully',
    'insertQuery.error':
      'An unexpected error occurred while creating the query',
    'updateQuery.success': 'Query has been updated successfully',
    'updateQuery.error':
      'An unexpected error occurred while updating the query',
    'deleteQuery.success': 'Query has been deleted successfully',
    'deleteQuery.error':
      'An unexpected error occurred while deleting the query',
    //SPECIALTIES
    'getSpecialties.success':
      'All specialties of the database have been obtained',
    'getSpecialties.error':
      'An unexpected error occurred while getting all specialties',
    'getSpecialty.success': 'Specialty has been obtained',
    'getSpecialty.error':
      'An unexpected error occurred while getting the specialty',
    'insertSpecialty.success': 'Specialty has been created successfully',
    'insertSpecialty.error':
      'An unexpected error occurred while creating the specialty',
    'updateSpecialty.success': 'Specialty has been updated successfully',
    'updateSpecialty.error':
      'An unexpected error occurred while updating the specialty',
    'deleteSpecialty.success': 'Specialty has been deleted successfully',
    'deleteSpecialty.error':
      'An unexpected error occurred while deleting the specialty',
    //Authotization
    'auth.noAuth': 'You are not authorized to perform this action',
    //404
    'state.404': 'We could not find your content 🙁',
    //Failed to fetch
    'state.failedToFetch':
      'Data could not be accessed, check your internet connection',
    //Profile
    'profile.email': 'Email',
    'profile.phone': 'Phone',
    'profile.genre': 'Genre',
    'profile.civil-state': 'Civil state',
    'profile.eps': 'EPS',
    'profile.stratum': 'Stratum',
    'profile.dateBirth': 'Date of birth',
    'profile.profession': 'Profession',
    'profile.website': 'Website',
    'profile.direction': 'Direction',
    'profile.description': 'Description',
    'profile.edit-button': 'Edit information',
    //Register person
    'register.person': 'Personal information',
    'register.contact': 'Contact information',
    'register.finalize': 'Information preview',
    'register.form-firstName': 'First name *',
    'register.form-secondName': 'Second name',
    'register.form-lastName': 'First last name *',
    'register.form-lastSecondName': 'Second last name',
    'register.form-genre': 'Genre *',
    'register.form-dateBirth': 'Date of birth *',
    'register.form-email': 'Email',
    'register.form-civilState': 'Civil state *',
    'register.form-photo': 'Upload photo',
    'register.form-phone': 'Phone *',
    'register.form-idEPS': 'EPS *',
    'register.form-profession': 'Profession',
    'register.form-stratum': 'Stratum',
    'register.form-deceased': 'Deceased',
    'register.form-deceasedDate': 'Date of birth',
    'register.form-isHealtCareTeam': 'Is health care team',
    //Required
    'register.form-firstName-required': 'The first name is required',
    'register.form-lastName-required': 'The first last name is required',
    'register.form-genre-required': 'The genre is required',
    'register.form-dateBirth-required':
      'Date format is incorrect, must be dd/MM/yyyy',
    'register.form-civilState-required': 'Civil state is required',
    'register.form-phone-required': 'Phone is required',
    'register.form-email-invalid': 'Email format is incorrect',
    'register.form-idEPS-required': 'EPS is required',
    'register.form-nameContact-required': 'Contact name is required',
    'register.form-documentContact-table': 'Document',
    'register.form-nameContact-table': 'Name',
    'register.form-phonneContact-table': 'Phone',
    'register.form-documentContact': 'Document *',
    'register.form-nameContact': 'Name *',
    'register.form-phonneContact': 'Phone *',
    'register.form-emailContact': 'Email',
    'register.form-directionContact': 'Direction',
    'register.form-deleteContact': 'Delete',
    'register.form-add': 'Add contact',
    'register.form-save': 'Save',
    'register.form-update': 'Update',
    'register.form-next': 'Next',
    'register.form-previous': 'Previous',
    'register.form-back': 'Go back',
    'register.form-Select': 'Select',
    'register.form-GenreM': 'Male',
    'register.form-GenreF': 'Female',
    'register.form-GenreO': 'Another',
    'register.form-CivilStateS': 'Single',
    'register.form-CivilStateC': 'Married',
    'register.form-CivilStateD': 'Divorced',
    'register.form-CivilStateV': 'Widower',
    'register.form-CivilStateU': 'Free union',
    'register.form-errFetchEPS': 'Error bringing eps',
    'register.form-errFetchProfession': 'Error bringing professions',
    'register.form-errTitle-noContact': 'Enter contact',
    //Register Health Center
    'register-healthCenter': 'Register health center',
    'update-healthCenter': 'Update health center',
    'register-form-nameCenter': 'Name *',
    'register-form-website': 'Website',
    'register-form-phoneCenter': 'Phone *',
    'register-form-directionCenter': 'Direction *',
    'register-form-emailCenter': 'Email',
    'register-form-descriptionCenter': 'Aditional information',
    'register.form-name-center-required': 'Enter the health center name',
    'register.form-direction-required': 'Enter the health center direction',
    'register.form-errMsg-noContact':
      'You have not entered contacts, at least you must have one',
    'register.success-title': 'Successful registration!',
    'register.error-title': 'Oops, Register error!',
    'register.error-titleContact': 'Oops, Contact error!',
    'register.error-msgContact': 'Only 3 contacts are allowed per person',
    //DASHBOARD - PATIENT
    'dashboard-patient.specialties': 'Specialties',
    'dashboard-patient.specialties-description':
      'Below you will find all the specialties available on the platform, in such a way that you can consult your evolution, findings and medical procedures in each of these cards, click on one to know your medical history.',
    'dashboard-patient.specialties-description-end':
      'Remember, your health condition is our priority.',
    //DASHBOARD - PROFESSIONAL
    'dashboard-professional.specialties': 'Specialties',
    'dashboard-professional.specialties-description':
      'Below you will find the different specialties of the health center (s) where you are qualified to work, so that you can care for a patient right now and help us improve this great world of health care and care.',
    'dashboard-professional.specialties-description-end':
      'Remember, your professional ethics is our priority',
    'dashboard-professional.no-specialties':
      'At the moment there are no records of specialties that require your attention.',
    'dashboard-health.no-specialties':
      'At the moment there are no records of specialties and professionals in your medical unit.',
    'dashboard-professional.title-consult': 'Patient consultation',
    'dashboard-professional.title-info': 'Patient information',
    'dashboard-professional.patient-document': 'Patient document',
    'dashboard-professional.patient-consult': 'Consult patient',
    'dashboard-professional.patient-consult-document': 'Patient document:',
    'dashboard-professional.patient-consult-name': 'Patient name:',
    'dashboard-professional.patient-consult-genre': 'Patient genre:',
    'dashboard-professional.patient-consult-birth': 'Patient age: ',
    'dashboard-professional.patient-consult-birth-age': 'years',
    'dashboard-professional.patient-general-consultation':
      'GENERAL MEDICAL INFORMATION',
    'dashboard-professional.patient-specialty-history': 'EVOLUTION HISTORY',
    'dashboard-professional.patient-specialty-consultation': 'ADD EVOLUTION',
    'dashboard-professional.selection':
      'We know that just as you are a health professional, you are also patient at times, calm down! We let you see your evolution and state of health, tell us, what role do you want to have today?',
    'dashboard-professional.select-patient': 'Consulting patient',
    'dashboard-professional.select-prof': 'Health professional',
    //DASHBOARD - HEALTHCENTER
    'dashboard-health.professional': 'Health professional',
    'dashboard-health.professional-description':
      'Below you will find a short form, which will help you assign health professionals to the specialty in which they work in your unit, so that they can serve your patients quickly and effectively.',
    'dashboard-health.professional-description-end':
      'Remember, to ease your work is our priority',
    'dashboard-health.add-professional': 'Add professional',
    'dashboard-health.professional-document': 'Professional document',
    'dashboard-health.specialties-array': 'Profession specialty',
    'dashboard-health.professional-required':
      'The professional document is required',
    'dashboard-health.specialties-required':
      'The professional specialty is required',
    'dashboard-patient.no-specialties':
      'At the moment there are no records of specialties to be attended.',
    'dashboard-health.name-professional': 'Professional name',
    'dashboard-health.specialty-professional': 'Professional specialty',
    'dashboard-health.phone-professional': 'Professional name',
    'dashboard-health.enabled-professional': 'Proffesional enabled in center',
    'dashboard-health.professional-openAnotation': 'Open annotation',
    'dashboard-health.professional-history': `Below you will find the complete history of patient annotations, to know, in this way you will be able to know the evolution that the patient's process has had`,
    'dashboard-health.professional-no-history':
      'Until today, no entries have been made in this specialty',
    'dashboard-health.success-title': 'Successful',
    'dashboard-health.error-title': 'Failed',
    'dashboard-health-update.success-title': 'Correctly updated',
    'dashboard-health-update.error-title': 'Update error',
    //Evolution
    'evolution.generalfeature-height': 'Height',
    'evolution.generalfeature-weight': 'Weight',
    'evolution.generalfeature-drink': 'Drinks',
    'evolution.generalfeature-smokes': 'Smokes',
    'evolution.generalfeature-vices': 'Vices',
    'evolution.generalfeature-manias': 'Manias',
    'evolution.anotation-add': 'Add anotation',
    'evolution.generalfeature-family-background': 'Family background',
    'evolution.generalfeature-medical': 'Medical history',
    'evolution.generalfeature-quirurjical': 'Surgery history',
    'evolution.generalfeature-traimatic_background': 'Traumatic background',
    'evolution.generalfeature-allergy-history': 'Allergy history',
    'evolution.generalfeature-save-or-update': 'Save',
    'evolution.success-title': 'Saved successfully',
    'evolution.success-body': 'Annotation saved successfully',
    'evolution.error-title': 'Save error',
    'evolution.error-body': 'Annotation could not be stored',
    'infoProfessional.assign-specialty': 'Assign to specialty',
    'infoProfessional.assign-what-specialty': 'Assign to: ',
  },
};
