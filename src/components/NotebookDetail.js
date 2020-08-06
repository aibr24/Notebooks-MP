import React from "react";
import { observer } from "mobx-react";
import NoteList from "./NoteList";
import AddNoteButton from "./Buttons/AddNoteButton";
import { useParams, Redirect } from "react-router";
import notebookStore from "../stores/NotebookStore";
import noteStore from "../stores/NoteStore";

const NotebookDetail = () => {
  const { notebookId } = useParams();
  const selectedNotebook = notebookStore.notebooks.find(
    (notebook) => notebook.id === +notebookId
  );
  console.log("NOTEBOOK DETAIL --->", selectedNotebook);

  const notes = selectedNotebook.notes
    .map((note) => noteStore.getNoteById(note.id))
    .filter((note) => note);

  return !selectedNotebook ? (
    <Redirect to="/" />
  ) : (
    <>
      <NoteList notes={notes} />
      <AddNoteButton notebook={selectedNotebook} />
    </>
  );
};

export default observer(NotebookDetail);
// notes={notes}
