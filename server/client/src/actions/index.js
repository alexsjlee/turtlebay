import axios from 'axios';
import { CONTEST_SUBMIT } from './types';

const BASE_URL = 'http://localhost:5000'

export function contestSubmit(values) {
  const req = axios.post(`${BASE_URL}/contest/submit`, values)
  return{
    type: CONTEST_SUBMIT,
    payload: values
  }
}