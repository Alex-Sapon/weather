import axios from 'axios';

import { IpAPI } from '@/api/interfaces';

// not secure http
export const ipAPI = {
  getUserLocation(): Promise<IpAPI> {
    return axios.get('http://ip-api.com/json/?lang=ru');
  }
};
