import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import View1 from '../components/View1'

// The Redux store object must be passed into each component as a prop because we're using Redux
import store from '../components/_ReduxStore'

describe('<View1 /> Component', function() {
  it('has an H1 JSX tag within it, accessed via component search (contains method)', function() {
    expect(mount(<View1 store={store} />).contains(<h1>View 1</h1>)).to.equal(true)
  })

  it('has FORM tag within it, accessed via a DOM search (find method)', function() {
    expect(mount(<View1 store={store} />).find('textarea').length).to.equal(1)
  })

  it('has a property called "store" passed in', function() {
    expect(mount(<View1 store={store} />).props().store).to.not.equal(undefined)
  })
})
