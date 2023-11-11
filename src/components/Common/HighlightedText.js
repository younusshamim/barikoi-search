import React from "react";
import { Text } from "@chakra-ui/react";
import useColors from "../../hooks/useColors";

const HighlightedText = ({ children, fontSize = "14px" }) => {
  const { alpha50 } = useColors();

  return (
    <Text
      fontSize={fontSize}
      fontWeight="300"
      bg={alpha50}
      p="0px 5px"
      w="fit-content"
    >
      {children}
    </Text>
  );
};

export default HighlightedText;
