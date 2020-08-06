import React, { useState } from "react";
import Modal from "react-modal";
import noteStore from "../../stores/NoteStore";

const NoteModal = ({ isOpen, closeModal, notebook }) => {
  const [note, setNote] = useState({
    title: "",
    text: "",
  });

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(note);
    noteStore.createNote(note, notebook);
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Create Note"
      >
        <h3>New Note</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={note.title}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-11">
              <label>Text</label>
              <input
                type="text"
                name="text"
                value={note.text}
                className="form-control"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit">Create</button>
        </form>
      </Modal>
    </>
  );
};

export default NoteModal;
