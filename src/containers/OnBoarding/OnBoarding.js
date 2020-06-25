import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions'
import classes from './OnBoarding.module.css';


class OnBoarding extends Component {
	formSubmitHandler = (e) => {
		e.preventDefault();

		// Get user name
		this.props.onConfirmingUsername();
		
		// Redirect to Todos Page
		this.props.history.push('/todos');
	}

	render() {
		const { onAddingUsername, user } = this.props;
		
		return (
			<div className="shell">
				<div className={classes.OnBoarding}>
					<div className={classes.OnBoarding__Inner}>
						<img src="/images/logo.svg" alt="" />

						<h3>To Do List Manager</h3>

						<p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Mauris pellentesque erat in blandit luctus.</p>

						<form onSubmit={this.formSubmitHandler}>
							<input
								className={classes.Input}
								onChange={(event) => onAddingUsername(event.target.value)} 
								type="text" 
								placeholder="Enter username" 
								value={user} 
								required />

							<button 
								className={classes.OnBoarding__Button}>Get Started</button>

							<p>{this.props.confUser}</p>
						</form>
					</div>
				</div>
			</div>	
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.username
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddingUsername: value => dispatch({
			type: actionTypes.ADD_USERNAME,
			value
		}),
		onConfirmingUsername:(event) => {
			dispatch({
				type: actionTypes.CONFIRM_USERNAME
			})
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(OnBoarding);
