import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    SimpleGrid,
    AspectRatio,
    Link,
  } from '@chakra-ui/react';
  import { FcDonate, FcAdvance, FcAbout, FcAdvertising} from 'react-icons/fc';
  import {Button as Buttonet, Card, Accordion} from 'react-bootstrap'; // Replace component with another name
  import 'bootstrap/dist/css/bootstrap.min.css';

  interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
  }
  
  const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={useColorModeValue('black', 'white')}>{text}</Text>
      </Stack>
    );
  };
  
  export default function Home() {
    return (
      <Container maxW={'6xl'}>

        <Stack
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text
            textTransform={'uppercase'}
            color={useColorModeValue('red.400', '#2EDDA7')}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('red.50', 'transparent')}
            alignSelf={'flex-start'}
            rounded={'md'}
            mb="-6">
            Intro
          </Text>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '1xl', sm: '2xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}>
                Comunicación Aumentativa
              </Text>
              <br />
              <Text as={'span'} color={'#2EDDA7'}>
              Una Nueva Alternativa
              </Text>
            </Heading>
            <Text color={useColorModeValue('black', 'white')}>
            Sabemos que existe una enorme barrera en la comunicación de niños con trastorno del espectro Autista y sus cuidadores, es por eso que hemos decidido crear una herramienta que pueda satisfacer con estas necesidades dándote un soporte al permitir la comunicación autónoma de tu hijo por medio de pictogramas, para ello tendrás disponible el tablero Roots en el cual con solo pulsar algunos botones podrás comenzar a comunicarte con el mundo fácilmente. 
            <br/>
            </Text>
            <Text as="em" color={useColorModeValue('grey', 'white')} fontWeight={400}>
              "No estás solo" -
              
              <Text as={'span'} color={useColorModeValue('black', '#2EDDA7')}>
              {' '}Comunidad Roots
              </Text>
            </Text>
          </Stack>
          <Flex
            flex={1.2}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            
            <Box
              position={'relative'}
              height={'400px'}
              rounded={'xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>


        {/*CARDS*/}
        <Box>
          <Stack
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Text
              textTransform={'uppercase'}
              color={useColorModeValue('red.400', '#2EDDA7')}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('red.50', 'transparent')}
              alignSelf={'center'}
              rounded={'md'}
              mb="-8">
              Soporte
            </Text>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}
              align="center">
              <Text
                as={'span'}
                position={'relative'}>
                Información
              </Text>
            </Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="40px">
            <Card style={ {background: useColorModeValue('white', 'transparent')}, {boxShadow: useColorModeValue('5px 10px 18px #B8B8B8', '5px 10px 18px #000934')}}>
                <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FInicio%2FCard1.jpg?alt=media&token=4a5a5f16-13bd-46e8-aa4e-72028c3ce403" />
                <Card.Body style={{color: 'black'}}>
                  <Card.Title>¿Qué es el Autismo?</Card.Title>
                  <Card.Text>
                    El autismo o trastorno del espectro autista (T.E.A) se refiere a una amplia gama de condiciones que provocan retos en las habilidades sociales, comportamientos repetitivos y dificultades para comunicarse verbalmente y no verbalmente.
                  </Card.Text>
                  <Box pt="5">
                  <Buttonet variant="primary">Más</Buttonet>
                  </Box>
                </Card.Body>
            </Card>

            <Card style={ {background: useColorModeValue('white', 'transparent')}, {boxShadow: useColorModeValue('5px 10px 18px #B8B8B8', '5px 10px 18px #000934')}}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80" />
              <Card.Body style={{color: 'black'}}>
                <Card.Title>¿Cuáles son sus Signos?</Card.Title>
                <Card.Text>
                  Se puede empezar a observar indicios a partir de los 2 o 3 años. Algunos problemas tempranos pueden aparecer desde antes. Desde el mes 18. Investigaciones han demostrado que una intervención temprana puede generar resultados positivos más adelante en la vida del niño.
                </Card.Text>
                <Box pt="5">
                <Buttonet variant="primary">Más</Buttonet>
                </Box>
              </Card.Body>
            </Card>

            <Card style={ {background: useColorModeValue('white', 'transparent')}, {boxShadow: useColorModeValue('5px 10px 18px #B8B8B8', '5px 10px 18px #000934')}}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
              <Card.Body style={{color: 'black'}}>
                <Card.Title>Eventos</Card.Title>
                <Card.Text>
                  La Liga Colombiana de Autismo es una organización con más de 11 años de experiencia como referencia para eventos, encuentros y congresos. Están para las necesidades y para dar igualdad de oportunidades a todas las personas
                </Card.Text>
                <Box pt="5">
                <Buttonet variant="primary">Más</Buttonet>
                </Box>
              </Card.Body>
            </Card>
        </SimpleGrid>
        </Stack>
        </Stack>
        </Box>




        <Stack
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
            <Flex
            flex={1.1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            
            <Box
              position={'relative'}
              height={'400px'}
              rounded={'xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                }
              />
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text
            textTransform={'uppercase'}
            color={useColorModeValue('red.400', '#2EDDA7')}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('red.50', 'transparent')}
            alignSelf={'flex-start'}
            rounded={'md'}
            mb="-9">
            Acerca De
          </Text>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#2EDDA7',
                  zIndex: -1,
                }}>
                Diseñada para tí,
              </Text>
              <br />
              <Text as={'span'} color={'#2EDDA7'}>
              Explora sus Beneficios
              </Text>
            </Heading>

            
            <Accordion defaultActiveKey="0" style={{color: useColorModeValue('black', 'white')}}>
            <Text color={useColorModeValue('black', 'white')} mb="15px">
            Aquí podrás ver algunos de los beneficios que obtienes al usar Roots.
            </Text>
              <Card bg="transparent" as="abbr">
                <Accordion.Toggle as={Card.Header} eventKey="0" style={{background: useColorModeValue('#0b986a', '#4dc493')}}>
                + Mejora tus habilidades
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Con Roots, desarrollarás tus habilidades lingüísticas y aprenderás a expresarte por tí mismo.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="transparent">
                <Accordion.Toggle as={Card.Header} eventKey="1" style={{background: useColorModeValue('#32ae7e', '#32ae7e')}}>
                + Aprende nuevo Vocabulario
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                  Con una base de datos más de 100 palabras entre objetos, acciones.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card bg="transparent">
                <Accordion.Toggle as={Card.Header} eventKey="2" style={{background: useColorModeValue('#4dc493', '#0b986a')}}>
                + Comunicate facilmente
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                  Navegar y utilizar esta aplicación resulta realmente sencillo gracias a sus funciones inteligentes y a un práctico diseño.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Stack>
        </Stack>


        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={{ base: 20, md: 27 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text
            textTransform={'uppercase'}
            color={useColorModeValue('red.400', '#2EDDA7')}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('red.50', 'transparent')}
            alignSelf={'flex-start'}
            rounded={'md'}
            mb="-9">
            Demostración
          </Text>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#2EDDA7',
                  zIndex: -1,
                }}>
                Aprende,
              </Text>
              <br />
              <Text as={'span'} color={'#2EDDA7'}>
                Hazte Escuchar!
              </Text>
            </Heading>
            <Text color={useColorModeValue('black', 'white')}>
            Descubre más acerca de esta herramienta!
            <br />
            En este corto video te mostraremos sus principales funcionalidades y algunos de los beneficios más resaltantes que tiene para ti.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Link to="/keyboard">
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'red'}
                  bg={'#2EDDA7'}
                  _hover={{ bg: 'red.500' }}>
                  Vamos!
                </Button>
              </Link>
              <Button
              px={6}
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}>
                <Link href="https://www.youtube.com/watch?v=1aPUyiU04vE" isExternal>Como Funciona</Link>
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1.1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            
            <Box
              position={'relative'}
              height="337px"
              rounded={'xl'}
              boxShadow={'2xl'}
              width={'600px'}
              overflow={'hidden'}>
              <IconButton
                aria-label={'Play Button'}
                variant={'ghost'}
                _hover={{ bg: 'transparent' }}
                icon={<PlayIcon w={12} h={12} />}
                size={'lg'}
                color={'white'}
                position={'absolute'}
                left={'50%'}
                top={'50%'}
                transform={'translateX(-50%) translateY(-50%)'}
              />
              <AspectRatio
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                ratio={1}
                >
                  <iframe
                    title="Demo"
                    src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2FInicio%2FROOTSS.mp4?alt=media&token=ad71be50-80f5-4d39-b3af-7710c9c26871"
                    allowFullScreen/>
                </AspectRatio>
            </Box>
          </Flex>

        </Stack>




        <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            pt={{ base: 20, md: 28 }}
            pb="20">            
            <Box position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              padding={'30px'}
              width={'full'}
              overflow={'hidden'}
              bg={useColorModeValue('blue.50', 'trasnparent')}
              color={useColorModeValue('black', 'white')}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
            <Feature
              icon={<Icon as={FcAdvance} w={10} h={10} />}
              title={'El Desarrollo'}
              text={
                'Roots es una plataforma abierta licenciada con MIT.'
              }
            />
            <Feature
              icon={<Icon as={FcDonate} w={10} h={10} />}
              title={'Donaciones Ilimitadas'}
              text={
                'Si te gustó éste proyecto, puedes aportar voluntariamente, éstas donaciones nos servirán para darle mantenimiento a ésta plataforma.'
              }
            />
            <Feature
              icon={<Icon as={FcAbout} w={10} h={10} />}
              title={'Las Oportunidades'}
              text={
                'El TEA cambia vidas y nosotros queremos ayudarlos a superar esos retos de la mejor manera'
              }
            />
            <Feature
              icon={<Icon as={FcAdvertising} w={10} h={10} />}
              title={'Contacto'}
              text={
                'Para contactarnos pueden dirigirse a EQUIPO o pueden enviar un correo a support@talkroots.tk'
              }
            />
          </SimpleGrid>
        </Box>
          </Flex>

      </Container>
    );
  }
  
  const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d:
      'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
  });
  
  export const Blob = (props: IconProps) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };
