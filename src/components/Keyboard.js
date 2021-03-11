import React from 'react';
import { Box, Grid, GridItem, Center, Textarea, Button, ButtonGroup, Image} from '@chakra-ui/react';

const Keyboard = () => (
  <Box mx='80px'>
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
        src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Fhi.svg?alt=media&token=e74f386f-4e54-455d-879b-f0f69925fec8"
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
        src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FGoodbye.svg?alt=media&token=184231b8-444c-4b6f-be32-634ce8b779a5"
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
