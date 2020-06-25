import * as actionTypes from './actions'

const initialState = {
	username: '',
	confirmedUsername: '',
	todos: []
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.ADD_USERNAME : {
			return {
				...state,
				username: action.value
			}
		}
		case actionTypes.CONFIRM_USERNAME : {
			return {
				...state,
				confirmedUsername: state.username
			}
		}
		case actionTypes.ADD_TODO : {
			const newTodo = {
				id: Math.random() * 40,
				name: action.payload.name
			}

			return {
				...state,
				todos: state.todos.concat(newTodo)
			}
		}
		case actionTypes.DELETE_TODO: 
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id)
			}
		default: return state
	}
}

export default reducer;
