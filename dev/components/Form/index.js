import React from "react";

import dispatcher from "../../dispatcher"; 

import styles from "./form.css";

class Form extends React.Component {
  constructor(){
    super();

    this.state = {
      text: "",
    };

    this.changeText = this.changeText.bind(this);
    this.clearText = this.clearText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { text, } = this.state;
    if (text) {
      const newNote = {
        id: Date.now(),
        text: text,
      };

      dispatcher.dispatch({
        type: "ADD",
        note: newNote,
      });
      this.clearText();
    }
  }

  changeText(e) {
    this.setState({
      text: e.target.value,
    });
  }

  clearText() {
    this.setState({
      text: "",
    });
  }

  render() {
    const { text, } = this.state;
    return (
      <form className={styles.app} onSubmit={this.handleSubmit}>
        <textarea
          placeholder="write your note"
          name="text"
          className={styles.textarea}
          value={text}
          rows="5"
          onChange={this.changeText}
        />
        <button className={styles.button} type="submit">Save note</button>
      </form>
    )
  }
}

export default Form;
// import React from "react";
// import PropTypes from "prop-types";

// import styles from "./form.css";

// class Form extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       text: "",
//     };

//     this.changeText = this.changeText.bind(this);
//     this.clearText = this.clearText.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const { text, } = this.state;
//     const { handleNote, } = this.props;
//     if (text) {
//       const newNote = {
//         id: Date.now(),
//         text,
//       };

//       handleNote(newNote);
//       this.clearText();
//     }
//   }

//   changeText(e) {
//     this.setState({
//       text: e.target.value,
//     });
//   }

//   clearText() {
//     this.setState({
//       text: "",
//     });
//   }

//   render() {
//     const { text, } = this.state;
//     return (
//       <form className={styles.app} onSubmit={this.handleSubmit}>
//         <textarea
//           placeholder="write your note"
//           name="text"
//           className={styles.textarea}
//           value={text}
//           rows="5"
//           onChange={this.changeText}
//         />
//         <button className={styles.button} type="submit">Save note</button>
//       </form>
//     )
//   }
// }

// Form.propTypes = {
//   handleNote: PropTypes.func.isRequired,
// };

// export default Form;