import { Fragment } from "react";
import useFetch from "../../hooks/useFetch";
import {
  Grid,
  Flex,
  GridItem,
  Heading,
  Stack,
  // Container,
} from "@chakra-ui/react";
import { useColorMode, useTheme } from "@chakra-ui/react";
import I18n from "../../i18n/I18n";
import SocialButton from "../ui/SocialButon";
import fetchData from "../../utils/fetchData";
import { useState, useEffect } from "react";
import GridSkeletonLoading from "../ui/GridSkeletonLoading";
import formatVideoData from "../../utils/formatVideoData";
import { VideoPoster } from "../../interfaces/VideoPoster";
import endpoints from "../../constants/endpoint";
import { Instagram } from "../../constants/endpoints";
// import ChakraCarousel from "./Carousel/Carousel";

const VideoShowCase = () => {
  const { colorMode } = useColorMode();
  const theme = useTheme();
  const gridItemBg = `${colorMode}.headerFooterBg`;
  const uiColor = theme.colors.gray[`${colorMode == "light" ? 50 : 900}`];
  const { url, token, file, videos }: Instagram = endpoints.instagram;
  const tokenUrl = `${url}${token}${file}`;
  const { response, error } = useFetch({
    url: tokenUrl,
  });
  const { accessToken }: any = response || "";
  const [videoResponse, setVideoResponse] = useState(null);
  const [videoError, setVideoError] = useState(null);
  const [videoLoading, setVideoLoading] = useState(true);
  const [formatedData, setFormatedData] = useState<VideoPoster[] | undefined>(
    []
  );
  const maxVideoShowcase = 8;

  useEffect(() => {
    accessToken &&
      fetchData({
        url: videos,
        method: "get",
        params: {
          fields: "permalink,media_url,thumbnail_url",
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
      pb={8}
      mb={16}
      bg={uiColor}
    >
      <Stack spacing={4} align="center">
        <Heading mb={6} pt={2}>
          <I18n text="video_showcase_title" />
        </Heading>
        {videoLoading ? (
          <GridSkeletonLoading
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(8, 1fr)",
            }}
            maxW={"100vw"}
            gap={6}
            length={maxVideoShowcase}
            height={280}
            minWidth="280px"
          />
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(8, 1fr)",
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
                    overflow="hidden"
                  >
                    {video["poster"] ? (
                      <video
                        src={video["src"]}
                        controls
                        poster={video["poster"]}
                      ></video>
                    ) : (
                      <img src={video["src"]} alt="instagram video showcase" />
                    )}
                  </SocialButton>
                </GridItem>
              ))}
          </Grid>
        )}
        {/* <Container
          py={8}
          px={0}
          maxW={{
            base: "100%",
            sm: "35rem",
            md: "43.75rem",
            lg: "57.5rem",
            xl: "75rem",
            xxl: "87.5rem",
          }}
        >
          <ChakraCarousel gap={32}>
            {formatedData
              ? formatedData.map((video: VideoPoster, i: number) => (
                  <SocialButton
                    href={video["link"]}
                    w={"100%"}
                    maxW={"100vw"}
                    h={"100%"}
                    rounded={"6px"}
                    overflow="hidden"
                    key={i}
                  >
                    {video["poster"] ? (
                      <video
                        src={video["src"]}
                        controls
                        poster={video["poster"]}
                      ></video>
                    ) : (
                      <img src={video["src"]} alt="instagram video showcase" />
                    )}
                  </SocialButton>
                ))
              : []}
          </ChakraCarousel>
        </Container> */}
      </Stack>
    </Flex>
  );
};

export default VideoShowCase;
