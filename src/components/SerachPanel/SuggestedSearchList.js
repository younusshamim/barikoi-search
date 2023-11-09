import React from "react";
import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import HighlightedText from "../Common/HighlightedText";

const SuggestedSearchList = () => {
  const listData = [
    {
      id: 1,
      title: "Baridhara DOHS",
      location: "Baridhara, Dhaka, Baridhara, Dhaka",
      thana: "Dhaka Cantonment",
      district: "Dhaka",
      keywords: ["Education", "School College"],
    },
    {
      id: 2,
      title: "Baridhara DOHS Masjid",
      location: "Baridhara, Dhaka, Baridhara, Dhaka",
      thana: "Dhaka Cantonment",
      district: "Dhaka",
      keywords: ["Education", "School College"],
    },
    {
      id: 3,
      title: "Baridhara Scholars School & College",
      location: "Baridhara, Dhaka, Baridhara, Dhaka",
      thana: "Dhaka Cantonment",
      district: "Dhaka",
      keywords: ["Education", "School College"],
    },
    {
      id: 4,
      title: "Baridhara Scholars Instituiob",
      location: "Baridhara, Dhaka, Baridhara, Dhaka",
      thana: "Dhaka Cantonment",
      district: "Dhaka",
      keywords: ["Education", "School College"],
    },
    {
      id: 5,
      title: "Baridhara Scholars School & College",
      location: "Baridhara, Dhaka, Baridhara, Dhaka",
      thana: "Dhaka Cantonment",
      district: "Dhaka",
      keywords: ["Education", "School College"],
    },
    {
      id: 6,
      title: "Baridhara Scholars Instituiob",
      location: "Baridhara, Dhaka, Baridhara, Dhaka",
      thana: "Dhaka Cantonment",
      district: "Dhaka",
      keywords: ["Education", "School College"],
    },
  ];

  return (
    <Stack
      bg="white"
      borderRadius="sm"
      boxShadow="lg"
      zIndex="999"
      mt="-8px"
      px="4"
    >
      <Stack maxH="430px" overflowY="auto">
        {listData.map((item, index) => (
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
                {item.title}
              </Heading>
              <Text fontSize="16px" fontWeight="300">
                {item.location}
              </Text>
              <HStack>
                <HighlightedText> Thana:</HighlightedText>
                <Text fontSize="14px" fontWeight="300">
                  {item.thana}
                </Text>

                <HighlightedText>District:</HighlightedText>
                <Text fontSize="14px" fontWeight="300">
                  {item.district}
                </Text>
              </HStack>

              <HStack>
                {item.keywords.map((keyword) => (
                  <HighlightedText fontSize="13px">{keyword}</HighlightedText>
                ))}
              </HStack>
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default SuggestedSearchList;
