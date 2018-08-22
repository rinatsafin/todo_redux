import React from "react";
import Form from "../Form";
import NotesList from "../NotesList";

import styles from "./app.css";
import imageScarlett from "./Scarlett_Johansson.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
	
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.changeNote = this.changeNote.bind(this);
  }
	
  componentWillMount() {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) this.setState({ notes, });	
  }
		
  componentDidUpdate() {
    const { notes, } = this.state;
    localStorage.setItem("notes", JSON.stringify(notes));
  }
	
  addNote(note) {
    const { notes, } = this.state;
    this.setState({
      notes: [note, ...notes, ],
    });
  }
	
  removeNote(id) {
    const { notes, } = this.state;
    this.setState({
      notes: notes.filter(note => note.id !== id),
    });
  }
	
  changeNote(objNote) {
    const { notes, } = this.state;
    const newNotes = notes.map((note) => {
      if (note.id === objNote.id) note.text = objNote.text;
      return note;
    });

    this.setState({
      notes: newNotes,
    });
  }
	
  render() {
    const { notes, } = this.state;
    return (
      <div className={styles.app}>
        <h1 className={styles.header}>Notes</h1>
        <img className={styles.img} src={imageScarlett} alt="Not Valera" />
        <Form handleNote={this.addNote} />

        <NotesList
          notes={notes}
          removeNote={this.removeNote}
          changeNote={this.changeNote}
        />
      </div>
    );
  }
}

export default App;