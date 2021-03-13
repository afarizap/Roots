import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image
        boxSize="100%"
        src="https://firebasestorage.googleapis.com/v0/b/roots-5fa0f.appspot.com/o/images%2Frootsdark.svg?alt=media&token=1d7fb748-3dce-42ba-9a60-df760e9178d2"
        alt=""
      />
    </Box>
  );
}
