import { LOCALES } from '../locales';

export default {
  [LOCALES.ENGLISH]: {
    //APP
    'app.title': 'DIGITAL CLINICAL HISTORY',
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
  },
};

/**
 * hello: 'Hello',
    hi: "I'm {valueHi} nice to meet you",
 */
