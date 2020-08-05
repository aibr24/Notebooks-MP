import React, { useState } from "react";
import Modal from "react-modal";
import notebookStore from "../../stores/NotebookStore";

const NotebookModal = ({ isOpen, closeModal }) => {
  const [notebook, setNotebook] = useState({
    name: "",
  });

  const handleChange = (event) => {
    setNotebook({
      ...notebook,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(notebook);
    notebookStore.createNotebook(notebook);
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Create Game"
      >
        <h3>New Game</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={notebook.name}
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

export default NotebookModal;
