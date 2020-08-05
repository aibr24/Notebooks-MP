import { decorate, observable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];

  fetchNotebooks = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = res.data;
    } catch (error) {
      console.log("NoteBookSTORE ----> FETCH", error);
    }
  };

  createNotebook = async (notebookItem) => {
    // console.log(notebookItem);
    try {
      //   const formData = new FormData();

      //   for (const key in notebookItem) formData.append(key, notebookItem[key]);
      const res = await axios.post(
        "http://localhost:8000/notebooks",
        notebookItem
      );
      console.log(notebookItem);
      this.notebooks.push(res.data);
    } catch (error) {
      console.log("NoteBookSTORE ----> Create!", error);
    }
  };
}
decorate(NotebookStore, {
  notebooks: observable,
});

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();
export default notebookStore;
