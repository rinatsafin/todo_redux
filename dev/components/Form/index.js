import React from 'react';

import styles from './form.css';

class Form extends React.Component {
	constructor(){
		super();

		this.state = {
			text: ''
		};

		this.changeText = this.changeText.bind(this);
		this.clearText = this.clearText.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		if (this.state.text) {
			const newNote = {
				id: Date.now(),
				text: this.state.text
			};

			this.props.handleNote(newNote);
			this.clearText();
		}
	}

	changeText(e) {
		this.setState({
			text: e.target.value
		});
	}

	clearText() {
		this.setState({
			text: ''
		});
	}

	render() {
		const {text} = this.state;
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
				<button className={styles.button}>Save note</button>
			</form>
		)
	}
}

export default Form;