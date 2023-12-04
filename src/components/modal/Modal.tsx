import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import I18n from "../../i18n/I18n";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  title:string;
}

function ModalContainer(props: ModalProps) {
  const { isOpen, children, onClose , title} = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><I18n text={title}/></ModalHeader>
          <ModalCloseButton />
          <ModalBody p={0}>{children}</ModalBody>
          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalContainer;
