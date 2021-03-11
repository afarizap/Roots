import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
        boxSize="100%"
        src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Flogo.svg?alt=media&token=e925660b-b086-45b8-89cf-6c29fddbb35e"
        alt=""
      />
    </Box>
  );
}
