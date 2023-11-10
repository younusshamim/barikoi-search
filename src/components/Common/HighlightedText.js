import React from "react";
import { Text } from "@chakra-ui/react";

const HighlightedText = ({ children, fontSize = "14px" }) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight="300"
      bg="blackAlpha.50"
      p="0px 5px"
      w="fit-content"
    >
      {children}
    </Text>
  );
};

export default HighlightedText;
