export const convertMinutes = (minutes: number | undefined) => {
  if (minutes) {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    const textHours = `00${hours}`.slice(-2);
    const textNinutes = `00${min}`.slice(-2);

    return `${textHours}h ${textNinutes}m`;
  }

  return null;
};
