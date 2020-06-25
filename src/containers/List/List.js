import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions'
import classes from './List.module.css'

import AddToDo from '../../components/AddToDo/AddToDo';
import Todos from '../../components/Todos/Todos'

class List extends Component {
	state = {
		todoName: '',
	}

	onChangeHandler = (event) => {
		this.setState({
			todoName: event.target.value
		})
	}

	resetInputHandler = () => {
		this.setState({
			todoName: ''
		})
	}

	onSubmitHandler = (event) => {
		event.preventDefault();

		this.resetInputHandler();

		this.props.onAddItem(this.state.todoName);
	}

	render() {
		const { confUser, items } = this.props;
		const { todoName } = this.state;

		let renderedView = (
			<div className={classes.NoTask}>
				<img src="/images/no-task.svg" alt="" />

				<h3>You have no tasks!</h3>
			</div>
		)

		if (items.length) {
			renderedView = <Todos />
		}
		
		return (
			<Fragment>
				<header className="header-bar">
					<div className="shell">
						<h2>Hello, {confUser}</h2>
					</div>
				</header>

				<div className="main">
					<div className="shell">
						<AddToDo submited={this.onSubmitHandler} changed={this.onChangeHandler} inputVal={todoName} />
						
						<div className={classes.TaskContainer}>
							{renderedView}
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		confUser: state.confirmedUsername,
		items: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddItem: (name) => {
			dispatch({
				type: actionTypes.ADD_TODO,
				payload: {
					name
				}
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
