import React from "react";
import notebookStore from "../stores/NotebookStore";
import { observer } from "mobx-react";

const NotebookItem = ({ notebook }) => {
  return <div>{notebook.name}</div>;
};

export default observer(NotebookItem);
