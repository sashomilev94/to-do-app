import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions'
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

	toggleComplete = (id) => {
		this.setState({
			isCompleted: !this.state.isCompleted
		})

		this.props.onCompletingTask(id)
	}

	render() {
		let names = classes.Todo;

		const { isActivated, isCompleted } = this.state;
		const { name, deleted, id } = this.props;

		if (isActivated) {
			names = [classes.Todo, classes.Activated].join(' ')
		}

		return (
			<li className={names}>
				<span onClick={this.toggleState} className={isCompleted ? classes.Completed : null}>
					{name}
				</span>

				<span className={classes.CheckboxHolder}>
					<input id={id} type="checkbox" onChange={() => this.toggleComplete(id)} />

					<label htmlFor={id}></label>
				</span>

				<button onClick={deleted}>
					<img src="/images/delete.svg" alt="Delete" />
				</button>
			</li>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onCompletingTask: (id) => dispatch({
			type: actionTypes.COMPLETE_TASK,
			id
		}),
	}
}

export default connect(null, mapDispatchToProps)(Todo)
