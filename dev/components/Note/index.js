import React from "react";

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
    const {children, id, remove, color, } = this.props;
    return (
      <div className={styles.note}>
        {
          this.state.isChange ? (
            <form onSubmit={this.changeNote}>
              <input
                onChange={e => this.setState({
                  text: e.target.value
                })}
                type="text"
                value={this.state.text}
              />
              <button>save</button>
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

export default Note;