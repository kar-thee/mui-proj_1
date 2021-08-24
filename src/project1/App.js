
import React from 'react';
import NavigationBar from './NavigationBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import MainContent from './MainContent';
import { Container } from '@material-ui/core';
import Footer from "./Footer"

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
 
         {/* <Container> to make content of lg size */}
          <Footer/>
        {/* </Container> */}
        
        </>
  );
}

export default App;
