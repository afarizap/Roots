import React from 'react';
import Header from './components/Header';
import Divtext from './components/Divtext';
import Sidebar from './components/Sidebar';
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
  Center,
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
          <Divtext />
          <Sidebar />
          <Keyboard />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
