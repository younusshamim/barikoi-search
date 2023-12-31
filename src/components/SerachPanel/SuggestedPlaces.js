import React, { useState } from "react";
import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import HighlightedText from "../Common/HighlightedText";
import { useData } from "../../contexts/DataProvider";
import useColors from "../../hooks/useColors";

const SuggestedPlaces = ({ h = "430px", ...rest }) => {
  const { alpha50, alpha100, alpha200, bg } = useColors();
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

  return (
    <Stack
      bg={bg}
      borderRadius="sm"
      boxShadow="lg"
      zIndex="999"
      mt="-8px"
      px="4"
      {...rest}
    >
      <Stack h={h} minH="430px" overflowY="auto" gap="0">
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
                borderBottomColor={alpha100}
                pt={index == 0 ? "20px" : "15px"}
                pb="15px"
                cursor="pointer"
                _hover={{
                  bg: { alpha100 },
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
