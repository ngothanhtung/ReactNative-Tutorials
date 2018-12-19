import axios from 'axios';
import SETTINGS from '../constants/SETTINGS';

export const client = axios.create({
  baseURL: SETTINGS.ExpressApiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});