import React from "react";
import noteStore from "../stores/NoteStore";
import NoteItem from "./NoteItem";
import { observer } from "mobx-react";
import AddButton from "./Buttons/AddButton";
const NotesList = () => {
  const searchedNotes = noteStore.notes.map((note) => (
    <NoteItem note={note} key={note.id} />
  ));
  // console.log(searchedNotebooks);
  return (
    <>
      <div>{searchedNotes}</div>;
      <AddButton />
    </>
  );
};

export default observer(NotesList);
