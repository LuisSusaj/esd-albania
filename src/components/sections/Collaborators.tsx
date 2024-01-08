import { Flex, Heading, Stack, Grid, GridItem, useColorMode} from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import collaborators from "../../assets/collaborators";
import React from "react";

export default function Collaborators() {
  const { colorMode } = useColorMode();
  const gridItemBg = `${colorMode}.headerFooterBg`;
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      px={8}
      pb={8}
      mb={16}
    >
      <Stack spacing={4} align="center">
        <Heading mb={6} pt={2}>
          <I18n text="our_collaborators_title" />
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          maxW={"100vw"}
          gap={6}
        >
          {collaborators.map((src, i) => (
            <GridItem
              key={i}
              h="100%"
              display={"flex"}
              alignItems={"center"}
              bg={gridItemBg}
              borderRadius={6}
            >
              <img src={src}/>
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Flex>
  );
}
