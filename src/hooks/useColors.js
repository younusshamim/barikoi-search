import { useColorModeValue } from "@chakra-ui/react";

const useColors = () => {
  // bg
  const bg = useColorModeValue("white", "blackAlpha.100");

  // alpha
  const alpha50 = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const alpha100 = useColorModeValue("blackAlpha.100", "whiteAlpha.100");
  const alpha200 = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const alpha300 = useColorModeValue("blackAlpha.300", "whiteAlpha.300");

  return { bg, alpha50, alpha100, alpha200, alpha300 };
};

export default useColors;

// white: '#F3F4F8',
// lightWhite: '#FAFAFC',
