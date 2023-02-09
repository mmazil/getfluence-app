import React, { ChangeEvent, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

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

  const handleUpdate = () => {
    console.log('click!')
  }

  return (
    <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder='Username' onChange={handleUsername}/>
      </Form.Field>
      <Form.Field>
        <label>City</label>
        <input placeholder='City' onChange={handleCity}/>
      </Form.Field>
      <Form.Field>
        <label>Old Password</label>
        <input placeholder='Old Password' type='password' onChange={handleOldPassword}/>
      </Form.Field>
      <Form.Field>
        <label>New Password</label>
        <input placeholder='New Password' type='password' onChange={handleNewPassword}/>
      </Form.Field>
      <Form.Field>
        <label>Confirme Password</label>
        <input placeholder='Confirme Password' type='password' onChange={handleConfirmePassword}/>
      </Form.Field>
      <Button primary onClick={handleUpdate} fluid>Update Profile</Button>
    </Form>
  );
}