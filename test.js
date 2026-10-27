import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 15, 
  duration: '30s',
};

export default function () {
  http.get('http://localhost');
  sleep(1);
}
