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
        		<Text alignContent='center' fontSize="xl">Acerca De Roots</Text>
				<Text alignContent='center'>
        Roots es una plataforma que permite a los niños con autismo comunicarse con sus tutores y desarrollar habilidades de lenguaje
        </Text>
      		</Box>

			<Box  wordBreak="break-word" minHeight="128px">
				<Text alignContent='center' fontSize="xl">Links</Text>
				<Text><Link href='http://www.talkroots.tk'>Roots</Link></Text>
				<Text><Link>Terms & Conditions</Link></Text>
				<Text><Link>Privacy Policy</Link></Text>
     		</Box>

			<Box  wordBreak="break-word" minHeight="128px">
				<Text alignContent='center' fontSize="xl">Herramientas</Text>
				<Text><Link href='https://arasaac.org/'>Arasaac</Link></Text>
				<Text><Link href='https://www.pictosonidos.com/'>PictoSonidos</Link></Text>
      		</Box>

			<Box wordBreak="break-word" minHeight="128px">
				<Text alignContent='center' fontSize="xl">Socios</Text>
				<Text><Link href = 'https://holbertonschool.com'>HolbertonSchool</Link></Text>
      		</Box>
		</SimpleGrid>
		<Center padding="20px">Copyright © 2021-{" "}
  		<Link href="#"> Roots</Link>
		</Center>
    </Box>
);

export default Footer;
