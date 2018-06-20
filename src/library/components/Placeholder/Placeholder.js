import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Placeholder extends Component {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string
  }
  render () {
    const {width, height, title, image, message} = this.props
    const style = require('./_Placeholder.sass')
    return (
      <div className='ura-placeholder'>
        {title
        && <div className={'ura-placeholder-message'}>
          <h3 className={'ura-placeholder-message__title'}>{title}</h3>
          <p className={'ura-placeholder-message__text'}>{message}</p>
        </div>
        }
        {image
        && <div className={'ura-placeholder-image'}>
          <img src={''} />
        </div>
        }
      </div>
    )
  }
}

export default Placeholder
