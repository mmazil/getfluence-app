import { userProfile } from '../types/user';
import { mockJWT, checkUserSignIn, getUserProfile, setUserProfile, verifyJWT } from './utils';

export const signInAPI = (data: userProfile) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if(checkUserSignIn(data)) {
      mockJWT(data.username).then(token => resolve({token}));
    } else {
      reject(new Error('Wrong username or password!'));
    }
  }, 300);
});

export const getUserDataAPI = () => new Promise((resolve, reject) => {
  const userData = getUserProfile();
  if(userData) {
    resolve(userData);
  } else {
    reject(new Error('Fetch Error!'))
  }
});

export const updateUserDataAPI = (data: userProfile) => verifyJWT(data.jwt || '').then(
  () => setUserProfile(data)
);