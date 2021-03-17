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

  import {Button as StyleButton} from 'react-bootstrap'; // Replace component with another name

const Team = () => (
    <Container maxW={'6xl'}>

      
        <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        my="20">
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
              Tenemos un gran conocimiento como equipo entre hombres y mujeres para hacer este proyecto posible
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
                      'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
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
                      'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
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
                      'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                  />
                  <Flex justify={'center'} mt={-12}>
                    <Avatar
                      size={'xl'}
                      src={
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FEquipo%2Fsantiago.png?alt=media&token=88b53f77-5075-4fcb-97d7-bd7b7a4c37aa'
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
                      'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
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
                      'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
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
                      <Text color={'gray.500'}>Desarrollador</Text>
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
    </Container>
);

export default Team;
