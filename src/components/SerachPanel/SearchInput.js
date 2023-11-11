import React from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { useData } from "../../contexts/DataProvider";

const SearchInput = () => {
  const { inputText, setInputText, handleInputClear, handleInputChange } =
    useData();

  return (
    <InputGroup
      size="lg"
      boxShadow="lg"
      borderRadius="sm"
      py="3px"
      zIndex="9"
      borderWidth="1px"
      borderColor="blackAlpha.50"
    >
      <Input
        pr="5rem"
        placeholder="Search Location."
        border="none"
        focusBorderColor="transparent"
        value={inputText}
        onChange={handleInputChange}
      />

      <InputRightElement
        width={inputText.length > 0 ? "8rem" : "4.8rem"}
        h="full"
        gap="6"
      >
        {inputText.length > 0 && (
          <Box fontSize="28px" cursor="pointer" onClick={handleInputClear}>
            <RiCloseFill />
          </Box>
        )}

        <Button
          h="2rem"
          px="18px"
          size="md"
          bg="linear-gradient(94deg,#3cb4be,#43de7f 97%)"
          color="white"
          _hover={{ backgroundColor: "inherit" }}
          _active={{ backgroundColor: "inherit", opacity: 0.8 }}
        >
          <BiSearch />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
