import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head';
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
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
      /*
      <Carousel fade>
        <Carousel.Item>
          <img width={'100%'} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Flanding.jpg?alt=media&token=806daca8-f428-4715-bc62-841b9b0a887f" />
          <Carousel.Caption>
            <h3 style={{color: 'red'}}>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={'100%'} alt="900x500" src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
          
          <Carousel.Caption justify={'center'}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={'100%'} alt="900x500" src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Ffondo.jpg?alt=media&token=225f791d-3ea4-4641-90a7-befbbc35f4cb" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>*/

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
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              YOU'RE NOT ALONE
            </Text>
            <Text
              color={'white'}
              fontWeight={300}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}>
              Roots is an application that allows children with autism problems to communicate daily with their caregivers and also develop language skills
            </Text>
            <Stack direction={'row'}>
              <Link to="/team">
                <Button
                  bg={'blue.400'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'blue.500' }}>
                  Show me more
                </Button>
              </Link>

              <Link to="/keyboard">
                <Button
                  bg={'whiteAlpha.300'}
                  rounded={'full'}
                  color={'white'}
                  _hover={{ bg: 'whiteAlpha.500' }}>
                    Try board  
                </Button>
              </Link>
              
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }

  
