import React from 'react'

import classes from './AddToDo.module.css'

const AddToDo = ({submited, changed, inputVal}) => {
	return (
		<div className={classes.TaskAdder}>
			<form onSubmit={submited}>
				<input placeholder="Add Task" onChange={changed} type="text" value={inputVal}  required />
				
				<button>Add</button>
			</form>
		</div>
	)
}

export default AddToDo;
