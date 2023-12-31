import { Flex, Heading, Text, Stack, Image, Box, Fade } from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import { aboutUs } from "../../assets";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, []);
  return (
    <Fade in={animation}>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="nowrap"
        px={8}
        mb={16}
      >
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src={aboutUs} sizes="100%" rounded="1rem" shadow="2xl" />
        </Box>
        <Stack
          spacing={4}
          align={["center", "center", "flex-start", "flex-start"]}
          w={{ base: "80%", md: "40%" }}
          mb={[10, 10, 0, 0]}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            <I18n text="about_us_title" />
          </Heading>
          <Text textAlign={["center", "center", "left", "left"]}>
            <I18n text="about_us_description" />
          </Text>
        </Stack>
      </Flex>
    </Fade>
  );
};
export default AboutUs;
