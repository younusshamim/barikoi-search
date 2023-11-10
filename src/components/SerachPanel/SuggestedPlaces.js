import React from "react";
import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import HighlightedText from "../Common/HighlightedText";

const SuggestedPlaces = ({ placeList, isLoading, error }) => {
  return (
    <Stack
      bg="white"
      borderRadius="sm"
      boxShadow="lg"
      zIndex="999"
      mt="-8px"
      px="4"
    >
      <Stack maxH="430px" minH="430px" overflowY="auto">
        {!isLoading &&
          !error &&
          placeList?.length > 0 &&
          placeList.map((item, index) => {
            const locationTitle = item.address.split(",").slice(0, 1).join();
            const locationDesc = item.address
              .split(",")
              .slice(1, item.address.length)
              .join();

            return (
              <HStack
                key={index}
                gap="5"
                borderBottomWidth="1px"
                borderBottomColor="blackAlpha.100"
                pt={index == 0 ? "20px" : "5px"}
                pb="15px"
              >
                <Box fontSize="26px">
                  <MdLocationPin />
                </Box>

                <Stack gap="4px">
                  <Heading fontSize="19px" fontWeight="400">
                    {locationTitle}
                  </Heading>
                  <Text fontSize="16px" fontWeight="300">
                    {locationDesc}
                  </Text>

                  <HStack flexWrap="wrap">
                    <HighlightedText> Area:</HighlightedText>
                    <Text fontSize="14px" fontWeight="300">
                      {item.area}
                    </Text>

                    <HighlightedText>City:</HighlightedText>
                    <Text fontSize="14px" fontWeight="300">
                      {item.city}
                    </Text>
                  </HStack>

                  <HighlightedText fontSize="14px">
                    {item.pType}
                  </HighlightedText>
                </Stack>
              </HStack>
            );
          })}
      </Stack>
    </Stack>
  );
};

export default SuggestedPlaces;
