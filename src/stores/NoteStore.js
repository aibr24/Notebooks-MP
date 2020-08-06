import { decorate, observable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];

  getNoteById = (noteId) => this.notes.find((note) => note.id === noteId);

  fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/notes");
      this.notes = res.data;
    } catch (error) {
      console.log("NoteSTORE ----> FETCH", error);
    }
  };

  createNote = async (noteItem, notebook) => {
    console.log(noteItem, notebook);
    try {
      const res = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        noteItem
      );

      this.notes.push(res.data);
      notebook.notes.push({ id: res.data.id });
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
