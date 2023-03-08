import { format, parseISO } from "date-fns";

export const formatDate = (data: string | undefined) => {
  if (data) {
    return format(parseISO(data), "dd/MM/yyyy");
  }

  return null;
};
