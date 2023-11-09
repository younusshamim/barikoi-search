import React from "react";
import SearchPanel from "./SerachPanel/SearchPanel";
import MapPanel from "./MapPanel/MapPanel";
import { Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <Flex>
      <SearchPanel />
      <MapPanel />
    </Flex>
  );
};

export default Main;
