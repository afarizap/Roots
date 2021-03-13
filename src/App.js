import React from 'react';
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
          {/* <Login /> */}
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
          <Center mb="40px" fontSize="40px" alignContent='center'>GO!</Center>
          <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(12, 1fr)"
          my="2.5"
          >
          <GridItem colSpan={6}><Sidebar /></GridItem>
          <GridItem colSpan={6}><Createpicto /></GridItem>
          </Grid>
          <Divtext />
          <Keyboard />
          <Foot />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
