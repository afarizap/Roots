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
import { box } from 'tweetnacl';

function Createpicto() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const [placement, setPlacement] = React.useState("right")
  
    return (
      <>
      <Box mx="80px">
        <Button width="100%" colorScheme="green" onClick={onOpen}>
        Create Pictogram
        </Button>
        <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
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
                  <Select id="owner" defaultValue="Choose">
                        <option value="Choose">Choose</option>
                        <option value="School">Verbs</option>
                        <option value="Bathroom">Nouns</option>
                        <option value="Places">Adjectives</option>
                        <option value="Things">Pronouns</option>
                  </Select>
                </Box>

                <Box>
                  <FormLabel htmlFor="owner">Select Theme</FormLabel>
                  <Select id="owner" defaultValue="Choose">
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
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </Box>
      </>
    )
}

export default Createpicto;