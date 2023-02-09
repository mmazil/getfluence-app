import React, { ChangeEvent, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

export const SignIn = () => {

  const [username, setUsername] = useState<String>();
  const [password, setPassword] = useState<String>();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSignIn = () => {
    console.log('click!')
  }

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