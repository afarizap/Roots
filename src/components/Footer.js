import React from 'react';
import { Link, Box, Center, SimpleGrid, Image, Text} from '@chakra-ui/react';

import { ColorModeSwitcher } from './styles/ColorModeSwitcher';

const Footer = () => (
    <Box
	borderTop="solid 1px #BDDEE5"
	mx="80px"
    mt={15}
    minHeight="100px"
    >
  		<SimpleGrid
      	gap={12}
      	columns={6}
      	minChildWidth={128}
      	overflow="visible"
      	border={2}
		mx="80px"
		padding="30px"
		alignContent="center"
    	> 
			<Box wordBreak="break-word" minHeight="128px">
            	<Image
              	px="1"
              	boxSize="100%"
              	w="60%"
              	src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FInicio%2Ficon.svg?alt=media&token=07f93f67-6f9e-4f14-ba7d-8bfcd689ee5f"
              	alt=""
            	/>
      		</Box>

			<Box wordBreak="break-word" minHeight="128px">
        		<Text alignContent='center' fontSize="xl">About Roots</Text>
				<Text alignContent='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      		</Box>

			<Box  wordBreak="break-word" minHeight="128px">
				<Text alignContent='center' fontSize="xl">Links</Text>
				<Text><Link>rootblablabla.com</Link></Text> 
				<Text><Link>Terms & Conditions</Link></Text> 
				<Text><Link>Privacy Policy</Link></Text> 
     		</Box>

			<Box  wordBreak="break-word" minHeight="128px">
				<Text alignContent='center' fontSize="xl">Tools</Text>
				<Text><Link>businessgrowth.com</Link></Text> 
				<Text><Link>Lorem.com</Link></Text> 
				<Text><Link>blabla.net</Link></Text>
      		</Box>

			<Box wordBreak="break-word" minHeight="128px">
				<Text alignContent='center' fontSize="xl">Partners</Text>
				<Text><Link>lorem.com</Link></Text> 
				<Text><Link>lorem.com</Link></Text> 
				<Text><Link>rootsbla.gov</Link></Text>
      		</Box>
		</SimpleGrid>
		<Center padding="20px">Copyright © 2021-{" "}
  		<Link href="#"> Roots</Link>
		</Center>
    </Box>
);

export default Footer;