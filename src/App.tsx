import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'

import { SignUp} from './components/signUp';
import { SignIn } from './components/signIn';
import { Profile } from './components/profile';

function App() {
  return (
    <Container>
      <SignUp />
    </Container>
  );
}

export default App;
