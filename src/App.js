import React from "react";

import NotebooksList from "./components/NotebooksList";
// import notebookStore from "./stores/NotebookStore";

import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Routes />
      <NotebooksList />
    </>
  );
}

export default App;
