import React from 'react';
import { Box, Textarea, SimpleGrid} from '@chakra-ui/react';

const Divtext = () => (
<Box>
    <SimpleGrid
      gap={3}
      columns={12}
      minChildWidth={128}
      overflow="visible"
      mx='80px'
      border={2}
    > 
      <Box borderRadius="10px" boxShadow="dark-lg" bg="#E6E6E6" wordBreak="break-word" minHeight="128px">
        <Textarea borderRadius="10px" h="100%" placeholder="Type something..." />
      </Box>
    </SimpleGrid>
    </Box>
)

export default Divtext;