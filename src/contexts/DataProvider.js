import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { getAutoCompletePlace } from "../util/services";
import { useEffect } from "react";
const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [placeList, setPlaceList] = useState([]);
  const [position, setPosition] = useState([23.8041, 90.4152]);
  const [zoom, setZoom] = useState(13);

  // payload
  const APIKEY = process.env.REACT_APP_BARIKOI_API_KEY;
  const payload = {
    api_key: APIKEY,
    q: inputText,
    city: "dhaka",
    bangla: true,
  };

  // query
  const { isLoading, error } = useQuery(
    inputText,
    () => getAutoCompletePlace(payload),
    {
      enabled: !!inputText && !selectedPlace,
      onSuccess: (data) => setPlaceList(data?.data?.places),
    }
  );

  // functions
  const getTitle = (place) => {
    return place.address.split(",").slice(0, 1).join();
  };

  // handler
  const handleInputChange = (e) => {
    if (inputText) {
      setSelectedPlace(null);
    }
    setInputText(e.target.value);
  };

  const handleInputClear = () => {
    setSelectedPlace(null);
    setPlaceList([]);
    setInputText("");
  };

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setPlaceList([place]);
    setInputText(getTitle(place));
  };

  useEffect(() => {
    if (selectedPlace?.latitude) {
      const latitude = parseFloat(selectedPlace.latitude);
      const longitude = parseFloat(selectedPlace.longitude);
      setPosition([latitude, longitude]);
      setZoom(14);
    }
  }, [selectedPlace]);

  const value = {
    placeList,
    setPlaceList,
    isLoading,
    error,
    inputText,
    setInputText,
    selectedPlace,
    setSelectedPlace,
    handleInputClear,
    handlePlaceSelect,
    handleInputChange,
    position,
    zoom,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
