import React from "react";
import { HStack, Stack } from "@chakra-ui/react";
import Logo from "../Common/Logo";
import SearchBarToggler from "../Common/SearchBarToggler";
import LightDarkToggler from "../Common/LightDarkToggler";
import SearchInput from "./SearchInput";
import SuggestedPlaces from "./SuggestedPlaces";
import { useData } from "../../contexts/DataProvider";
import SelectedPlace from "./SelectedPlace";

const SearchPanel = () => {
  const { inputText, selectedPlace } = useData();

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

      {inputText.length > 0 && !selectedPlace && <SuggestedPlaces />}

      {selectedPlace && <SelectedPlace />}
    </Stack>
  );
};

export default SearchPanel;
