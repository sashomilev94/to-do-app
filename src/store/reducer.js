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
				completed: false,
				name: action.payload.name
			}

			return {
				...state,
				todos: state.todos.concat(newTodo)
			}
		}
		case actionTypes.DELETE_TODO: {
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.id)
			}
		}
		case actionTypes.COMPLETE_TASK: {
			const index = state.todos.findIndex(item => item.id === action.id);

			const completeUpdatedArray = [...state.todos]

			completeUpdatedArray[index] = { ...completeUpdatedArray[index], completed: !completeUpdatedArray[index].completed }
			
			return { 
		       ...state,
		       todos: completeUpdatedArray
				
			}
		}
		default: return state
	}
}

export default reducer;
