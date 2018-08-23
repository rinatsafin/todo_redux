import { Dispatcher, } from "flux";
import store from "../store";

const AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
  if (action.type === "ADD") {
    store.addNote(action.note);
    store.emitChange();
  } else if (action.type === "REMOVE") {
    store.removeNote(action.noteId);
    store.emitChange();
  } else if (action.type === "CHANGE") {
    store.changeNote(action.noteId);
    store.emitChange();
  }
});

export default AppDispatcher;