import "@fontsource/limelight"
import "@fontsource/montserrat"
import "@fontsource/jetbrains-mono"

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './constants/theme';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';


function App() {
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
            <Route path="/contact" exact>
              <Contact></Contact>
            </Route>
          </Switch>
    </Router>
    </ChakraProvider>
  );
}

export default App;
