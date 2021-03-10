import React from 'react';
import Header from './Header';
import customTheme from './styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { auth } from './firebase';
// import Login from './components/Login';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { Logo } from '../Logo';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box>
        <Router></Router>
      </Box>
      <Box>
        <Header />
      </Box>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
