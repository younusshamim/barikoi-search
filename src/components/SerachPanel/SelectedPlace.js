import React from "react";
import { useData } from "../../contexts/DataProvider";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import useColors from "../../hooks/useColors";

const SelectedPlace = ({ ...rest }) => {
  const { selectedPlace } = useData();
  const { alpha100 } = useColors();

  return (
    <Stack
      boxShadow="xl"
      h="200px"
      w="full"
      borderRadius="xl"
      p="5"
      gap="2"
      mt="5"
      cursor="pointer"
      {...rest}
    >
      <HStack>
        <Box color="gray.600" borderRadius="50%" fontSize="20px">
          <FaLocationDot />
        </Box>
        <Text
          fontSize="22px"
          fontWeight="semibold"
          lineHeight="22px"
          color="#3cb4be"
        >
          {selectedPlace.address}
        </Text>
      </HStack>

      <Flex direction="column" ml="5">
        <Text fontSize="14px">{selectedPlace.address_bn}</Text>
        <Text fontSize="14px">{selectedPlace.area}</Text>
        <HStack gap="2px">
          <Text fontSize="14px"> {selectedPlace.city} </Text>
          <Text fontSize="14px">-</Text>
          <Text fontSize="14px">{selectedPlace.postCode}</Text>
        </HStack>

        <Box
          bg={alpha100}
          p="2px 5px"
          borderRadius="sm"
          w="fit-content"
          mt="5px"
        >
          <Text fontSize="14px">{selectedPlace.pType}</Text>
        </Box>
      </Flex>
    </Stack>
  );
};

export default SelectedPlace;
