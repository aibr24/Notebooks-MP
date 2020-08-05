import React from "react";
import notebookStore from "../stores/NotebookStore";
import NotebookItem from "./NotebookItem";
import { observer } from "mobx-react";
const NotebooksList = () => {
  const notebooks = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));
  console.log(notebooks);
  return <div>{notebooks}</div>;
};

export default observer(NotebooksList);
