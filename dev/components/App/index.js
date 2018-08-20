import React from "react";

import Form from "../Form";
import NotesList from "../NoteList";

import styles from "./app.css";
import imageScarlett from "./Scarlett_Johansson.jpg";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			notes: []
		};

		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);
		this.changeNote = this.changeNote.bind(this);
	}

	componentWillMount() {
		if (__DEV__) {
			console.log('ololo');
		}
		const notes = JSON.parse(localStorage.getItem('notes'));
		if (notes) {
			this.setState({ notes });	
		}
	}
	
	componentDidUpdate() {
		const notes = JSON.stringify(this.state.notes);
		localStorage.setItem('notes', notes);
	}

	addNote(note) {
		this.setState({
			notes: [note, ...this.state.notes],
		});
	}

	removeNote(id) {
		this.setState({
			notes: this.state.notes.filter(note => note.id !== id),
		});
	}

	changeNote(objNote) {
		const newNotes = this.state.notes.map((note) => {
			if (note.id === objNote.id) {
				note.text = objNote.text;
			}

			return note;
		});

		this.setState({
			notes: newNotes,
		});
	}

	render() {
		return (
			<div className={styles.app}>
				<h1 className={styles.header}>Notes</h1>
				<img src={imageScarlett} alt="Not Valera" />

				<Form handleNote={this.addNote} />

				<NotesList
				  notes={this.state.notes}
				  removeNote={this.removeNote}
				  changeNote={this.changeNote}
				/>
			</div>	
		);
	}
};

export default App;