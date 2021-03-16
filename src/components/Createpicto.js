import React from 'react';
import { Box, Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  FormLabel,
  Select,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
    } from '@chakra-ui/react';
import { db } from '../features/firebase';


const initialFormData = Object.freeze({
      type: "",
      theme: "",
      word: "",
      imgURL: "",
    })

  const CreatePicto = () => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
    };

   const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData);
      // ... submit to API or something
      console.log(formData.word, formData.theme, formData.imgURL, formData.type)
       db.collection("pictos").add({
         word: formData.word,
         type: formData.type,
         soundURL: "",
         imgURL: formData.imgURL,
         categoty: formData.theme,
       })

    };

    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    return (
      <>
      <Box>
        <Button width="100%" colorScheme="green" onClick={onOpen}>
        Crear Mi Pictograma
        </Button>
        <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Mi Picto!
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="owner">Categoría</FormLabel>
                  <Select id="owner" defaultValue="Choose" 
                         name="type"
                         onChange={handleChange}
                         >
                        <option value="Choose">Elegir</option>
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
                </Box>

                <Box>
                  <FormLabel htmlFor="owner">Tema</FormLabel>
                  <Select id="owner"
                        defaultValue="Choose"
                        name="theme"
                        onChange={handleChange}
                        >
                        <option value="Choose">Elegir</option>
                        <option value="School">Interacciones</option>
                        <option value="Sports">Hogar</option>
                        <option value="Things">Dormitorio</option>
                        <option value="Bathroom">Baño</option>
                        <option value="Places">Escuela</option>
                        <option value="Animals">Comida</option>
                        <option value="Household">Bebidas</option>
                        <option value="School">Animales Acuaticos</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="title">Titulo</FormLabel>
                  <Input
                    ref={firstField}
                    id="title"
                    placeholder="Ingrese el título"
                    name="word"
                    onChange={handleChange}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="url">Imagen Svg</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type="url"
                      id="url"
                      placeholder="Ingrese la dirección"
                      name="imgURL"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="blue" onClick={handleSubmit}>Enviar</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </Box>
      </>
    )
}



export default CreatePicto;
