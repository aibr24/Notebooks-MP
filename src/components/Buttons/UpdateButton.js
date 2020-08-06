import React, { useState } from "react";
import NoteModal from "../modals/NoteModal";
import { GiTurtle } from "react-icons/gi";

import { UpdateButtonStyled } from "./styles";

const UpdateButton = ({ notebook, note }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>EDIT</UpdateButtonStyled>
      <NoteModal
        isOpen={isOpen}
        closeModal={closeModal}
        notebook={notebook}
        oldNote={note}
      />
    </>
  );
};

export default UpdateButton;
