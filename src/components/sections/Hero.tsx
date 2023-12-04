import { HeroProps } from "../../interfaces/HeroInterface";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import { useColorMode } from "@chakra-ui/react";
import ModalContainer from "../modal/Modal";
import SignUpForm from "./SignUpForm";

export default function Hero({
  title,
  subtitle,
  image,
  ctaText,
  ...rest
}: HeroProps) {
  const { colorMode } = useColorMode();
  const btnBg = `${colorMode}.btnBg`;
  const btnColor = `${colorMode}.btnColor`;
  const textColor = `${colorMode}.txt`;
  const {
    isOpen: isSignUpOpen,
    onOpen: onSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();
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
        <Button
          bg={btnBg}
          color={btnColor}
          _hover={{
            bg: { btnBg },
            color: { btnColor },
          }}
          borderRadius="8px"
          py="4"
          px="4"
          lineHeight="1"
          size="md"
          onClick={onSignUpOpen}
        >
          <I18n text={ctaText} />
        </Button>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} sizes="100%" rounded="1rem" shadow="2xl" />
      </Box>
      <ModalContainer
        isOpen={isSignUpOpen}
        onClose={() => onSignUpClose()}
        title="Sign Up Form"
      >
        <SignUpForm />
      </ModalContainer>
    </Flex>
  );
}
