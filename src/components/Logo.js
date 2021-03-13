import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="3xl" fontWeight="bold" as="abbr">
        ROOTS
      </Text>
    </Box>
  );
}
