import React, { useEffect, useState } from "react";
import { Stack, Text } from "@chakra-ui/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useData } from "../../contexts/DataProvider";
import { greenLocation, redLocation, blueLocation } from "../../data/icons";

const MapPanel = () => {
  // contexts
  const { placeList, handlePlaceSelect, position, zoom } = useData();
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
    <Stack w="60%" h="100vh" overflow="scroll">
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
