import React, { ChangeEvent, useState, useCallback } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { signInAPI } from '../services/mock-api';
import { userProfile } from '../types/user';
import { Messages } from './messages';

interface Props {
  toggleLoggedIn: () => void;
}

export const SignIn = ({ toggleLoggedIn }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSignInSubmit = useCallback(async () => {
    const data: userProfile = {
      username,
      password
    }

    try{
      const result: any = await signInAPI(data);
      localStorage.setItem('jwt', result.token);
      toggleLoggedIn();
    } catch(e: any) {
      setError(e.message);
    }
  }, [username, password, toggleLoggedIn])
  
  return (
    <Form>
      { error && <Messages message={error} negative/> }
      <Form.Field 
        label='Username'
        placeholder='Username'
        control='input'
        type='text'
        onChange={handleUsernameChange} 
      />
      <Form.Field 
        label='Password' 
        placeholder='Password' 
        control='input' 
        type='password' 
        onChange={handlePasswordChange} 
      />
      <Button type='submit' onClick={handleSignInSubmit} primary fluid>Sign In</Button>
    </Form>
  );
}