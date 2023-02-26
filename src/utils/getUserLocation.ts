export const getUserLocation = (options?: PositionOptions): Promise<GeolocationPosition> => new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
});
