import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateWithTime(data: string) {
  return format(new Date(data), "dd MMM yyyy - HH:mm", { locale: ptBR });
}

export function formatDateWithMonthName(data: string) {
  const date = new Date(data);
  const localDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  );

  return format(localDate, "dd 'de' MMMM", { locale: ptBR });
}
