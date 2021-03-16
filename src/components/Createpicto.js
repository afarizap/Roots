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
        Create Pictogram
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
              My Own Picto!
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="owner">Select Category Or</FormLabel>
                  <Select id="owner" defaultValue="Choose" 
                         name="type"
                         onChange={handleChange}
                         >
                        <option value="Choose">Choose</option>
                        <option value="verbs">Verbs</option>
                        <option value="nouns">Nouns</option>
                        <option value="adjetives">Adjectives</option>
                        <option value="pronouns">Pronouns</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="owner">Select Theme</FormLabel>
                  <Select id="owner"
                        defaultValue="Choose"
                        name="theme"
                        onChange={handleChange}
                        >
                        <option value="Choose">Choose</option>
                        <option value="School">School</option>
                        <option value="Bathroom">Bathroom</option>
                        <option value="Places">Places</option>
                        <option value="Things">Things</option>
                        <option value="Animals">Animals</option>
                        <option value="Household">Household</option>
                        <option value="Food">Food</option>
                        <option value="Sports">Sports</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input
                    ref={firstField}
                    id="title"
                    placeholder="Please enter title"
                    name="word"
                    onChange={handleChange}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="url">Image</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type="url"
                      id="url"
                      placeholder="Please enter image"
                      name="imgURL"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </Box>
      </>
    )
}



export default CreatePicto;
