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
         category: formData.type,
         theme: formData.theme,
         soundURL: "",
         imgURL: formData.imgURL,
       })
       onClose()
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
                        <option value="Elegir">Elegir</option>
                        <option value="Sustantivo">Sustantivo</option>
                        <option value="Adjetivo">Adjetivo</option>
                        <option value="Verbo">Verbo</option>
                        <option value="Adverbio">Adverbio</option>
                        <option value="Pronombre">Pronombre</option>
                        <option value="Preposición">Preposición</option>
                        <option value="Conjunción">Conjunción</option>
                        <option value="Interjección">Interjección</option>
                        <option value="Artículo">Artículo</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="owner">Tema</FormLabel>
                  <Select id="owner"
                        defaultValue="Choose"
                        name="theme"
                        onChange={handleChange}
                        >
                        <option value="Acción">Elegir</option>
                        <option value="Interacciones">Interacciones</option>
                        <option value="Salud">Salud</option>
                        <option value="Nuestro Cuerpo">Nuestro Cuerpo</option>
                        <option value="Hogar">Hogar</option>
                        <option value="Dormitorio">Dormitorio</option>
                        <option value="Baño">Baño</option>
                        <option value="Higiene">Higiene</option>
                        <option value="Escuela">Escuela</option>
                        <option value="Cocina">Cocina</option>
                        <option value="Comida">Comida</option>
                        <option value="Bebidas">Bebidas</option>
                        <option value="Animales Acuaticos">Animales Acuaticos</option>
                        <option value="Deportes">Deportes</option>
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
