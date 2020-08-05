import React from "react";

import { Route, Switch } from "react-router";
import NotebooksList from "../NotebooksList";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path exact="/">
          <NotebooksList />
        </Route>
        <Route path="/notes">
          <NotebooksDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default observer(Routes);
