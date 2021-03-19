import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  useBreakpointValue,
  SimpleGrid,
  Link,
  } from '@chakra-ui/react';
import {Button as Buttonet, Card, Accordion, CardGroup} from 'react-bootstrap'; // Replace component with another name
import {Link as Next} from "react-router-dom";
import './styles/hover.css'

const Team = () => (
    <Container maxW={'6xl'}>

      
        <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        my="20"
        alignItems="center">
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Equipo {' '}
            <Text as={'span'} color={'#2EDDA7'}>
            Roots
            </Text>
            <Text
              color={useColorModeValue('gray.800', 'white')}
              fontWeight={300}
              lineHeight={1.2}
              mt="30px"
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
              fontFamily={'body'}>
              Tenemos grandes habilidades y fortalezas como equipo, siempre buscaremos brindarte la mejor experiencia
            </Text>
          </Heading>
          <Stack
           direction="row">

          <SimpleGrid
                gap={5}
                columns={{ base: 1, sm: 2, md: 5 }}
                overflow="visible"
                border={2}
                >
                  
                <Center py={6}>
                  <Box
                  maxW={'270px'}
                  w={'full'}
                  bg={useColorModeValue('gray.800', 'white')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}
                  maxH={'500px'}>
                  
                  <Image
                    h={'120px'}
                    w={'full'}
                    src={
                      'https://pbs.twimg.com/profile_banners/1204807289435250690/1606277971/1500x500'
                    }
                    objectFit={'cover'}
                  />
                  <Flex justify={'center'} mt={-12}>
                    <Avatar
                      size={'xl'}
                      src={
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2Fmanuel.png?alt=media&token=0a689f74-1962-44d7-8790-972abbfd383c'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Manuel Torres
                      </Heading>
                      <Text color={'gray.500'}>Desarrollador Back-End y Despliegue</Text>
                    </Stack>

                    <Stack mt={8} direction={'row'} spacing={4}>
                      <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 30%), 0 10px 10px -5px rgb(66 153 225 / 30%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        <Link href="https://twitter.com/ManuelCtrl" isExternal>Twitter</Link>
                      </Button>
                    </Stack>
                  </Box>
                  </Box>
              </Center>


              <Center py={6}>
                <Box
                  maxW={'270px'}
                  w={'full'}
                  bg={useColorModeValue('gray.800', 'white')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}>
                  <Image
                    h={'120px'}
                    w={'full'}
                    src={
                      'https://pbs.twimg.com/profile_banners/700898088840368128/1557417338/1500x500'
                    }
                    objectFit={'cover'}
                  />
                  <Flex justify={'center'} mt={-12}>
                    <Avatar
                      size={'xl'}
                      src={
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2Fandres.png?alt=media&token=dee86cde-6697-4279-8cf5-f92f530193a9'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Andres Ariza
                      </Heading>
                      <Text color={'gray.500'}>Desarrollador Back-End</Text>
                    </Stack>

                    <Stack mt={8} direction={'row'} spacing={4}>                      
                      <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 30%), 0 10px 10px -5px rgb(66 153 225 / 30%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        <Link href="https://twitter.com/ariza_rocks" isExternal>Twitter</Link>
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Center>


              <Center py={6}>
                <Box
                  maxW={'270px'}
                  w={'full'}
                  bg={useColorModeValue('gray.800', 'white')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}>
                  <Image
                    h={'120px'}
                    w={'full'}
                    src={
                      'https://pbs.twimg.com/profile_banners/1187466205612789760/1586810560/1500x500'
                    }
                    objectFit={'cover'}
                  />
                  <Flex justify={'center'} mt={-12}>
                    <Avatar
                      size={'xl'}
                      src={
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2Falison.jpg?alt=media&token=7d6c9984-8d38-469e-a856-b339e1abe536'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={7}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Alison Quintero
                      </Heading>
                      <Text color={'gray.500'}>Desarrolladora Front-End</Text>
                    </Stack>

                    <Stack mt={8} direction={'row'} spacing={4}>
                      <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 30%), 0 10px 10px -5px rgb(66 153 225 / 30%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        <Link href="https://twitter.com/AlisonQuinter17" isExternal>Twitter</Link>
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Center>


              <Center py={6}>
                <Box
                  maxW={'270px'}
                  w={'full'}
                  bg={useColorModeValue('gray.800', 'white')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}>
                  <Image
                    h={'120px'}
                    w={'full'}
                    src={
                      'https://pbs.twimg.com/profile_banners/700684899162820609/1585355856/1500x500'
                    }
                    objectFit={'cover'}
                  />
                  <Flex justify={'center'} mt={-12}>
                    <Avatar
                      size={'xl'}
                      src={
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2Fsantiago.jpg?alt=media&token=4b61e6fe-800c-4489-86c9-0f22c9fb526b'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Santiago Mendieta
                      </Heading>
                      <Text color={'gray.500'}>Desarrollador DevOps</Text>
                    </Stack>

                    <Stack mt={8} direction={'row'} spacing={4}>
                      <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 30%), 0 10px 10px -5px rgb(66 153 225 / 30%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        <Link href="https://twitter.com/sto_stat" isExternal>Twitter</Link>
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Center>


              <Center py={6}>
                <Box
                  maxW={'270px'}
                  w={'full'}
                  bg={useColorModeValue('gray.800', 'white')}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  overflow={'hidden'}>
                  <Image
                    h={'120px'}
                    w={'full'}
                    src={
                      'https://pbs.twimg.com/profile_banners/117183297/1593459196/1500x500'
                    }
                    objectFit={'cover'}
                  />
                  <Flex justify={'center'} mt={-12}>
                    <Avatar
                      size={'xl'}
                      src={
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2Fgustavo.png?alt=media&token=2b193a70-ab82-4bf7-8f0f-7ac4ed196a1e'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Gustavo Mejía
                      </Heading>
                      <Text color={'gray.500'}>Desarrollador Back-End</Text>
                    </Stack>

                    <Stack mt={8} direction={'row'} spacing={4}>                      
                      <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                          '0px 1px 25px -5px rgb(66 153 225 / 30%), 0 10px 10px -5px rgb(66 153 225 / 30%)'
                        }
                        _hover={{
                          bg: 'blue.500',
                        }}
                        _focus={{
                          bg: 'blue.500',
                        }}>
                        <Link href="https://twitter.com/im_tavo" isExternal>Twitter</Link>
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </Center>
              </SimpleGrid>

          </Stack>
        </Stack>

        <Heading
            fontWeight={600}
            fontSize={{ base: '1xl', sm: '3xl', md: '5xl' }}
            lineHeight={'110%'}
            mb="50px">
            Tecnologías
            <Text
              color={useColorModeValue('gray.800', 'white')}
              fontWeight={300}
              lineHeight={1.2}
              mt="30px"
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
              fontFamily={'body'}>
              Para desarrollar esta plataforma hicimos uso de las siguientes tecnologías:
            </Text>
          </Heading>

        <Stack alignItems="center">
        <CardGroup className="acordeon">
        <Card style={{ width: '18rem' }} className="card">
        <Image
          className="tecno-img-top"
          src='https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2FTecnolog%C3%ADas%2FFirebase.svg?alt=media&token=2daafd65-217b-4682-a91d-b35fe1827f85'
        />
          <Card.Body class="card-img-overlay">
            <Card.Title className="tecno-title">Firebase</Card.Title>
            <Card.Text className="tecno-text">
              Es un BaaS "Backend as a Service" que simplifica la creación y el acceso a la base de datos. 
            </Card.Text>
            <a href="#" class="stretched-link"></a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
        <Image
          className="tecno-img-top"
                    src='https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2FTecnolog%C3%ADas%2FReact.svg?alt=media&token=68e95dc4-32ab-44e6-8c54-74911db0d94a'
                  />
          <Card.Body class="card-img-overlay">
            <Card.Title className="tecno-title">React</Card.Title>
            <Card.Text className="tecno-text">
              Es una librería JavaScript de código abierto que ayuda a crear interfaces de usuarios interactivas.
            </Card.Text>
            <a href="#" class="stretched-link"></a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
        <Image
          className="tecno-img-top"
                    src='https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2FTecnolog%C3%ADas%2FChakraUI.svg?alt=media&token=2b7e49b9-bbd7-4ba6-93a4-0c12b62885e6'
                  />
          <Card.Body className="card-img-overlay">
            <Card.Title className="tecno-title">Chakra UI</Card.Title>
            <Card.Text className="tecno-text">
              Es una librería que ayuda a crear bloques de componentes necesarios para renderizar nuestra Web App de React.
            </Card.Text>
            <a href="#" class="stretched-link"></a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
        <Image
          className="tecno-img-top"
                    src='https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2FTecnolog%C3%ADas%2FTextospeech.svg?alt=media&token=912cf982-a704-4809-a22e-d5a4b30ddc1e'
                  />
          <Card.Body class="card-img-overlay">
            <Card.Title className="tecno-title">Text to Speech</Card.Title>
            <Card.Text className="tecno-text">
              La API de Web Speech tiene una interfaz de controlador principal para la síntesis de voz que permite recibir texto y reproducirlo desde el altavoz de un dispositivo. 
            </Card.Text>
            <a href="#" class="stretched-link"></a>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }} className="card">
        <Image
          className="tecno-img-top"
                    src='https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2FTecnolog%C3%ADas%2FBoostrap.svg?alt=media&token=b3828c08-a405-408a-abee-b5448c37d31c'
                  />
          <Card.Body class="card-img-overlay">
            <Card.Title className="tecno-title">Boostrap</Card.Title>
            <Card.Text className="tecno-text">
              Es una librería multiplataforma o conjunto de herramientas de código abierto para diseño.
            </Card.Text>
            <a href="#" class="stretched-link"></a>
          </Card.Body>
        </Card>
        </CardGroup>

        <Stack align="center" py="40px">
            <Box>
              <Next to="/home"><Buttonet variant="secondary">Atrás</Buttonet></Next>
              {' '}
              <Next to="/keyboard"><Buttonet variant="secondary">Siguiente</Buttonet></Next>
            </Box>
        </Stack>
      </Stack>
    </Container>
);

export default Team;
