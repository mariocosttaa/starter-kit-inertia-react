import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'warning' | 'info';

const defaultOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

export const useToast = () => {
  const showToast = (message: string, type: ToastType = 'info') => {
    toast[type](message, defaultOptions);
  };

  return {
    success: (message: string) => showToast(message, 'success'),
    error: (message: string) => showToast(message, 'error'),
    warning: (message: string) => showToast(message, 'warning'),
    info: (message: string) => showToast(message, 'info'),
  };
};
