import React from "react";
import { Stack } from "@chakra-ui/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useData } from "../../contexts/DataProvider";
import { greenLocation, redLocation, blueLocation } from "../../data/icons";
import { useSettings } from "../../contexts/SettingsProvider";

import SearchPanelMobileView from "./SearchPanelMobileView";

const MapPanel = () => {
  // contexts
  const { placeList, handlePlaceSelect, position, zoom } = useData();
  const { searchbarOpen } = useSettings();
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
      <SearchPanelMobileView />

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
