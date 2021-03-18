import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom"

export default function Logo(props) {
  return (
      <Box {...props}>
        <Text fontSize="4xl" fontWeight="bold" as="abbr">
          ROOTS
        </Text>
      </Box>
  );
}
