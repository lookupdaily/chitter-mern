import React from 'react';
import ReactDom from 'react-dom'
import mockAxios from '../_mocks_/axios'
import MessageApp from '../App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  let component

  beforeEach(() => {
    component = mount(<MessageApp/>)
    mockAxios.post.mockImplementation(() =>
    Promise.resolve({ data: [] }))
  })

  afterEach(() => mockAxios.post.mockClear())

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
    component = mount(<MessageApp/>)
    component.find('textarea#message_box').simulate('change', {
      target: { value: 'Hello' }
    })
    component.find('form').simulate('submit')

    expect(mockAxios.post).toHaveBeenCalledWith(
      "http://localhost:5000/message",
      { "content": "Hello" }
    )

    expect(component.instance().refs.messageFormRef.state.currentMessage).toEqual('')
  })
})
