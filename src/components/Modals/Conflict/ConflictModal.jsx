import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import ConflictAccordion from "./ConflictAccordion";

export const ConflictModal = ({ isOpen, onClose, details }) => {
  const summary = `Below, there ${
    details.size === 1
      ? `is ${details.size} song that needs to be`
      : `are ${details.size} songs that need to be`
  }  resolved. Each song title and the potential clean versions and linked below. Click on each one to decide whether or not to include them in your playlist`;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={6}>
        <ModalHeader>Resolve the following conflicts </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text pb={5}>
            {details.size === 0
              ? "All conflicts have been resolved :)"
              : summary}
          </Text>
          {details && (
            <UnorderedList mt={4}>
              {Array.from(details.entries()).map((entry, index) => {
                const [key, value] = entry;
                return (
                  <ConflictAccordion
                    key={index}
                    mainSong={key}
                    possibleSongs={value}
                    allSongs={details}
                  />
                );
              })}
            </UnorderedList>
          )}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
