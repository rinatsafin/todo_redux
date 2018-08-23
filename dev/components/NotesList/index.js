import React from "react";

import store from "../../store";

import Note from "../Note";

import styles from "./noteslist.css";

class NotesList extends React.Component {
  constructor() {
    super();

    this.state = this.getState();
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    store.addListener(this.updateState);
  }

  componentWillUnmount() {
    store.removeListener(this.updateState);
  }

  getState() {
    return {
      notes: store.getNotes(),
    };
  }
  
  updateState() {
    this.setState(this.getState());
  }

  render() {
    const { notes, } = this.state;
    return (
      <div className={styles.app}>
        {
          notes.length ? (
            notes.map(note => (
              <Note
                key={note.id}
                id={note.id}
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
  }
}

export default NotesList;

// import React from "react";
// import PropTypes from "prop-types";

// import Note from "../Note";

// import styles from "./noteslist.css";

// const NotesList = (props) => {
//   const { notes, removeNote, changeNote, } = props;
//   return (
//     <div className={styles.app}>
//       {
//         notes.length ? (
//           notes.map(note => (
//             <Note
//               key={note.id}
//               id={note.id}
//               remove={removeNote}
//               change={changeNote}
//               color={{ color: "red", }}
//             >
//               {note.text}
//             </Note>	
//           ))	
//         ) : (
//           <p className={styles.empty}>no notes yet :(</p>	
//         )
//       }
//     </div>
//   );
// };

// NotesList.propTypes = {
//   notes: PropTypes.instanceOf(Array).isRequired,
//   removeNote: PropTypes.func.isRequired,
//   changeNote: PropTypes.func.isRequired,
// };

// export default NotesList;