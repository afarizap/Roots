import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Team from './components/Team';
import Hero from './components/Hero';
import Keyboard from './components/Keyboard';
import Home from './components/Home';
import Divtext from './components/Divtext';
import customTheme from './components/styles/theme';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';

function App() {
  return (
    <div>

      <ChakraProvider theme={customTheme}>
        <Box>
          <Router>
            <Header />
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
