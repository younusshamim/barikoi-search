import React from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
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
        focusShadow="none"
      />

      <InputRightElement width="5rem" h="full">
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
