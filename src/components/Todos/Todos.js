import React from 'react'
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions'
import classes from './Todos.module.css'

import Todo from './Todo/Todo'

const Todos = props => {
	return (
		<ul className={classes.ListHolder}>
			{props.items.map(item => (
				<Todo deleted={() => props.onDeleteItem(item.id)} key={item.id} name={item.name} id={item.id} />
			))}
		</ul>
	)
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
