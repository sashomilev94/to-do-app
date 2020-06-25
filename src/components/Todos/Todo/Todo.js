import React, { Component } from 'react'

import classes from './Todo.module.css'

class Todo extends Component {
	state = {
		isActivated: false,
		isCompleted: false
	}

	toggleState = () => {
		this.setState({
			isActivated: !this.state.isActivated
		})
	}

	toggleComplete = () => {
		this.setState({
			isCompleted: !this.state.isCompleted
		})
	}

	render() {
		let names = classes.Todo;

		const { isActivated, isCompleted } = this.state;
		const { name, deleted } = this.props;

		if (isActivated) {
			names = [classes.Todo, classes.Activated].join(' ')
		}

		return (
			<li className={names}>
				<span onClick={this.toggleState} className={isCompleted ? classes.Completed : null}>
					{name}
				</span>

				<span className={classes.CheckboxHolder}>
					<input id="check-1" type="checkbox" onChange={this.toggleComplete} />

					<label htmlFor="check-1"></label>
				</span>

				<button onClick={deleted}>
					<img src="/images/delete.svg" alt="Delete" />
				</button>
			</li>
		)
	}
}

export default Todo
