import useFetch from "../../hooks/useFetch";
import { Grid, Flex, GridItem, Heading, Stack } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import SocialButton from "../ui/SocialButon";
import fetchData from "../../utils/fetchData";
import { useState, useEffect } from "react";
import GridSkeletonLoading from "../ui/GridSkeletonLoading";
import formatVideoData from "../../utils/formatVideoData";

const VideoShowCase = () => {
  const { response, error } = useFetch({
    url: "https://backend.zyro.com/u1/instagram/token/A856R6O0y0uEWped/zVgy03",
    method: "get",
  });
  const { colorMode } = useColorMode();
  const gridItemBg = `${colorMode}.headerFooterBg`;
  const { accessToken }: any = response || "";
  const [videoResponse, setVideoResponse] = useState(null);
  const [videoError, setVideoError] = useState(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [formatedData, setFormatedData] = useState([]);
  const maxVideoShowcase = 16;
  
  useEffect(() => {
    accessToken &&
      fetchData({
        url: "https://graph.instagram.com/me/media?",
        method: "get",
        params: {
          fields: "id,permalink,caption,media_url,thumbnail_url",
          access_token: accessToken,
        },
        setResponse: setVideoResponse,
        setIsLoading: setVideoLoading,
        setError: setVideoError,
        isLoading: videoLoading,
      });
  }, [accessToken]);

  useEffect(() => {
    const formatedData = formatVideoData({
      data: videoResponse,
      maxVideoShowcase: maxVideoShowcase,
    });
    setFormatedData(formatedData);
  }, [videoResponse]);

  if (videoLoading) {
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
          <GridSkeletonLoading
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            maxW={"100vw"}
            gap={6}
            length={maxVideoShowcase}
            height={280}
            minWidth="280px"
          />
        </Stack>
      </Flex>
    );
  }
  if (error || videoError) {
    return <p>Error fetching data : {error}</p>;
  }
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
          maxW={"100vw"}
          gap={6}
        >
          {formatedData &&
            formatedData.map((video: any, i: number) => (
              <GridItem
                key={i}
                h="100%"
                display={"flex"}
                alignItems={"center"}
                bg={gridItemBg}
                borderRadius={6}
              >
                <SocialButton
                  href={video["link"]}
                  w={"100%"}
                  maxW={"100vw"}
                  h={"100%"}
                  rounded={"6px"}
                >
                  {video["poster"] ? (
                    <video
                      src={video["src"]}
                      controls
                      style={{
                        maxHeight: 336,
                        width: 280,
                        maxWidth: "calc(100vw - 20px)",
                      }}
                      poster={video["poster"]}
                    ></video>
                  ) : (
                    <img src={video["src"]} alt="instagram video showcase" />
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
