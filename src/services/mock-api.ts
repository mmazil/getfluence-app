import { userType } from '../types/user';
import { mockJWT } from './utils';

export const signInAPI = (data: userType) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(data.username === 'admin' && data.password === 'admin') {
      mockJWT('admin').then(token => {
        resolve({token});
      });
    } else {
      reject(new Error('Incorrect Data!'));
    }
  }, 300);
});