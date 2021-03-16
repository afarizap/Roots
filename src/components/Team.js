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
            Roots {' '}
            <Text as={'span'} color={'#2EDDA7'}>
            Team
            </Text>
            <Text
              color={useColorModeValue('gray.800', 'white')}
              fontWeight={300}
              lineHeight={1.2}
              mt="30px"
              fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
              fontFamily={'body'}>
              We have a strong and knowledgeable as our team. So here are the men and women who helped make this project possible.
            </Text>
          </Heading>
          <Stack
           direction="row">

          <SimpleGrid
                gap={5}
                columns={5}
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
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FTeam%2Fmanuel.png?alt=media&token=04de508d-fbfa-4d64-b579-981811be7636'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Manuel Torres
                      </Heading>
                      <Text color={'gray.500'}>Full-Stack Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
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
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FTeam%2Falison.jpg?alt=media&token=68975e6f-13f6-4adb-a3be-316a97632411'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={7}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Alison Quintero
                      </Heading>
                      <Text color={'gray.500'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
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
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FTeam%2Fsantiago.png?alt=media&token=7e023900-d375-4818-bdf6-f6aa19279345'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Santiago Mendieta
                      </Heading>
                      <Text color={'gray.500'}>DevOps Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
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
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FTeam%2Fandres.png?alt=media&token=a8789ada-3ec5-4a49-bc66-d68443de09cb'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Andres Ariza
                      </Heading>
                      <Text color={'gray.500'}>Back-End Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
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
                        'https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FTeam%2Fgustavo.png?alt=media&token=793e4b48-5cdf-4f85-a2e3-ff13b1ffe4a8'
                      }
                      alt={'Author'}
                      css={{
                        border: '2px solid white',
                      }}
                    />
                  </Flex>

                  <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                      <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={useColorModeValue('white', 'gray.800')}>
                        Gustavo Mejía
                      </Heading>
                      <Text color={'gray.500'}>Back-End Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
                      <Stack spacing={0} align={'center'}>
                        <Text fontWeight={600}>23k</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                          Followers
                        </Text>
                      </Stack>
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