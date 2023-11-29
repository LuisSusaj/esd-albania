import { Theme } from "@chakra-ui/react";

interface MyTheme extends Theme {
  colors: {
    light: {
      bg:string,
      txt:string,
      headerFooterBg:string,
      btnBg: string,
      btnColor:string,
    };
    dark: {
      bg:string,
      txt:string,
      headerFooterBg:string,
      btnBg: string,
      btnColor:string,
    };
  };
}

export default MyTheme;