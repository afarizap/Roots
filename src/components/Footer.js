import React from 'react';
import { Link, Box, Center, SimpleGrid, Image, Text, Container} from '@chakra-ui/react';

const Footer = () => (
	<Container maxW={'6xl'}>
		<Box
		borderTop="solid 1px #BDDEE5"
		mt={15}
		minHeight="100px"
		>
			<SimpleGrid
			gap={12}
			columns={12}
			minChildWidth={128}
			overflow="visible"
			border={2}
			padding="30px"
			alignItems="center top"
			// fontSize={{ base: 'xl', sm: '3xl', md: '5xl' }}
			>
				<Box wordBreak="break-word" minHeight="120px" align="center">
					<Image
					px="1"
					boxSize="100%"
					w="80%"
					src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FInicio%2Ficon.svg?alt=media&token=07f93f67-6f9e-4f14-ba7d-8bfcd689ee5f"
					alt=""
					/>
				</Box>

				<Box wordBreak="break-word" minHeight="128px">
					<Text alignContent='center' fontSize="xl">Acerca De Roots</Text>
					<Text alignContent='center'>
			Roots es una herramienta que permite que niños dentro del espectro del autismo puedan desarrollar habilidades de lenguaje y la comunicación con sus tutores.
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
			<Center mb="40px">Copyright © 2021-{" "}
			<Link href="#"> Roots</Link>
			</Center>
		</Box>
	</Container>
);

export default Footer;
