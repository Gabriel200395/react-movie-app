import { convertMinutes } from "./convertMinutes";
import { formatDate } from "./formatDate";
import { Movie } from "../types/movie";

export function textData(type: string, data: Movie | undefined) {
  switch (type) {
    case "date":
      return formatDate(data?.release_date);
    case "RunTime":
      return convertMinutes(data?.runtime);
    case "Genres":
      return data?.genres.map((item) => item.name).join(" , ");
    default:
      return null;
  }
}
