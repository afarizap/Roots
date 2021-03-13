import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Divtext from './components/Divtext';
import Sidebar from './components/Sidebar';
import Createpicto from './components/Createpicto';
import Keyboard from './components/Keyboard';
import Foot from './components/Footer';
import customTheme from './components/styles/theme';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
  ButtonGroup,
  Stack,
  GridItem,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box>
        <Router>
          <Header />
          <Hero />
          {/* <Login /> */}
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
          <Center mb="40px" fontSize="40px" alignContent='center'>GO!</Center>
          <Divtext />
          <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(12, 1fr)"
          gap={4}
          mx="80px"
          my="4"
          >
          <GridItem colSpan={6}><Sidebar /></GridItem>
          <GridItem colSpan={6}><Createpicto /></GridItem>
          </Grid>
          <Keyboard />
          <Foot />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
