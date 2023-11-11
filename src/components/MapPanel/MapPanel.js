import React from "react";
import { Box, Stack, useMediaQuery } from "@chakra-ui/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useData } from "../../contexts/DataProvider";
import { greenLocation, redLocation, blueLocation } from "../../data/icons";
import SearchBarToggler from "../Common/SearchBarToggler";
import { useSettings } from "../../contexts/SettingsProvider";
import SearchPanel from "../SerachPanel/SearchPanel";
import SearchInput from "../SerachPanel/SearchInput";
import SelectedPlace from "../SerachPanel/SelectedPlace";
import SuggestedPlaces from "../SerachPanel/SuggestedPlaces";

const MapPanel = () => {
  // contexts
  const {
    inputText,
    selectedPlace,
    placeList,
    handlePlaceSelect,
    position,
    zoom,
  } = useData();
  const { searchbarOpen, isLargerDevice } = useSettings();
  // states

  const getIcon = (place) => {
    const { pType } = place;
    switch (pType) {
      case "Admin":
        return greenLocation;
      case "Office":
        return redLocation;
      default:
        return blueLocation;
    }
  };

  return (
    <Stack
      w={searchbarOpen ? "60%" : "100%"}
      h="100vh"
      position="relative"
      gap="0"
    >
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

      <MapContainer
        center={position}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {placeList?.map((place) => (
          <Marker
            key={place.id}
            position={[place.latitude, place.longitude]}
            icon={getIcon(place)}
            eventHandlers={{ click: () => handlePlaceSelect(place) }}
          >
            <Popup>{place.address}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </Stack>
  );
};

export default MapPanel;
