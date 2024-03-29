import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Logo(props) {
  return (
      <Box {...props}>
        <Text fontSize="4xl" fontWeight="bold" as="abbr">
          ROOTS
        </Text>
      </Box>
  );
}
