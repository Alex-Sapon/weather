import axios from 'axios';

import { IpAPI } from '@/api/types';

export const ipAPI = {
  getUserLocation(): Promise<IpAPI> {
    return axios.get('http://ip-api.com/json/?lang=ru');
  }
};
