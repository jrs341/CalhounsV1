import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Placeholder} from 'library'

export default class Header extends Component {
	render () {
		return(
			<div style={{height: '30px',
			display: 'block'}}>
			<Placeholder 
				title='Header'
			/>
			</div>
		)
	}
} 