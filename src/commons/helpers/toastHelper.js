import { toast } from 'react-toastify';

export const toastError = (error) => {
  let message = null;
  if (error && error.message) {
    message = error.message;
    toast.error(message);
  }
};
