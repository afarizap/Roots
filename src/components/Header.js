import React from 'react';
import { Link, Box, Flex, Text, Button, Stack, Image} from '@chakra-ui/react';

import Logo from './Logo';
import { ColorModeSwitcher } from './styles/ColorModeSwitcher';

const NavBar = props => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo w="200px" ColorModeSwitcher={['white', 'white', '#25383C', '#25383C']}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/home">INICIO</MenuItem>
        <MenuItem to="/team">EQUIPO</MenuItem>
        <MenuItem to="/keyboard">TABLERO</MenuItem>

        <ColorModeSwitcher />
        <MenuItem to="/login" isLast>
          <Button
            size="sm"
            rounded="md"
            color={['black']}
            bg={['#40BF5A']}
            _hover={{
              bg: ['#325860'],
            }}
          >
            INICIAR SESION
          </Button>
        </MenuItem>
        <MenuItem to="/register" isLast>
          <Button
            size="sm"
            rounded="md"
            color={['black']}
            bg={['#2EDDA7']}
            _hover={{
              bg: ['#325860'],
            }}
          >
            REGISTRARSE
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg={['#197C5E', '#197C5E', 'transparent', 'transparent']}
      my="-25px"
      // position="fixed"
      // top="1"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
