import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SocialButtonProps {
  children: ReactNode;
  label?: string;
  href: string;
  w?: string;
  h?: string;
  rounded?:string;
  maxW?:string,
}

const SocialButton = ({ children, label, href, w, h, rounded}: SocialButtonProps) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={rounded ?? "full"}
      w={w ?? 8}
      h={h ?? 8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      target="_blank"
      rel="noopener noreferrer"
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {children}
    </chakra.button>
  );
};

export default SocialButton;
