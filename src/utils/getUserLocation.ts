const VisitorAPI = require('visitorapi');

const API_KEY = process.env.REACT_APP_VISITOR_API_KEY;

export const getUserLocation = () => new Promise((resolve, reject) => {
  VisitorAPI(
    API_KEY,
    (data: VisitorData) => resolve(data),
    (errorCode: string, errorMessage: string) => reject(errorMessage)
  );
});

export interface VisitorData {
  browser: string
  browserVersion: string
  city: string
  cityLatLong: string
  countryCode: string
  countryName: string
  currencies: string[]
  deviceBrand: string
  deviceFamily: string
  deviceModel: string
  ipAddress: string
  languages: string[]
  os: string
  osVersion: string
  region: string
}
