import React, { ChangeEvent, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

export const SignUp = () => {

  const [username, setUsername] = useState<String>();
  const [password, setPassword] = useState<String>();
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

  const handleSignUp = () => {
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