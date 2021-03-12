import React from 'react';
import { Box, Grid, GridItem, Center, Textarea, Button,  Image, SimpleGrid} from '@chakra-ui/react';

const Divtext = () => (
<Box>
    <Center mb="40px" fontSize="40px" alignContent='center'>GO!</Center>
    <SimpleGrid
      gap={3}
      columns={12}
      minChildWidth={128}
      overflow="visible"
      mx='80px'
      border={2}
    > 
      <Box borderRadius="10px" boxShadow="dark-lg" bg="tomato" wordBreak="break-word" minHeight="128px">
        <Textarea borderRadius="10px" h="100%" placeholder="Type something..." />
      </Box>
    </SimpleGrid>
    </Box>
)

export default Divtext;