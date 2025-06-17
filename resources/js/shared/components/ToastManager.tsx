import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { useToast } from '../hooks/useToast';

interface ToastMessage {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

interface PageProps {
  toast?: ToastMessage;
  [key: string]: any;
}



export const ToastManager = () => {
  const toast = useToast();
  const { toast: pageToast } = usePage<PageProps>().props;

  useEffect(() => {
    if (pageToast?.type && pageToast?.message) {
      toast[pageToast.type](pageToast.message);
    }
  }, []);

  return null;
};
