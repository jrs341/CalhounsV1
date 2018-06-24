import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {MainTemplate, Placeholder} from 'library'

export default class Home extends Component {
	static propType = {}

	static defaultProps = {}

	render() {
		return(
			<MainTemplate>
				<Placeholder 
					title='Home Page'
				/>
			</MainTemplate>
		)
	}
}
