import {bindActionCreators} from 'redux'
//import {
  //authenticateToken,
  //loadApp,
//} from 'redux/actions'

const mapStateToProps = (state) => {
  const auth = state.auth
  const app = state.app
  const viewerId = state.auth.viewer.id
  const token = window
    && window.localStorage
    && window.localStorage.getItem('token') || null
  return {
    isValidatingToken: auth && auth.validateToken.isFetching,
    load: app.load,
    isAuthenticated: auth.isAuthenticated,
    token,
    viewerId: viewerId
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    authenticateToken,
    loadApp,
  }, dispatch)
}

const redux = {
  mapStateToProps,
  mapDispatchToProps,
}

export default redux
