import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import {
  FaInstagram,
  FaFacebook,
  FaSearchLocation,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../ui/Logo";
import SocialButton from "../ui/SocialButon";
import I18n from "../../i18n/I18n";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack
          direction={"column"}
          spacing={6}
          alignItems={[
            "center",
            "center",
            "flex-start",
            "flex-start",
            "flex-start",
          ]}
        >
          <Logo w="100px" />
          <Stack direction={"row"} alignItems={"center"}>
            <FaSearchLocation />
            <I18n text="street" />
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <FaEnvelope />
            <I18n text="email" />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Facebook"}
            href={
              "https://www.facebook.com/people/ESD-Albania/100064594366228/"
            }
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/esd_albania/"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
