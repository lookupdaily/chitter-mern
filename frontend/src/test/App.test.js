import React from 'react';
import MessageApp from '../App';
import axios from 'axios'
jest.mock('axios')

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  let component

  beforeEach(() => {
    const data = { data: [] }
    const messages = {data: [{id:1, content:'hello', date:'2000'}]}
    
    axios.post.mockImplementation(() => Promise.resolve(data))
    axios.get.mockResolvedValue(messages)

    component = mount(<MessageApp/>)
  })

  afterEach(() => {
    axios.post.mockClear()
    axios.get.mockClear()
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

  it('has message list', () => {
    expect(component.exists('ul#message_list')).toBe(true)
  })

  it('posts data and clears message on submit success', () => {
    component.find('textarea#message_box').simulate('change', {
      target: { value: 'Hello' }
    })
    component.find('form').simulate('submit')
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3001/message",
      { "content": "Hello" }
    )
    expect(component.instance().refs.messageFormRef.state.currentMessage).toEqual('')
  })

  it('loads data from API', () => {
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
