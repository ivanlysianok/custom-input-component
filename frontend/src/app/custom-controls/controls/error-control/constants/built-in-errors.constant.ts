import { ErrorMessage } from '../models/error-message.interface';

export const BuiltInErrorsCollection: ErrorMessage[] = [
  {
    errorKey: 'required',
    message: 'Required lorem ipsum...',
  },
  {
    errorKey: 'requiredTrue',
    message: 'requiredTrue lorem ipsum...',
  },
  {
    errorKey: 'minlength',
    message: 'minLength lorem ipsum...',
  },
  {
    errorKey: 'maxlength',
    message: 'maxLength lorem ipsum...',
  },
  {
    errorKey: 'min',
    message: 'min lorem ipsum...',
  },
  {
    errorKey: 'max',
    message: 'max lorem ipsum...',
  },
  {
    errorKey: 'email',
    message: 'email lorem ipsum...',
  },
];
