import React from "react";
import { HStack, Stack } from "@chakra-ui/react";
import Logo from "../Common/Logo";
import SearchBarToggler from "../Common/SearchBarToggler";
import LightDarkToggler from "../Common/LightDarkToggler";
import SearchInput from "./SearchInput";
import SuggestedPlaces from "./SuggestedPlaces";
import { useData } from "../../contexts/DataProvider";
import SelectedPlace from "./SelectedPlace";
import { useSettings } from "../../contexts/SettingsProvider";

const SearchPanel = () => {
  const { inputText, selectedPlace } = useData();
  const { searchbarOpen } = useSettings();

  return (
    <Stack
      w={searchbarOpen ? "40%" : "0%"}
      visibility={searchbarOpen ? "visible" : "hidden"}
      opacity={searchbarOpen ? 1 : 0}
      p={searchbarOpen ? "15px" : "0px"}
      transition="0.5s"
    >
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
