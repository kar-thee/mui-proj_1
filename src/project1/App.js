
import React from 'react';
import NavigationBar from './Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainContent from './MainContent';
import { Container } from '@material-ui/core';


function App() {
  return (
        <>
        <CssBaseline/>
        <NavigationBar/>

        <Container >
          <main>
          <MainContent/>
          </main>
        </Container>
        
        </>
  );
}

export default App;
