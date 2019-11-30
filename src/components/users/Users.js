import React, { Component } from 'react'
import User from './User'

export default class Users extends Component {
	state = {
		users = [

		]
	}
	render() {
		return (
			<div style={userStyle}>
				{this.state.users.map(user => <User key={user.id} user={user}/>)}
			</div>
		)
	}

	
}
const userStyle={
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 1fr)',
		gridGap: '1rem'
	}
