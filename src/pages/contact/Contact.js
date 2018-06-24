import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {MainTemplate, Placeholder} from 'library'

export default class Contact extends Component {
	static propType = {}

	static defaultProps = {}

	render () {
		return (
			<MainTemplate>
				<Placeholder
					title='Contact Us'
				/>
			</MainTemplate>
		)
	}
}