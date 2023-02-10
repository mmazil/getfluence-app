import React from 'react';
import { Container } from 'semantic-ui-react'
import { SignIn } from './components/signIn';
import { Profile } from './components/profile';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const jwt = localStorage.getItem('jwt');
  return (
    <Container>
      { jwt ? <Profile /> : <SignIn /> }
    </Container>
  );
}

export default App;
