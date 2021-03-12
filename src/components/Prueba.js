import React from "react";
import { ChakraProvider, SimpleGrid, Box, GridItem, Button, Image, Center } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider resetCSS>
    <SimpleGrid
      // h="128px"
      // templateRows="repeat(1, 1fr)"
      // templateColumns="repeat(1, 1fr)"
      gap={2}
      //columns={12}
      minChildWidth={128}
      overflow="visible"
      // columns={12}
      // spacingX={1}
      // spacingY={1}
      // ml={128}
      // mr={10}
      // mt={10}
      // mb={10}
      //p={2}
      // maxWidth={1024}
      // maxHeight={600}
      color="green.500"
      bgGradient="linear(to bottom right, green.100,blue.100)"
      border={2}
      borderRadius={12}

    >
      <Box boxShadow="dark-lg" backgroundColor="gray.500" wordBreak="break-word" minHeight="128px">
        One
      </Box>
      <Box boxShadow="dark-lg"
        backgroundColor="yellow.500"
        minHeight="128px"
        wordBreak="break-word"
      >
        Two
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="blue.500" minHeight="128px" wordBreak="break-word">
		<Button w="100%" h="100%" colorScheme="teal" variant="solid">
    	<Box boxShadow="l">
      	<Image
        	boxSize="100%"
        	w="100%"
        	src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Fhi.svg?alt=media&token=e74f386f-4e54-455d-879b-f0f69925fec8"
        	alt=""
      	/>
    	</Box>
    <Center alignContent='center'>Hello!</Center>
  </Button>
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="green.500" minHeight="128px" wordBreak="break-word">
        Four
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="tail.500" minHeight="128px" wordBreak="break-word">
        Five
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="blue.500" minHeight="128px" wordBreak="break-word">
        Six
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="green.500" minHeight="128px" wordBreak="break-word">
        Seven
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Eight
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Nine
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Ten
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Eleven
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Twelve
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Thirthin
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Fourteen
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Fifteen
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="blue.500" minHeight="128px" wordBreak="break-word">
        Sixteen
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        Eighteen
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="gray.500" minHeight="128px" wordBreak="break-word">
        nineteen
      </Box>
      <Box boxShadow="dark-lg" backgroundColor="pink.500" minHeight="128px" wordBreak="break-word">
        Twenty
      </Box>

      {/* <GridItem rowSpan={2} colSpan={1} bg="tomato" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={2} bg="papayawhip" />
      <GridItem colSpan={4} bg="tomato" /> */}
    </SimpleGrid>
  </ChakraProvider>
);

export default App;
