import React, {Component} from 'react'

class PageNotFound extends Component {
  render () {
    return (
      <div style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 800
      }}>

        <h2>{'Page not found...'}</h2>
      </div>
    )
  }
}

export { PageNotFound }
export default PageNotFound
