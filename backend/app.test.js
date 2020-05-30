import { expect } from 'chai'
import MessageApp from './app'

describe('app', () => {

  let testApp 

  beforeEach(() => {
    testApp = new MessageApp
  })

  it('has no messages', () => {
    expect(testApp.messages.length).to.equal(0)
  })

  describe('posting a message', () => {
    beforeEach(() => {
      testApp.post('Hi World')
    })

    it('creates a new message', () => {
      expect(testApp.messages.length).to.equal(1)
    })
  
    it('messages have date, content and id', () => {
      expect(testApp.messages[0].content).to.equal('Hi World')
      expect(testApp.messages[0].date).not.to.equal(undefined)
      expect(testApp.messages[0].id).to.equal(0)
    })

  })  

  

})