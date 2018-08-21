import React from "react";
import PropTypes from "prop-types";

import styles from "./note.css";

class Note extends React.Component {
  constructor() {
    super();

    this.state = {
      isChange: false,
    };

    this.changeNote = this.changeNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
	

  // static get defaultProps(){
  // 	return {
  // 		color: 'red'
  // 	}
  // }

  changeNote(e) {
    e.preventDefault();
    const { id, change, } = this.props;
    const { text, } = this.state;
    const changeNote = { id, text, };
    
    change(changeNote);

    this.setState({
      isChange: false,
    });
  }

  handleChange() {
    const { children, } = this.props;
    this.setState({
      isChange: true,
      text: children,
    });
  }

  render() {
    const { children, id, remove, color, } = this.props;
    const { text, isChange,  } = this.state;
    return (
      <div className={styles.note}>
        {
          isChange ? (
            <form onSubmit={this.changeNote}>
              <input
                onChange={e => this.setState({
                  text: e.target.value,
                })}
                type="text"
                value={text}
              />
              <button type="submit">save</button>
            </form>
          ) : (
            <div>
              <span style={{ color, }}>
                {children}
              </span>
              <div className={styles.action}>
                <button
                  className={styles.edik}
                  onClick={this.handleChange}
                  type="submit"
                >
                  i
                </button>
                <button
                  className={styles.remove}
                  onClick={() => remove(id)}
                  type="submit"
                >
                  x
                </button>
              </div>
            </div>		
          )
        }
      </div>
    )
  }
}

Note.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

export default Note;