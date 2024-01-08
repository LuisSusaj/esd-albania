import { useState } from "react";
import {
  Box,
  Flex,
  Button,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Logo from "../ui/Logo";
import CloseIcon from "../../assets/CloseIcon";
import MenuItem from "../ui/MenuItem";
import MenuIcon from "../../assets/MenuIcon";
import I18n from "../../i18n/I18n";
import LanguageSwitcher from "../ui/LanguageSwitches";
import SwitchColorMode from "../ui/SwitchColorMode";
// import ModalContainer from "../modal/Modal";
// import AuthenticationForm from "./AuthenticationForm";
// import SignUpForm from "./SignUpForm";

const Header = (props: object) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { colorMode } = useColorMode();
  const headerFooterBg = `${colorMode}.headerFooterBg`;
  const btnBg = `${colorMode}.btnBg`;
  // const {
  //   isOpen: isLoginOpen,
  //   onOpen: onLoginOpen,
  //   onClose: onLoginClose,
  // } = useDisclosure();
  // const {
  //   isOpen: isSignUpOpen,
  //   onOpen: onSignUpOpen,
  //   onClose: onSignUpClose,
  // } = useDisclosure();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      // mb={8}
      p={[8, 8, 8, 8, 8]}
      bg={[btnBg, btnBg, headerFooterBg, headerFooterBg]}
      color={["white", "white", btnBg, btnBg]}
      {...props}
    >
      <Flex align="center">
        <Logo w="180px" />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">
            <I18n text="nav_home" />
          </MenuItem>
          <MenuItem to="/about_us">
            <I18n text="nav_about_us" />{" "}
          </MenuItem>
          <MenuItem to="/collaborators">
            <I18n text="nav_collaborators" />
          </MenuItem>
          <MenuItem to="/join_us">
            <I18n text="nav_join_us" />
          </MenuItem>
          {/* <Button
            size="sm"
            rounded="md"
            color={[btnBg, "btnBg.500", "white", "white"]}
            bg={["white", "white", btnBg, btnBg]}
            mb={{ base: 8, sm: 0 }}
            mr={{ base: 0, sm: 8 }}
            _hover={{
              bg: btnBg,
            }}
            onClick={onSignUpOpen}
          >
            <I18n text="nav_create_account" />
          </Button> */}
          {/* <Button
            size="sm"
            rounded="md"
            color={[btnBg, "btnBg.500", "white", "white"]}
            bg={["white", "white", btnBg, btnBg]}
            mb={{ base: 8, sm: 0 }}
            mr={{ base: 0, sm: 8 }}
            _hover={{
              bg: btnBg,
            }}
            onClick={onLoginOpen}
          >
            <I18n text="nav_log_in" />
          </Button> */}
          {/* <ModalContainer
            isOpen={isSignUpOpen}
            onClose={() => onSignUpClose()}
            title="Sign Up Form"
          >
            <SignUpForm />
          </ModalContainer> */}
          {/* <ModalContainer
            isOpen={isLoginOpen}
            onClose={() => onLoginClose()}
            title="Login Form"
          >
            <AuthenticationForm />
          </ModalContainer> */}
        </Flex>
      </Box>
      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <LanguageSwitcher />
          <SwitchColorMode />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
