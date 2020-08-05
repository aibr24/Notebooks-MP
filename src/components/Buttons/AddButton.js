import React, { useState } from "react";
import NotebookModal from "../modals/NotebookModal";
import { GiTurtle } from "react-icons/gi";

const AddButton = () => {
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

      <NotebookModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButton;
