import React from 'react';
import Header from './components/Header';
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
          <Box>
            <Image
              boxSize="100px"
              objectFit="cover"
              borderRadius="full"
              src="https://firebasestorage.googleapis.com/v0/b/roots-d.appspot.com/o/img%2Ficon.svg?alt=media&token=f220d4fc-406a-460e-8f32-ef1ea1c1a8b1"
              alt=""
            />
          </Box>
          {/* <Login /> */}
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
