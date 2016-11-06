import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import View1 from '../components/View1'

describe('<View1 /> Component', function() {
  it('has h1 tag within it', function() {
    expect(shallow(<View1 />).contains(<h1 />)).to.equal(true)
  })

  it('has form field after mounting', function() {
    expect(mount(<View1 />).find('textarea').length).to.equal(1)
  })
})
