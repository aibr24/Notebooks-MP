import React from "react";
import { observer } from "mobx-react";
// store
import noteStore from "../stores/NoteStore";
// components
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => {
  const searchedNotes = notes.map((note) => (
    <NoteItem note={note} key={note.id} />
  ));

  return (
    <>
      <div>{searchedNotes}</div>;
    </>
  );
};

export default observer(NotesList);
// { notes }
