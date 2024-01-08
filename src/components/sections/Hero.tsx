import { Box, Flex, Image, Fade } from "@chakra-ui/react";
import { HeroProps } from "../../interfaces/HeroInterface";
import { useEffect, useState } from "react";

export default function Hero({ image, width, ...rest }: HeroProps) {
  const defaultHeight = 0.56146 * window.innerWidth;
  const [height, setHeight] = useState(defaultHeight);
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setHeight(0.56146 * window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setAnimation(true);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Fade in={animation}>
      <Flex
        align={{ base: "flex-start", md: "flex-start", xl: "center" }}
        justify={"center"}
        wrap="nowrap"
        maxH={{ base: height, md: "60vh", xl: "60vh" }}
        overflow="hidden"
        mb={16}
        {...rest}
      >
        <Box w={width}>
          <Image src={image} sizes="100%" shadow="2xl" w="100%" />
        </Box>
      </Flex>
    </Fade>
  );
}
