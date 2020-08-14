import { TextMessage } from '../lang/TextMessage';

export const validationsDocument = {
  required: TextMessage('document.required'),
};
export const validationsPasswordUser = {
  required: TextMessage('password.required'),
  /*pattern: {
    value: /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/,
    message: TextMessage('password.invalid'),
  },*/
};
