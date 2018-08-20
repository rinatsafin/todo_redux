import React from 'react';

import Note from '../Note';

import styles from './notelist.css';

const NotesList = (props) => (
	<div className={styles.app}>
		{
			props.notes.length ? (
				props.notes.map(note => (
					<Note
					  key={note.id}
					  id={note.id}
					  remove={props.removeNote}
					  change={props.changeNote}
					>
						{note.text}
					</Note>	
				))	
			) : (
				<p className={styles.empty}>no notes yet :(</p>	
			)
		}
	</div>
);

export default NotesList;