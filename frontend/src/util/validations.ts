import { TextMessage } from '../lang/TextMessage';
import messages from '../lang/messages';

export const validationsDocument = {
  required: TextMessage('document.required'),
};
export const validationsNameContact = {
  required: TextMessage('register.form-nameContact-required'),
};
export const validationsPasswordUser = {
  required: TextMessage('password.required'),
};

export const validationsFirstName = {
  required: TextMessage('register.form-firstName-required'),
};

export const validationsLastName = {
  required: TextMessage('register.form-lastName-required'),
};

export const validationsGenre = {
  required: TextMessage('register.form-genre-required'),
};
export const validationsCivilState = {
  required: TextMessage('register.form-civilState-required'),
};

export const validationsEmail = {
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: TextMessage('register.form-email-invalid'),
  },
};

export const validationsBirth = {
  required: TextMessage('register.form-dateBirth-required'),
};
export const validationsPhone = {
  required: TextMessage('register.form-phone-required'),
};
export const validationsEPS = {
  required: TextMessage('register.form-idEPS-required'),
};

export const validationsCenterName={
  required: TextMessage('register.form-name-center-required')
}
export const validationsDirection={
  required: TextMessage('register.form-direction-required')
}
