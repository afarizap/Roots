import React from 'react';
import { Box, Center, Button,  Image, SimpleGrid, Container, Textarea, Grid, GridItem } from '@chakra-ui/react';

import { db } from '../features/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Sidebar from './Sidebar';
import Createpicto from './Createpicto';


function Keyboard() {
  const [words] = useCollectionData(db.collection('pictos'));
  let WordsArray = [];

  const handleClikButton = (e) => {
    WordsArray.push(e)
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 0.8; // 0.1 to 10
    msg.pitch =1.5; //0 to 2
    msg.text = e;
    msg.lang = 'es';
    speechSynthesis.speak(msg);
  }

  const handleClickText = (e) => {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voiceURI = 'native';
    msg.volume = 1; // 0 to 1
    msg.rate = 0.8; // 0.1 to 10
    msg.pitch =1.5; //0 to 2
    msg.text = e;
    msg.lang = 'es';
    speechSynthesis.speak(msg);
    // WordsArray = [];
  }

  const initialTextData = Object.freeze({
      words: "words",
      value: WordsArray,
  })

  const TextBox = () => {
    const [textData, updateTextData] = React.useState(initialTextData);

    const handleChange = (e) => {
      updateTextData({
        ...textData,
        [e.target.name]: e.target.value.trim()
      });
    };

   const handleSubmit = (e) => {
      console.log("this", textData);
      console.log("play audio please")
      // Text2Speech(YourSetting);
      console.log(e);
      handleClickText(WordsArray.join(' '));
   };

     return (
       <>
       <SimpleGrid
           gap={3}
           columns={12}
           minChildWidth={128}
           overflow="visible"
           border={2}
         > 
         <Box borderRadius="10px" boxShadow="dark-lg" bg="#E6E6E6" wordBreak="break-word" h="130px" color="black">
           <Textarea borderRadius="10px" h="100%" placeholder="Type something..." variant="ghost" onChange={handleChange} value={textData.value.join(' ').toLowerCase()} onClick={() => handleSubmit(words.word)}/>
         </Box>
       </SimpleGrid>

       </>
     );

   }


if (words) {
  return (
    <Container maxW={'6xl'} mb="100px">
    <TextBox />
    <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={4} my="4">
      <GridItem colSpan={6}><Sidebar /></GridItem>
      <GridItem colSpan={6}><Createpicto /></GridItem>
    </Grid>
    <SimpleGrid gap={3}
      columns={12}
      minChildWidth={128}
      overflow="visible"
      border={2}>

      {words.map((words, key=words.word) => (
        <Box padding="0.5" borderRadius="10px" boxShadow="dark-lg" bg="#AFFEEB" wordBreak="break-word" minHeight="128px">
         <Button w="100%" h="100%" colorScheme="teal" variant="solid" onClick={() => handleClikButton(words.word)}>
                <Box>
                  <Image
                    px="2"
                    boxSize="100%"
                    w="100%"
                    src={words.imgURL}
                    alt=""
                  />
                  <Center alignContent='center' m={1}>{words.word}</Center>
                </Box>
              </Button>
        </Box>
    ))}
    </SimpleGrid>
    </Container>
  );
}

return( <Container align="center" padding="100px"><Button isLoading colorScheme="teal" variant="solid" >Loading please wait...</Button></Container>);
}

export default Keyboard;
