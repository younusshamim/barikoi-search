import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Flex fontWeight="bold">
      <Heading fontSize="26px" fontWeight="semibold">
        Bari
      </Heading>
      <Heading color="primary" fontSize="26px" fontWeight="semibold">
        koi
      </Heading>
    </Flex>
  );
};

export default Logo;
