export const dayTime = (weatherData) => {
  return weatherData?.current?.is_day === 1;
};
