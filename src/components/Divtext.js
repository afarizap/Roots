import React from 'react';
import { Heading,  Box, Container, Text, Stack, SimpleGrid } from '@chakra-ui/react';

const Divtext = () => (
    
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
            <Text as={'span'} color={'#2EDDA7'}>
            !
            </Text>
            Vamos
            <Text as={'span'} color={'#2EDDA7'}>
            !
            </Text>
          </Heading>
          </Stack>
      <SimpleGrid
        gap={3}
        columns={12}
        minChildWidth={128}
        overflow="visible"
        border={2}
      > 
        {/* <Box borderRadius="10px" boxShadow="dark-lg" bg="#E6E6E6" wordBreak="break-word" minHeight="128px"> */}
        {/*   <Textarea boderRadius="10px" h="100%" placeholder="Type something..." /> */}
        {/* </Box> */}
      </SimpleGrid>
    </Container>
)

export default Divtext;
