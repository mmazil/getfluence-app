import React, { useState } from 'react';
import { Container } from 'semantic-ui-react'
import { SignIn } from './components/signIn';
import { Home } from './components/home';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const jwt = localStorage.getItem('jwt');
  const [loggedIn, setLoggedIn] = useState<boolean>(!!jwt);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);

  return (
    <Container>
      { loggedIn ? <Home /> : <SignIn toggleLoggedIn={toggleLoggedIn}/> }
    </Container>
  );
}

export default App;
