import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { HeroProps } from "../../interfaces/HeroInterface";
import { Box, Button, Flex, Image, Heading, Stack } from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import { useColorMode } from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}: HeroProps) {
  const { colorMode } = useColorMode();
  const btnBg = `${colorMode}.btnBg`;
  const btnColor = `${colorMode}.btnColor`;
  const textColor = `${colorMode}.txt`
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      minH="40vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color={textColor}
          textAlign={["center", "center", "left", "left"]}
        >
          <I18n text={title} />
        </Heading>
        <Heading
          as="h2"
          size="md"
          color={textColor}
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          <I18n text={subtitle} />
        </Heading>
        <Link to={ctaLink}>
          <Button
            bg={btnBg}
            color={btnColor}
            _hover={{
              bg:{btnBg},
              color:{btnColor}
            }}
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            <I18n text={ctaText} />
          </Button>
        </Link>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} sizes="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
};
