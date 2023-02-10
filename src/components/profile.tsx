import React, { ChangeEvent, useState } from 'react';
import { Form } from 'semantic-ui-react';
import { Field } from './field';
import { Button_ } from './button';

export const Profile = () => {

  const [username, setUsername] = useState<String>();
  const [city, setCity] = useState<String>();
  const [oldPassword, setOldPassword] = useState<String>();
  const [newPassword, setNewPassword] = useState<String>();
  const [confirmePassword, setConfirmePassword] = useState<String>();

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }
  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    
  }

  const handleOldPassword = (e: ChangeEvent<HTMLInputElement>) => {
  }

  const handleNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
  }

  const handleConfirmePassword = (e: ChangeEvent<HTMLInputElement>) => {
  }

  const handleUpdateProfile = () => {
    console.log('click!')
  }

  return (
    <Form>
      <Field label='Username' handleInput={handleUsername}/>
      <Field label='City' handleInput={handleCity}/>
      <Field label='Old Password' handleInput={handleOldPassword}/>
      <Field label='New Password' handleInput={handleNewPassword}/>
      <Field label='Confirme Password' handleInput={handleConfirmePassword}/>
      <Button_ label='Update Profile' handleClick={handleUpdateProfile} />
    </Form>
  );
}