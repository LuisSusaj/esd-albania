import { VideoPoster } from "../interfaces/VideoPoster";

type VideoData = {
  permalink: string;
  media_url: string;
  thumbnail_url?: string;
};

type Data = {
  data: VideoData[];
};

type FormatVideoDataProps = {
  data: Data | null;
  maxVideoShowcase: number;
};

const formatVideoData = (props: FormatVideoDataProps) => {
  const { data, maxVideoShowcase } = props;
  if (data && data.data.length) {
    const responseData : VideoPoster[] = data.data
      .filter((_: VideoData, index: number) => index < maxVideoShowcase)
      .map(({ permalink, thumbnail_url, media_url }: VideoData) => {
        if (thumbnail_url) {
          return {
            link: permalink,
            src: media_url,
            poster: thumbnail_url,
          };
        } else {
          return {
            link: permalink,
            src: media_url,
          };
        }
      }) ?? [];
    return responseData;
  }
};

export default formatVideoData;
