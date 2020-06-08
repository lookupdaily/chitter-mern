import React from 'react'
import MessageForm from '../components/messageForm'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('Form', () => {
  let component

  beforeEach(() => {
    component = mount(<MessageForm/>)
  })

  it('renders without crashing', () => {
    expect(component).toMatchSnapshot()
  })

  it('has text box', () => {
    expect(component.exists('textarea#message_box')).toBe(true)
  })

  it('has submit button', () => {
    expect(component.exists('button#submit')).toBe(true)
  })
})