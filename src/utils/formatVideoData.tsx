type FormatVideoDataProps = {
  data: any | null;
  maxVideoShowcase: number;
};

const formatVideoData = (props: FormatVideoDataProps) => {
  const { data, maxVideoShowcase } = props;
  if (data && data.data.length) {
    const responseData = data.data
      .filter((_: any, index: number) => index < maxVideoShowcase)
      .map((videoData: any) => {
        if (videoData.thumbnail_url) {
          return {
            link: videoData.permalink,
            src: videoData.media_url,
            poster: videoData.thumbnail_url,
          };
        } else {
          return {
            link: videoData.permalink,
            src: videoData.media_url,
          };
        }
      });
    return responseData;
  }
};

export default formatVideoData;
