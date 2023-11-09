import { Box } from "@chakra-ui/react";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const LightDarkToggler = () => {
  return (
    <Box fontWeight="bold" fontSize="24px" cursor="pointer">
      <MdOutlineDarkMode />
    </Box>
  );
};

export default LightDarkToggler;
