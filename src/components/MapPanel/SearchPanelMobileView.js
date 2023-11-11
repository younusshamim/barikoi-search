import React from "react";
import { useData } from "../../contexts/DataProvider";
import { useSettings } from "../../contexts/SettingsProvider";
import SearchInput from "../SerachPanel/SearchInput";
import SuggestedPlaces from "../SerachPanel/SuggestedPlaces";
import SelectedPlace from "../SerachPanel/SelectedPlace";
import SearchBarToggler from "../Common/SearchBarToggler";

const SearchPanelMobileView = () => {
  const { inputText, selectedPlace } = useData();
  const { searchbarOpen } = useSettings();

  return (
    <>
      <SearchInput display={{ base: "block", md: "none" }} bg="white" />

      {inputText.length > 0 && !selectedPlace && (
        <SuggestedPlaces
          display={{ base: "block", md: "none" }}
          mt="80px"
          h="95vh"
        />
      )}
      {selectedPlace && (
        <SelectedPlace
          display={{ base: "block", md: "none" }}
          position="absolute"
          bottom="0"
          left="0"
          zIndex="9999"
          bg="white"
        />
      )}

      {!searchbarOpen && (
        <SearchBarToggler
          position="absolute"
          top="80px"
          left="0"
          zIndex="9999"
          display={{ base: "none", md: "block" }}
        />
      )}
    </>
  );
};

export default SearchPanelMobileView;
