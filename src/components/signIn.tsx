import React, { ChangeEvent, useState, useCallback } from 'react';
import { Form } from 'semantic-ui-react';
import { signInAPI } from '../services/mock-api';
import { userType } from '../types/user';
import { Field } from './field';
import { Button_ } from './button';

export const SignIn = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSignIn = useCallback(async () => {
    const data: userType = {
      username,
      password
    }

    try{
      const result: any = await signInAPI(data);
      localStorage.setItem('jwt', result.token);
    } catch(e) {
      console.error(e)
    }
  }, [username, password])
  
  return (
    <Form>
      <Field label='Username' handleInput={handleUsername}/>
      <Field label='Password' inputType='password' handleInput={handlePassword}/>
      <Button_ label='Sign In' handleClick={handleSignIn} />
    </Form>
  );
}