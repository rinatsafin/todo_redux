import React from "react";
import PropTypes from "prop-types";

import Note from "../Note";

import styles from "./notelist.css";

const NotesList = (props) => {
  const { notes, removeNote, changeNote, } = props;
  return (
    <div className={styles.app}>
      {
        notes.length ? (
          notes.map(note => (
            <Note
              key={note.id}
              id={note.id}
              remove={removeNote}
              change={changeNote}
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
};

NotesList.propTypes = {
  notes: PropTypes.string.isRequired,
  removeNote: PropTypes.func.isRequired,
  changeNote: PropTypes.func.isRequired,
};

export default NotesList;