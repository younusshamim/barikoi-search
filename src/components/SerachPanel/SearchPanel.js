import React, { useState } from "react";
import { HStack, Stack, Text } from "@chakra-ui/react";
import Logo from "../Common/Logo";
import SearchBarToggler from "../Common/SearchBarToggler";
import LightDarkToggler from "../Common/LightDarkToggler";
import SearchInput from "./SearchInput";
import SuggestedPlaces from "./SuggestedPlaces";
import { useQuery } from "react-query";
import { getAutoCompletePlace } from "../../util/services";

const SearchPanel = () => {
  const [inputText, setInputText] = useState("");
  const APIKEY = process.env.REACT_APP_BARIKOI_API_KEY;

  // query
  const payload = {
    api_key: APIKEY,
    q: inputText,
    city: "dhaka",
    bangla: true,
  };
  const { data, isLoading, error } = useQuery(
    inputText,
    () => getAutoCompletePlace(payload),
    {
      enabled: !!inputText,
    }
  );
  const placeList = data?.data?.places;

  return (
    <Stack w="40%" p="15px">
      <HStack justify="space-between" mb="5">
        <Logo />
        <HStack>
          <LightDarkToggler />
          <SearchBarToggler />
        </HStack>
      </HStack>

      <SearchInput inputText={inputText} setInputText={setInputText} />

      {inputText.length > 0 && (
        <SuggestedPlaces
          placeList={placeList}
          isLoading={isLoading}
          error={error}
        />
      )}
    </Stack>
  );
};

export default SearchPanel;
