import { format, parseISO, differenceInYears } from 'date-fns';

export const toBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const toRedableDate = (date: string): string =>
  format(parseISO(date), 'dd/MM/yyyy');

export const birthday = (date: string) => {
  const now = Date.now();
  return differenceInYears(now, parseISO(date));
};
