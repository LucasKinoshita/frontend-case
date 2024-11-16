import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateWithTime(data: string) {
  return format(new Date(data), "dd MMM yyyy - HH:mm", { locale: ptBR });
}

export function formatDateWithMonthName(data: string) {
  return format(new Date(data), "dd 'de' MMMM", { locale: ptBR });
}
