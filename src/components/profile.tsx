import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { getUserDataAPI, updateUserDataAPI } from '../services/mock-api';
import { userProfile } from '../types/user';
import { Messages } from './messages';

interface Props {
  handleShowProfile: () => void
}

export const Profile = ({ handleShowProfile }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmePassword, setConfirmePassword] = useState<string>('');
  const [disableButton, setdisableButton] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }
  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }
  
  const handleNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  }
  
  const handleConfirmePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmePassword(e.target.value);
  }
  
  const handleUpdateProfile = async () => {
    if(newPassword !== confirmePassword) return setError('The confirme password is unmatched!');

    const jwt = localStorage.getItem('jwt') || '';

    const userData: userProfile = {
      username,
      city,
      password: newPassword,
      jwt
    }
    
    try {
      await updateUserDataAPI(userData);
      setSuccess('Your profile has been updated!');
      setError('');
    } catch (e: any) {
      setError(e.message);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user: any = await getUserDataAPI();
        setUsername(user.username);
        setCity(user.city);
      } catch (e: any) {
        setError(e.message);
      }
    }
    fetchData();
  }, [])

  const handleGoToCalendar = () => {
    handleShowProfile();
  }

  return (
    <Form>
      { error && <Messages message={error} negative/> }
      { success && <Messages message={success} positive/> }
      <Form.Field 
        label='Username'
        placeholder='Username'
        control='input'
        type='text'
        value={username}
        onChange={handleUsername}
      />
      <Form.Field 
        label='City'
        placeholder='City'
        control='input'
        type='text'
        value={city}
        onChange={handleCity}
      />
      <Form.Field 
        label='New Password' 
        placeholder='New Password' 
        control='input' 
        type='password'
        onChange={handleNewPassword}
      />
      <Form.Field 
        label='Confirme Password' 
        placeholder='Confirme Password' 
        control='input' 
        type='password' 
        onChange={handleConfirmePassword} 
      />
      <Button 
        onClick={handleUpdateProfile}
        disabled={disableButton}
        primary
        fluid
      >Update Profile</Button>
      <br />
      <Button 
        onClick={handleGoToCalendar}
        fluid
      >Go To Calendar</Button>
    </Form>
  );
}