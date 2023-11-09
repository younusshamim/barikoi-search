import React from "react";
import { Box } from "@chakra-ui/react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";

const SearchBarToggler = () => {
  return (
    <Box fontWeight="bold" fontSize="45px" cursor="pointer">
      <RiArrowDropLeftLine />
    </Box>
  );
};

export default SearchBarToggler;
