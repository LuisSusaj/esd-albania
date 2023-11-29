import lightTheme from "./light";
import darkTheme from "./dark";
import { extendTheme, type ThemeConfig} from "@chakra-ui/react";

const config : ThemeConfig = {
    initialColorMode:'dark',
    useSystemColorMode:true,
}
export default extendTheme({ config, 
    colors: {
      light: lightTheme,
      dark: darkTheme,
    } 
});
