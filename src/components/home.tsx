import React, { useState } from "react";
import { Profile } from './profile';
import { Calendar } from './calendar';

export const Home = () => {
  const [showProfile, setShowProfile] = useState<boolean>(true);

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  }

  return (
    showProfile ? <Profile handleShowProfile={handleShowProfile}/>: <Calendar handleShowProfile={handleShowProfile}/>
  );
};