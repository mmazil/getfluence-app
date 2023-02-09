import { userType } from '../types/user';

export const signUpAPI = (data: userType) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(data.username && data.password) {
      resolve({username: data.username, createdAt: new Date()});
    } else {
      reject(new Error('Incorrect Data!'));
    }
  }, 300);
});

export const signInAPI = (data: userType) => new Promise((resolve, reject) => {
  setTimeout(() => {
    const username = localStorage.get('username');
    const password = localStorage.get('password');
    if(data.username === username && data.password === password) {
      resolve({token: ''});
    } else {
      reject(new Error('Incorrect Data!'));
    }
  }, 300);
});