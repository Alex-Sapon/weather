export function getIconUrl(code: string): string {
  if (code.length === 3) {
    return `https://openweathermap.org/img/wn/${code}.png`;
  } 
  return code;
}
