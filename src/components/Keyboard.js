import React from 'react';
import { Box, Grid, GridItem, Center, Textarea, Button,  Image} from '@chakra-ui/react';

const Keyboard = () => (
  <Box mx='30px'>
    <Center fontSize='40px' alignContent='center' my='20px'>Go!</Center>
  
  <Grid
    templateRows="repeat(12, 1fr)"
    templateColumns="repeat(12, 1fr)"
    gap={3}
  >
  <GridItem borderRadius="10px" rowSpan={1} colSpan={12} bg="tomato">
    <Textarea borderRadius="10px" h="100%" placeholder="Type something..." />
  </GridItem>
  <GridItem borderRadius="10px" rowSpan={8} colSpan={2} bg="tomato">
  
  </GridItem>
  <GridItem borderRadius="10px" colSpan={2} bg="#AFFEEB">
  <Button w="100%" h="100%" colorScheme="teal" variant="solid">
    <Box>
      <Image
        boxSize="100%"
        w="100%"
        src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Fhello.svg?alt=media&token=510a2b67-828d-4ed8-9cd7-a8ebe60c3a20"
        alt=""
      />
    </Box>
    <Center alignContent='center'>Hello!</Center>
  </Button>
  </GridItem>
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB">
  <Button w="100%" h="100%" colorScheme="teal" variant="solid">
    <Box>
      <Image
        boxSize="100%"
        w="100%"
        src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Fgoodbye.svg?alt=media&token=a2e3ed03-d744-41fd-889b-e8ad34dc78c3"
        alt=""
      />
    </Box>
    <Center alignContent='center'>Bye!</Center>
  </Button>
  </GridItem>
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  <GridItem  borderRadius="10px" colSpan={2} bg="#AFFEEB" />
  </Grid>
  </Box>
);

export default Keyboard;