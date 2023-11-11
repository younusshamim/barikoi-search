import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const LightDarkToggler = ({ ...rest }) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      fontWeight="bold"
      fontSize="24px"
      cursor="pointer"
      {...rest}
      onClick={toggleColorMode}
      title="Switch dark/light mode"
    >
      {colorMode === "light" ? <MdOutlineDarkMode /> : <FiSun />}
    </Box>
  );
};

export default LightDarkToggler;
