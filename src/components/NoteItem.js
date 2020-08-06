import React from "react";

import { observer } from "mobx-react";
import UpdateButton from "./Buttons/UpdateButton";

const NoteItem = ({ note }) => {
  return (
    <>
      <div>
        <h3>{note.title}</h3>
        <p>{note.text}</p>
      </div>
      <div>
        <UpdateButton note={note} />
      </div>
    </>
  );
};

export default observer(NoteItem);
