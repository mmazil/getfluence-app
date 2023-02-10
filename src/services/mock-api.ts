import { userType } from '../types/user';
import { mockJWT } from './utils';

export const signUpAPI = (data: userType) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(data.username && data.password) {
      resolve({...data, createdAt: new Date()});
    } else {
      reject(new Error('Incorrect Data!'));
    }
  }, 300);
});

export const signInAPI = (data: userType) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if(data.username === username && data.password === password) {
      mockJWT(username).then(token => {
        resolve({token});
      });
    } else {
      reject(new Error('Incorrect Data!'));
    }
  }, 300);
});