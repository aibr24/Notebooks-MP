import React, { useState } from "react";
import NoteModal from "../modals/NoteModal";
import { GiTurtle } from "react-icons/gi";

const AddNoteButton = ({ notebook }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <GiTurtle
        className="float-right"
        size="4em"
        onClick={openModal}
        color="blue"
      />

      <NoteModal isOpen={isOpen} closeModal={closeModal} notebook={notebook} />
    </>
  );
};

export default AddNoteButton;
