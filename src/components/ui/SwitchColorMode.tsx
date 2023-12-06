import { Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

export default function SwitchColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      ml={[0, 0, 8, 8]}
      bg={"transparent"}
      _hover={{ bg: "transparent" }}
    >
      {colorMode === "dark" ? (
        <SunIcon color={"orange.200"} />
      ) : (
        <MoonIcon color={"blue.800"} />
      )}
    </Button>
  );
}
