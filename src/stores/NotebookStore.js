import { decorate, observable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];

  fetchNotebooks = async () => {};
}
decorate(NotebookStore, {
  notebooks: observable,
});

const notebookStore = new NotebookStore();
export default notebookStore;
