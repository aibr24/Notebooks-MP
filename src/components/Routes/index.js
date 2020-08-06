import React from "react";

import { Route, Switch } from "react-router";
import NotebooksList from "../NotebooksList";
import { observer } from "mobx-react";
import NotebookDetail from "../NotebookDetail";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path exact="/">
          <NotebooksList />
        </Route>
        <Route path="/notebook/:notebookId/notes">
          <NotebookDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default observer(Routes);
