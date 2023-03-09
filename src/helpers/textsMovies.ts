type Items = {
  title: string;
  type?: string;
  text?: string;
}

export const dataItems: Items[] = [
  {
    title: "Type",
    text: "Movie",
  },
  {
    title: "Release Date:",
    type: "date",
  },
  {
    title: "Run time",
    type: "RunTime",
  },
  {
    title: "Genres",
    type: "Genres",
  },
];
