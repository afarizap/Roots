import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    ReachLink,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FInicio%2FHero.jpg?alt=media&token=f6d15ef0-07be-422c-a86a-dc1ecb0e82bd)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          // align="left"
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              id="js-rotating"
              fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}>
              ¡EXPRÉSATE!
            </Text>
            <Text
              color={'white'}
              fontWeight={300}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
              Roots es una plataforma que permite a los niños con autismo comunicarse con sus tutores y desarrollar habilidades de lenguaje
            </Text>
            <Stack direction={'row'}>
              <Link to="/team">
                <Button
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}>
                  Ver Más
                </Button>
              </Link>

              <Link to="/keyboard">
                <Button
                  bg={'whiteAlpha.300'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'whiteAlpha.500' }}>
                  Probar ROOTS
                </Button>
              </Link>
              
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }

  
