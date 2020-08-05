import React from "react";
import noteStore from "../stores/NoteStore";
import { observer } from "mobx-react";

const NoteItem = ({ note }) => {
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
    </div>
  );
};

export default observer(NoteItem);
