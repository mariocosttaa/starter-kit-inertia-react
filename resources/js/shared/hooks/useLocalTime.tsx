import { useState, useEffect } from 'react';

// Interface para as opções do hook
interface UseLocalTimeOptions {
  format?: 'full' | 'date' | 'time' | 'timeWithSeconds';
  locale?: string;
}

/**
 * Hook para converter um horário UTC para o horário local do usuário
 * @param utcTime - Horário UTC como string ou objeto Date (opcional, usa data atual se não fornecido)
 * @param options - Opções de formatação
 * @returns String formatada para uso em HTML
 */
const useLocalTime = (
  utcTime?: string | Date | null,
  options: UseLocalTimeOptions = {}
): string => {
  const [formattedTime, setFormattedTime] = useState<string>('');

  useEffect(() => {
    try {
      // Criar objeto Date
      let dateObject: Date;

      if (!utcTime) {
        // Usar data/hora atual se utcTime não for fornecido
        dateObject = new Date();
      } else if (utcTime instanceof Date) {
        dateObject = new Date(utcTime);
      } else if (typeof utcTime === 'string') {
        dateObject = new Date(utcTime);
      } else {
        throw new Error('O formato de hora UTC deve ser uma string ou objeto Date');
      }

      // Verificar se o objeto Date é válido
      if (isNaN(dateObject.getTime())) {
        throw new Error('Data inválida');
      }

      // Formatar com base nas opções
      const locale = options.locale || navigator.language;
      const format = options.format || 'full';

      let formatted: string;

      switch (format) {
        case 'full':
          formatted = dateObject.toLocaleString(locale);
          break;
        case 'date':
          formatted = dateObject.toLocaleDateString(locale);
          break;
        case 'time':
          formatted = dateObject.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' });
          break;
        case 'timeWithSeconds':
          formatted = dateObject.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          break;
        default:
          formatted = dateObject.toLocaleString(locale);
      }

      setFormattedTime(formatted);
    } catch (err) {
      setFormattedTime('Erro: Data inválida');
    }
  }, [utcTime, options.format, options.locale]);

  return formattedTime;
};

export default useLocalTime;