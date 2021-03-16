import React from 'react';
import { Box, Center, Button,  Image, SimpleGrid, Container, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton } from '@chakra-ui/react';

import { db } from '../features/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore'


function Keyboard() {
  const [words] = useCollectionData(db.collection('pictos'));

if (words) {
  return ( 
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
                    src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Fhello.svg?alt=media&token=510a2b67-828d-4ed8-9cd7-a8ebe60c3a20"
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
  );
}

return( <Container>Loading please wait...</Container>
);
}

export default Keyboard;
