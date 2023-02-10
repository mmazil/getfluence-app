import React, { ChangeEvent, useState, useCallback } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { signUpAPI } from '../services/mock-api';
import { userType } from '../types/user';

export const SignUp = () => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [disableButton, setDisableButton] = useState<boolean>(true);

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleConfirmePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === password) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }

  const handleSignUp = useCallback(async () => {
    const data: userType = {
      username,
      password
    }

    const result: any = await signUpAPI(data).catch(e => console.error(e));
    
    localStorage.setItem('username', result.username);
    localStorage.setItem('password', result.password);
    localStorage.setItem('createdAt', result.createdAt);
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
      <Form.Field>
        <label>Confirme Password</label>
        <input placeholder='Confirme Password' type='password' onChange={handleConfirmePassword}/>
      </Form.Field>
      <Button primary onClick={handleSignUp} fluid disabled={disableButton}>Sign Up</Button>
      <br/>
      <Button basic fluid >Sign In</Button>
    </Form>
  );
}