import React from 'react';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import customTheme from './components/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ChakraProvider,
  ThemeProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Image,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box>
        <Router>
          <Header />
          {/* <Login /> */}
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
          <Keyboard />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
