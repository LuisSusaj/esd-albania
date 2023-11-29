import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface LandingLayoutProps {
  children: ReactNode;
}
export default function LandingLayout(props:LandingLayoutProps) {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      {props.children}
    </Flex>
  );
}
