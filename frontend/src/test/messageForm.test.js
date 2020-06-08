import React from 'react'
import MessageForm from '../components/messageForm'

import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { mount, shallow } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('Form', () => {
  // let component

  it('renders without crashing', () => {
    const component = mount(<MessageForm/>)
    expect(component).toMatchSnapshot()
  })

  it('should update message state when text entered', () => {
    const component = shallow(<MessageForm/>)
    component.find('textarea#message_box').simulate('change', {
      target: { value: 'Hello' }
    })
    expect(component.state('currentMessage')).toEqual('Hello')
  })

  it('should clear current message upon submit', () => {
    const component = mount(<MessageForm
      submitMessage={function(item){return true}}
    />)
    component.find('textarea#message_box').simulate('change', {
      target: { value: 'Hello' }
    })
    component.find('form').simulate('submit')

    expect(component.find('textarea#message_box').props().value).toEqual('')
    expect(component.state('currentMessage')).toEqual('')
  })
  

})