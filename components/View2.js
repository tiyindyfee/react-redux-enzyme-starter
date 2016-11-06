import React, { Component } from 'react'
import { Link } from 'react-router'
// import { browserHistory } from 'react-router'

import { connect } from 'react-redux'
import store from './_ReduxStore'

class View2 extends Component {
  render() {
    return <div>
      <h1>View 2</h1>
      <p className="lead">{this.props.sharedMessage}</p>
      <p><Link to="/">View 1</Link></p>
    </div>
  }
}

const mapStateToProps = function(store) {
  return {
    sharedMessage: store.sharedState.sharedMessage,
  }
}

export default connect(mapStateToProps)(View2)
