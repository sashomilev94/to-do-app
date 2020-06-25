import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions'
import classes from './Todos.module.css'

import Todo from './Todo/Todo'

class Todos extends Component {
	state = {
		showActiveTodos: false
	}

	handleCompletedFilter = () => {
		this.setState({
			showActiveTodos: !this.state.showActiveTodos
		})
	}

	render() {
		const { showActiveTodos } = this.state;
		const { items, onDeleteItem } = this.props;

		const computedItems = showActiveTodos ? items.filter(item => item.completed === showActiveTodos) : items;

		return (
			<Fragment>
				<div className={classes.FilterButton}>
					<button onClick={this.handleCompletedFilter}>Show Completed</button>
				</div>
				
				<ul className={classes.ListHolder}>
					{computedItems.map(item => (
						<Todo deleted={() => onDeleteItem(item.id)} key={item.id} name={item.name} id={item.id} />
					))}
				</ul>
			</Fragment>
		)
	}
}

const mapStateToProps = state => {
	return {
		items: state.todos
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDeleteItem: (id) => {
			dispatch({
				type: actionTypes.DELETE_TODO,
				id
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
