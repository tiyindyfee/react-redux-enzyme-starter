import React, { Component } from 'react'
import { Link } from 'react-router'
// import { browserHistory } from 'react-router'

import { connect } from 'react-redux'
import store from './_ReduxStore'

class View1 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      <h1>View 1</h1>
      <p className="lead">{this.props.sharedMessage}</p>
      <div className="form-group">
        <textarea onChange={(e) => store.dispatch({type:'MESSAGE',message:e.target.value})} className="form-control"></textarea>
      </div>
      <p><Link to="/view2">View 2</Link></p>
      {/* <p><a href="javascript:;" onClick={() => browserHistory.push('/view2')}>View 2</a></p> */}
    </div>
  }
}

const mapStateToProps = function(store) {
  return {
    sharedMessage: store.sharedState.sharedMessage,
  }
}

export default connect(mapStateToProps)(View1)
