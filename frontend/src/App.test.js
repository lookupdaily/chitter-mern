import React from 'react';
import ReactDOM from 'react-dom';
import MessageApp from './App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  let component

  beforeEach(() => {
    component = mount(<MessageApp/>)
  })

  // it('renders without crashing', () => {
  //   const component = mount(<MessageApp/>)
  //   expect(component).toMatchSnapshot()
  // })

  it('has text box', () => {
    expect(component.exists('textarea#message_box')).toBe(true)
  })
})