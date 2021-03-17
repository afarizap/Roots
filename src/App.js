import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Team from './components/Team';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Keyboard from './components/Keyboard';
import Home from './components/Home';
import Divtext from './components/Divtext';
import Sidebar from './components/Sidebar';
import Createpicto from './components/Createpicto';
import customTheme from './components/styles/theme';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
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
  Container,
} from '@chakra-ui/react';

function App() {
  return (
    <div>

      <ChakraProvider theme={customTheme}>
        <Box>
          <Router>
            <Header />
            {/* <Login /> */}
            <Switch>
              <Route exact path="/"> {/* Home Page */}
                <Redirect to="/home" />
              </Route>
              <Route exact path="/home"> {/* Home Page */}
                <Hero />
                <Home />
              </Route>

              <Route exact path="/team"> {/* Team Page */}
                <Team />
              </Route>

              <Route exact path="/keyboard"> {/* Keyboard Page */}
                <Divtext />
                <Container maxW={'6xl'}>
                  <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={4} my="4">
                    <GridItem colSpan={6}><Sidebar /></GridItem>
                    <GridItem colSpan={6}><Createpicto /></GridItem>
                  </Grid>
                </Container>
                <Keyboard />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </Box>
      </ChakraProvider>
    </div>
  );
}

export default App;
