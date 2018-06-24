import React, {Component} from 'react'

class Static extends Component {
  render () {
    return (
      <div className={'ura-page'}>
        { this.props.children }
      </div>
    )
  }
}

export default Static
