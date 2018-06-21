import React, {Component} from 'react'
import { Container } from '../../containers'
import clientRedux from './redux/clientRedux'
import ClientView from './ClientView'
import './Client.sass'

// This will be a client composed of many apps

export class Client extends Component {
  constructor () {
    super ()
    this.state = {
      visible: false
    }
  }
  render () {
    return <div className='client'>
      <Container
        redux={clientRedux}
        componentToWrap={ClientView}
        {...this.props}
        router
      />
    </div>
  }
}

export default Client
