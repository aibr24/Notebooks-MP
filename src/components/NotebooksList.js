import React from "react";
import notebookStore from "../stores/NotebookStore";
import NotebookItem from "./NotebookItem";
import { observer } from "mobx-react";
import AddButton from "./Buttons/AddButton";
const NotebooksList = () => {
  const searchedNotebooks = notebookStore.notebooks.map((notebook) => (
    <NotebookItem notebook={notebook} key={notebook.id} />
  ));
  // console.log(searchedNotebooks);
  return (
    <>
      <div>{searchedNotebooks}</div>;
      <AddButton />
    </>
  );
};

export default observer(NotebooksList);
