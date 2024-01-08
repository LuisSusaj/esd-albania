import {
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Box,
  Fade,
  Button,
} from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import { founder } from "../../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Invitation = () => {
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
            <I18n text="invitation_title" />
          </Heading>
          <Text textAlign={["center", "center", "left", "left"]}>
            <I18n text="invitation_desc" />
          </Text>
          <Button>
            <Link to={'/join_us'}>
              <I18n text="nav_join_us" />
            </Link>
          </Button>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src={founder} sizes="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>
    </Fade>
  );
};
export default Invitation;
