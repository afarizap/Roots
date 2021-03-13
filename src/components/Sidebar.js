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
    } from '@chakra-ui/react';
import { box } from 'tweetnacl';

function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState("left")
  
    return (
      <>
      <Box mx="80px">
        <Button width="100%" colorScheme="green" onClick={onOpen}>
          Discover
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px" textAlign="center">Topics</DrawerHeader>
              <DrawerBody>
                  <Box>
                    <Box>
                        <Button my="5px" width="100%">Verbs</Button>
                    </Box>
                    <Box>
                        <Button my="5px" width="100%">Nouns</Button>
                    </Box>
                    <Box>
                        <Button my="5px" width="100%">Adjectives</Button>
                    </Box>
                    <Box>
                        <Button my="5px" width="100%">Pronouns</Button>
                    </Box>
                    <Box>
                        <Button my="5px" width="100%">Spell</Button>
                    </Box>
                    <Box>
                        <Button my="5px" width="100%" bg="tomato">
                            <FormLabel htmlFor="owner">Themes</FormLabel>
                        </Button>
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