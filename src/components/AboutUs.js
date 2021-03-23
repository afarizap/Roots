import React from 'react';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

const AboutUs = () => (
    
    <Container maxW={'6xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        my="20">
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Our {' '}
            <Text as={'span'} color={'#2EDDA7'}>
            Idea
            </Text>
          </Heading>
          </Stack>
    </Container>
)

export default AboutUs;
