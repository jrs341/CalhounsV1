import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Navigation, Placeholder} from 'library'

export default class Header extends Component {
	render () {
		return(
			<div>
			<Navigation />
			<Placeholder 
				title='Header'
			/>
			</div>
		)
	}
} 