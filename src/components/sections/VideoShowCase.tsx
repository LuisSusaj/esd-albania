import useFetch from "../../hooks/useFetch";
import { Grid, Flex, GridItem, Heading, Stack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import SocialButton from "../ui/SocialButon";

const VideoShowCase = () => {
  const { response, isLoading, error } = useFetch({
    url: "data.json",
    method: "get",
  });
  const { colorMode } = useColorMode();
  const gridItemBg = `${colorMode}.headerFooterBg`;
  // console.log(isLoading)
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data : {error}</p>;
  }

  const { videos }: any = response || {};
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      px={8}
      mb={16}
      maxW={1200}
    >
      <Stack
        spacing={4}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading>
          <I18n text="video_showcase_title" />
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {videos &&
            videos.map((video: any, i: number) => (
              <GridItem
                key={i}
                h="100%"
                display={"flex"}
                alignItems={"center"}
                bg={gridItemBg}
                borderRadius={6}
              >
                <SocialButton
                  label="test"
                  href={video["anchor-link"]}
                  w={"100%"}
                  maxW={"100vw"}
                  h={"100%"}
                  rounded={"6px"}
                >
                  {video["video-poster"] !== "null" ? (
                    <video
                      src={video["anchor-link"]}
                      controls
                      style={{
                        maxHeight: 336,
                        width: 280,
                        maxWidth: "calc(100vw - 20px)",
                      }}
                      poster={video["video-poster"]}
                    ></video>
                  ) : (
                    <img
                      src={video["video-src"]}
                      alt="instagram video showcase"
                    />
                  )}
                </SocialButton>
              </GridItem>
            ))}
        </Grid>
      </Stack>
    </Flex>
  );
};

export default VideoShowCase;
