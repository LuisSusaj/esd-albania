import React from "react";
import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
const AboutUs = () => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        ><I18n text="about_us_title"/></Heading>
        <Text><I18n text="about_us_description"/></Text>
      </Stack>
    </Flex>
  );
};
export default AboutUs;