import React from "react";

import { observer } from "mobx-react";
import { Link } from "react-router-dom";

const NotebookItem = ({ notebook }) => {
  return (
    <div>
      <Link to={`/notebook/${notebook.id}/notes`}>{notebook.name}</Link>
    </div>
  );
};

export default observer(NotebookItem);
