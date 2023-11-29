import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import { al, en } from "../../assets";
import I18n from "../../i18n/I18n";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        <I18n text="language" />
      </MenuButton>
      <MenuList minW="50px" p={0}>
        <MenuItem onClick={() => changeLanguage("en")}>
          <Image boxSize="30px" height={'15px'} src={en} alt="England Flag" />
        </MenuItem>
        <MenuItem onClick={() => changeLanguage("al")}>
          <Image boxSize="30px" height={'15px'} src={al} alt="Albania Flag" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default LanguageSwitcher;
