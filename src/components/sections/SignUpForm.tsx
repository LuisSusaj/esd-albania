import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  Divider,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import { PasswordField } from "../ui/PasswordField";
import { OAuthButtonGroup } from "../ui/OAuthButtonGroup";

export default function SignUpForm() {
  return (
    <Container maxW="lg">
      <Stack spacing="8">
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "2", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <Stack spacing="6">
              <Button>Sign up</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
