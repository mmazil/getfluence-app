import React, { ChangeEvent, useState, useCallback } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { signInAPI } from '../services/mock-api';
import { userType } from '../types/user';

export const SignIn = () => {

  const [username, setUsername] = useState<String>('');
  const [password, setPassword] = useState<String>('');

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

    const result: any = await signInAPI(data).catch(e => console.error(e));

    localStorage.setItem('jwt', result.jwt);
  }, [username, password])
  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder='Username' onChange={handleUsername}/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' type='password' onChange={handlePassword}/>
      </Form.Field>
      <Button primary onClick={handleSignIn} fluid>Sign In</Button>
    </Form>
  );
}