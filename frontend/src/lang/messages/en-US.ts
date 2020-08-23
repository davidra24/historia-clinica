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
      'An unexpected error occurred while getting the user {document}',
    'signup.success-title': 'User created',
    'signup.success-body': 'User {document} created successfully',
    'signup.error-body':
      'An unexpected error occurred while inserting the user {document}',
    'signup.error-existent': 'The user already exists in the database, login',
    //SIGNFORM
    'signForm.document': 'Document',
    'signForm.password': 'Password',
    'signForm.people': 'Person',
    'signForm.healtCarecenter': 'IPS',
    'document.required': 'The document is required',
    'password.required': 'The password is required',
    'password.invalid':
      'The password does not have the right format, minimum 8 characters, 1 special caracter, 1 capital letter, 1 lowercase letter and 1 number',
    //USERS
    'getUsers.success': 'All users of the database have been obtained',
    'getUsers.error': 'An unexpected error occurred while getting all users',
    'getUser.success': 'User {document} has been obtained',
    'updateUser.success': 'User {user.document} has been updated successfully',
    'updateUser.error':
      'An unexpected error occurred while updating the user {document}',
    'deleteUser.success': 'User {document} has been deleted successfully',
    'deleteUser.error':
      'An unexpected error occurred while deleting the user {document}',
    //ATTENTION CENTERS
    'getAttentionCenters.success':
      'All attention centers of the database have been obtained',
    'getAttentionCenters.error':
      'An unexpected error occurred while getting all attention centers',
    'getAttentionCenter.success':
      'Attention center {id}, {document} has been obtained',
    'getAttentionCenter.error':
      'An unexpected error occurred while getting the attention center {id}, {document}',
    'insertAttentionCenter.success':
      'Attention center {attentionCenter.id}, {attentionCenter.document} has been created successfully',
    'insertAttentionCenter.error':
      'An unexpected error occurred while creating the attention center {attentionCenter.id}, {attentionCenter.document}',
    'updateAttentionCenter.success':
      'Attention center {idCenter}, {document} has been updated successfully',
    'updateAttentionCenter.error':
      'An unexpected error occurred while updating the attention center {idCenter}, {document}',
    'deleteAttentionCenter.success':
      'Attention center {id}, {document} has been deleted successfully',
    'deleteAttentionCenter.error':
      'An unexpected error occurred while deleting the attention center {id}, {document}',
    //CONTACTS
    'getContacts.success': 'All contacts of the database have been obtained',
    'getContacts.error':
      'An unexpected error occurred while getting all contacts',
    'getContact.success': 'Contact {document} has been obtained',
    'getContact.error':
      'An unexpected error occurred while getting the contact {document}',
    'insertContact.success':
      'Contact {contact.document} has been created successfully',
    'insertContact.error':
      'An unexpected error occurred while creating the contact {contact.document}',
    'updateContact.success':
      'Contact {contact.document} has been updated successfully',
    'updateContact.error':
      'An unexpected error occurred while updating the contact {document}',
    'deleteContact.success': 'Contact {document} has been deleted successfully',
    'deleteContact.error':
      'An unexpected error occurred while deleting the contact {document} ',
    //CONTACTS PERSON
    'getContactsPerson.success':
      'All contacts of the people of the database have been obtained',
    'getContactsPerson.error':
      'An unexpected error occurred while getting all contacts of the people',
    'getContactPerson.success':
      'Contact {contactDocument} of the person {userDocument} has been obtained',
    'getContactPerson.error':
      'An unexpected error occurred while getting the contact {contactDocument} of the person {userDocument}',
    'insertContactPerson.success':
      'Contact {contactPerson.contactDocument} of the person {contactPerson.userDocument} has been created successfully',
    'insertContactPerson.error':
      'An unexpected error occurred while creating the contact {contactPerson.contactDocument} and/or the person {contactPerson.userDocument}',
    'updateContactPerson.success':
      'Contact {contactPerson.contactDocument} of the person {contactPerson.userDocument} has been updated successfully',
    'updateContactPerson.error':
      'An unexpected error occurred while updating the contact {contactDocument} of the person {userDocument}',
    'deleteContactPerson.success':
      'Contact {contactDocument} of the person {userDocument} has been deleted successfully',
    'deleteContactPerson.error':
      'An unexpected error occurred while deleting the contact {contactDocument} of the person {userDocument} ',
    //EPS
    'getEPS.success': 'All EPS of the database have been obtained',
    'getEPS.error': 'An unexpected error occurred while getting all EPS',
    'getOneEPS.success': 'EPS {id} has been obtained',
    'getOneEPS.error':
      'An unexpected error occurred while getting the EPS {id}',
    'insertEPStEPS.success': 'EPS has been created successfully',
    'insertEPS.error': 'An unexpected error occurred while creating the EPS',
    'updateEPS.success': 'EPS {EPS.id} has been updated successfully',
    'updateEPS.error':
      'An unexpected error occurred while updating the EPS {id}',
    'deleteEPSEPS.success': 'EPS {id} has been deleted successfully',
    'deleteEPS.error':
      'An unexpected error occurred while deleting the EPS {id}',
    //GENERAL MEDICAL FEATURES
    'getGeneralMedicalFeatures.success':
      'All general medical features of the database have been obtaineds',
    'getGeneralMedicalFeatures.error':
      'An unexpected error occurred while getting all general medical features',
    'getOneGeneralMedicalFeatures.success':
      'General medical features {id} has been obtained',
    'getOneGeneralMedicalFeatures.error':
      'An unexpected error occurred while getting the general medical features {id}',
    'insertGeneralMedicalFeatures.success':
      'General medical features {generalMedicalFeatures.id} has been created successfully',
    'insertGeneralMedicalFeatures.error':
      'An unexpected error occurred while creating the general medical features {generalMedicalFeatures.id}',
    'updateGeneralMedicalFeatures.success':
      'General medical features {generalMedicalFeatures.id} has been updated successfully',
    'updateGeneralMedicalFeatures.error':
      'An unexpected error occurred while updating the general medical features ${id}',
    'deleteGeneralMedicalFeatures.success':
      'General medical features {id} has been deleted successfully',
    'deleteGeneralMedicalFeatures.error':
      'An unexpected error occurred while deleting the general medical features {id}',
    //HEALTH CENTERS
    'getHealthCenters.success':
      'All health centers of the database have been obtained',
    'getHealthCenters.error':
      'An unexpected error occurred while getting all health centers',
    'getHealthCenter.success': 'Health center {idCenter} has been obtained',
    'getHealthCenter.error':
      'An unexpected error occurred while getting the health center {idCenter}',
    'insertHealthCenter.success': 'Health center has been created successfully',
    'insertHealthCenter.error':
      'An unexpected error occurred while creating the health center',
    'updateHealthCenter.success':
      'Health center {healthCenter.idCenter} has been updated successfully',
    'updateHealthCenter.error':
      'An unexpected error occurred while updating the health center {idCenter}',
    'deleteHealthCenter.success':
      'Health center {idCenter} has been deleted successfully',
    'deleteHealthCenter.error':
      'An unexpected error occurred while deleting the health center {idCenter}',
    //PEOPLE
    'getPeople.success': 'All people of the database have been obtained',
    'getPeople.error': 'An unexpected error occurred while getting all people',
    'getPerson.success': 'Person {document} has been obtained',
    'getPerson.error':
      'An unexpected error occurred while getting the person {document}',
    'insertPerson.success':
      'Person {person.document} has been created successfully',
    'insertPerson.error':
      'An unexpected error occurred while creating the person {person.document}',
    'updatePerson.success':
      'Person {person.document} has been updated successfully',
    'updatePerson.error':
      'An unexpected error occurred while updating the person {document}',
    'deletePerson.success': 'Person {document} has been deleted successfully',
    'deletePerson.error':
      'An unexpected error occurred while deleting the person {document}',
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
    'updateProfession.success':
      'Profession {profession.id} has been updated successfully',
    'updateProfession.error':
      'An unexpected error occurred while updating the profession {id}',
    'deleteProfession.success': 'Profession {id} has been deleted successfully',
    'deleteProfession.error':
      'An unexpected error occurred while deleting the profession {id}',
    //QUERIES
    'getQueries.success': 'All queries of the database have been obtained',
    'getQueries.error':
      'An unexpected error occurred while getting all queries',
    'getQuery.success': 'Query {id} has been obtained',
    'getQuery.error':
      'An unexpected error occurred while getting the query {id}',
    'insertQuery.success': 'Query has been created successfully',
    'insertQuery.error':
      'An unexpected error occurred while creating the query',
    'updateQuery.success': 'Query {query.id} has been updated successfully',
    'updateQuery.error':
      'An unexpected error occurred while updating the query {id}',
    'deleteQuery.success': 'Query {id} has been deleted successfully',
    'deleteQuery.error':
      'An unexpected error occurred while deleting the query {id}',
    //SPECIALTIES
    'getSpecialties.success':
      'All specialties of the database have been obtained',
    'getSpecialties.error':
      'An unexpected error occurred while getting all specialties',
    'getSpecialty.success': 'Specialty {id} has been obtained',
    'getSpecialty.error':
      'An unexpected error occurred while getting the specialty {id}',
    'insertSpecialty.success': 'Specialty has been created successfully',
    'insertSpecialty.error':
      'An unexpected error occurred while creating the specialty',
    'updateSpecialty.success':
      'Specialty {specialty.id} has been updated successfully',
    'updateSpecialty.error':
      'An unexpected error occurred while updating the specialty {id}',
    'deleteSpecialty.success': 'Specialty {id} has been deleted successfully',
    'deleteSpecialty.error':
      'An unexpected error occurred while deleting the specialty {id}',
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
