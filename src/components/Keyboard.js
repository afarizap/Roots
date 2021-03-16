import React from 'react';
import { Box, Center, Button,  Image, SimpleGrid, Container, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react';

import { db } from '../features/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore'


function Keyboard() {
  const [words] = useCollectionData(db.collection('pictos'));

if (words) {
  return (
    <Container maxW={'6xl'}>
    <SimpleGrid gap={3}
      columns={12}
      minChildWidth={128}
      overflow="visible"
      border={2}>

      {words.map((words) => (
        <Box padding="0.5" borderRadius="10px" boxShadow="dark-lg" bg="#AFFEEB" wordBreak="break-word" minHeight="128px">
          <Popover>
            <PopoverTrigger>
              <Button w="100%" h="100%" colorScheme="teal" variant="solid" onClick={console.log("click")}>
                <Box>
                  <Image
                    px="2"
                    boxSize="100%"
                    w="100%"
                    src={words.imgURL}
                    alt=""
                  />
                  <Center alignContent='center' m={1}>{words.word}</Center>
                </Box>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Pressed!</PopoverHeader>
              <PopoverBody>{words.word}</PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
    ))}
    </SimpleGrid>
    </Container>
  );
}

return( <Container align="center" padding="100px">Loading please wait...</Container>
);
}

export default Keyboard;
