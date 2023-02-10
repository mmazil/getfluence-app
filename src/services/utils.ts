import * as jose from 'jose';
import userInformations from './credentials.json';
import { userProfile } from '../types/user';

export const mockJWT = async (username: string) => {
  return await new jose.SignJWT({ username })
  .setProtectedHeader({ alg }).setExpirationTime('2h').sign(secret);
}

export const getUserProfile = () => {
  const userProfile = localStorage.getItem('userProfile');
  if(userProfile) {
    return JSON.parse(userProfile);
  } else {
    localStorage.setItem('userProfile', JSON.stringify(userInformations));
    return userInformations;
  }
}

export const setUserProfile = (data: userProfile) => {
  const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
  localStorage.setItem('userProfile', JSON.stringify({...userProfile, ...data, ...(!data.password && { password: userProfile.password })}));
}

export const checkUserSignIn = (data: userProfile) : boolean => {
  const userProfile = getUserProfile();
  return data.username === userProfile.username && data.password === userProfile.password;
}

export const verifyJWT = (jwt: string) => jose.jwtVerify(jwt, secret);

const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2');
const alg = 'HS256';
