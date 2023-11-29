import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { logo, whiteLogo } from "../../assets";
import { Link } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";

interface LogoProps {
  w?: string;
}

export default function Logo(props: LogoProps) {
  const { colorMode } = useColorMode();
  const usedLogo = colorMode === "dark" ? whiteLogo : logo;
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Link to="/">
          <Image src={usedLogo} />
        </Link>
      </Text>
    </Box>
  );
}
