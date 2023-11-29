import {
  Button,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  useColorMode,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import I18n from "../../i18n/I18n";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  title:string;
  closeText:string;
}

function ModalContainer(props: ModalProps) {
  const { isOpen, children, onClose , title, closeText} = props;
  const { colorMode } = useColorMode();
  const btnBg = `${colorMode}.btnBg`;
  const btnColor = `${colorMode}.btnColor`;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><I18n text={title}/></ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>{children}</ModalBody>
          <ModalFooter>
            <Button bg={btnBg} color={btnColor} mr={3} onClick={onClose}>
            <I18n text={closeText}/>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalContainer;
