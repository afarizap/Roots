import React from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';


function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = React.useState("left")

  return (
    <>
      <Box>
        <Button width="100%" colorScheme="green" onClick={onOpen}>
          Filtrar
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px" textAlign="center">Temas Y Categorías</DrawerHeader>
              <DrawerBody>
                <Box>
                  <Select
                    name="type"
                    bg="tomato"
                    borderColor="tomato"
                    color={useColorModeValue('black', 'white')}
                    placeholder="Categorías"
                  >
                    <option value="verbs">Sustantivo</option>
                    <option value="nouns">Adjetivo</option>
                    <option value="adjetives">Verbo</option>
                    <option value="pronouns">Adverbio</option>
                    <option value="verbs">Pronombre</option>
                    <option value="nouns">Preposición</option>
                    <option value="adjetives">Conjunción</option>
                    <option value="pronouns">Interjección</option>
                    <option value="pronouns">Artículo</option>
                  </Select>
                  <Box>
                    <Button my="5px" width="100%">Interacciones</Button>
                  </Box>
                  <Box>
                    <Button my="5px" width="100%">Hogar</Button>
                  </Box>
                  <Box>
                    <Button my="5px" width="100%">Dormitorio</Button>
                  </Box>
                  <Box>
                    <Button my="5px" width="100%">Baño</Button>
                  </Box>
                  <Box>
                    <Button my="5px" width="100%">Escuela</Button>
                  </Box>
                  <Box>
                    <Button my="5px" width="100%">Comida</Button>
                  </Box>
                  <Box>
                    <Button my="5px" width="100%">Bebidas</Button>
                  </Box>
                  <Box>
                    <Button my="5px" width="100%">Animales Acuaticos</Button>
                  </Box>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </>
  )
}

export default Sidebar;
