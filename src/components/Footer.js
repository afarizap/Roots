import React from 'react';
import { Link, Box, Center, SimpleGrid, Button, Image, Text} from '@chakra-ui/react';

import { ColorModeSwitcher } from './styles/ColorModeSwitcher';

const Foot = () => (
    <Box
		bg={['#E9E9E9', '#E9E9E9', '#E9E9E9', '#E9E9E9']}
		borderTop="solid #E9E9E9"
		color="#393939"
    mt={10}
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
        <Text alignContent='center' fontSize="xl">About Roots</Text>
				<Text alignContent='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </Box>

			<Box ml="70px" wordBreak="break-word" minHeight="128px">
				<Text alignContent='center' fontSize="xl">Links</Text>
				<Text><Link>rootblablabla.com</Link></Text> 
				<Text><Link>Terms & Conditions</Link></Text> 
				<Text><Link>Privacy Policy</Link></Text> 
      </Box>

			<Box ml="50px" wordBreak="break-word" minHeight="128px">
				<Text alignContent='center' fontSize="xl">Tools</Text>
				<Text><Link>businessgrowth.com</Link></Text> 
				<Text><Link>Lorem.com</Link></Text> 
				<Text><Link>blabla.net</Link></Text>
      </Box>

			<Box ml="50px" wordBreak="break-word" minHeight="128px">
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

export default Foot;