import { Box } from "@chakra-ui/react";
import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

const LightDarkToggler = ({ ...rest }) => {
  return (
    <Box fontWeight="bold" fontSize="24px" cursor="pointer" {...rest}>
      <MdOutlineDarkMode />
    </Box>
  );
};

export default LightDarkToggler;
