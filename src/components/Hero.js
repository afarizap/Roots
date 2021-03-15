import React from "react"
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
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        mb={10}
        backgroundImage={
          'url(https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Flanding.jpg?alt=media&token=806daca8-f428-4715-bc62-841b9b0a887f)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          align="left"
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
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Show me more
              </Button>
              <Button
                bg={'whiteAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}>
                Try board
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }

  
