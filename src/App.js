import "@fontsource/limelight"
import "@fontsource/montserrat"

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './constants/theme';
import Home from './pages/Home';
import About from './pages/About'


function App() {
  console.log(theme)
  return (
    <ChakraProvider theme={theme}>
      <Router>
          <Header/>
          <Switch >
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/about" exact>
              <About></About>
            </Route>
          </Switch>
    </Router>
    </ChakraProvider>
  );
}

export default App;
