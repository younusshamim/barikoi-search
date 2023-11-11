import React, { useRef } from "react";
import { Box } from "@chakra-ui/react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { useSettings } from "../../contexts/SettingsProvider";

const SearchBarToggler = ({ ...rest }) => {
  const { searchbarOpen, setSearchbarOpen } = useSettings();

  return (
    <Box
      fontWeight="bold"
      fontSize="45px"
      cursor="pointer"
      {...rest}
      onClick={() => setSearchbarOpen(!searchbarOpen)}
    >
      {searchbarOpen ? <RiArrowDropLeftLine /> : <RiArrowDropRightLine />}
    </Box>
  );
};

export default SearchBarToggler;
