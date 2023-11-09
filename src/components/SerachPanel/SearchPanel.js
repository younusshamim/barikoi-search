import React from "react";
import { HStack, Stack } from "@chakra-ui/react";
import Logo from "../Common/Logo";
import SearchBarToggler from "../Common/SearchBarToggler";
import LightDarkToggler from "../Common/LightDarkToggler";
import SearchInput from "./SearchInput";
import SuggestedSearchList from "./SuggestedSearchList";

const SearchPanel = () => {
  return (
    <Stack w="40%" p="15px">
      <HStack justify="space-between" mb="5">
        <Logo />
        <HStack>
          <LightDarkToggler />
          <SearchBarToggler />
        </HStack>
      </HStack>

      <SearchInput />
      <SuggestedSearchList />
    </Stack>
  );
};

export default SearchPanel;
