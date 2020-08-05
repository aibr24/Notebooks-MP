import { decorate, observable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];

  fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notes");
      this.notes = res.data;
    } catch (error) {
      console.log("NoteSTORE ----> FETCH", error);
    }
  };

  createNote = async (noteItem) => {
    // console.log(notebookItem);
    try {
      //   const formData = new FormData();

      //   for (const key in notebookItem) formData.append(key, notebookItem[key]);
      const res = await axios.post("http://localhost:8000/notes", noteItem);
      console.log(noteItem);
      this.notes.push(res.data);
    } catch (error) {
      console.log("NoteBookSTORE ----> Create!", error);
    }
  };
}
decorate(NoteStore, {
  notes: observable,
});

const noteStore = new NoteStore();
noteStore.fetchNotes();
export default noteStore;
