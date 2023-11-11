import React, { useState } from "react";
import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import HighlightedText from "../Common/HighlightedText";
import { useData } from "../../contexts/DataProvider";

const SuggestedPlaces = () => {
  // contexts
  const { placeList, isLoading, error, inputText, handlePlaceSelect } =
    useData();

  // functions
  const hightlightInputText = (text) => {
    const inputTextArr = inputText.split(" ");
    const textArr = text.split(" ");

    const targetTextArr = textArr.map((word) => {
      if (inputTextArr.some((el) => el.toLowerCase() == word.toLowerCase())) {
        return { word, type: "semibold" };
      } else {
        return { word, type: "normal" };
      }
    });
    return targetTextArr;
  };

  // handler

  return (
    <Stack
      bg="white"
      borderRadius="sm"
      boxShadow="lg"
      zIndex="999"
      mt="-8px"
      px="4"
    >
      <Stack maxH="430px" minH="430px" overflowY="auto" gap="0">
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
                pt={index == 0 ? "20px" : "15px"}
                pb="15px"
                cursor="pointer"
                _hover={{
                  bg: "blackAlpha.100",
                }}
                onClick={() => handlePlaceSelect(item)}
              >
                <Box fontSize="26px">
                  <MdLocationPin />
                </Box>

                <Stack gap="4px">
                  <Heading
                    fontSize="18px"
                    fontWeight="400"
                    display="flex"
                    gap="5px"
                  >
                    {hightlightInputText(locationTitle).map((item, i) => (
                      <Box fontWeight={item.type} key={i}>
                        {item.word}
                      </Box>
                    ))}
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
