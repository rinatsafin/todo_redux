import EventEmitter from "events";

let notes = JSON.parse(localStorage.getItem("notes")) || [];

const store = Object.assign({}, EventEmitter.prototype, {
  emitChange() {
    localStorage.setItem("notes", JSON.stringify(notes));
    this.emit("change");
  },

  addListener(callback) {
    this.on("change", callback);
  },

  removeListener(callback) {
    this.removeListener("change", callback);
  },

  getNotes() {
    return notes;
  },

  addNote(note) {
    notes = [ note, ...notes, ];
  },

  removeNote(noteId) {
    notes = notes.filter(note => note.id !== noteId);
  },
});

export default store;
/*
import { createStore, } from "redux";
import reducer from "../reducer";

const store = createStore(reducer);

export default store;
*/