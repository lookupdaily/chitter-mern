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

  describe('CRUD', () => {

    beforeEach(() => {
      testApp.post('Hi World')
    })

    it('Create a message', () => {
      expect(testApp.messages.length).to.equal(1)
    })
  
    it('- message has date, content and id', () => {
      expect(testApp.messages[0].content).to.equal('Hi World')
      expect(testApp.messages[0].date).not.to.equal(undefined)
      expect(testApp.messages[0].id).to.equal(0)
    }) 


    it('Read message by id', () => {
      expect(testApp.get(0).content).to.equal('Hi World')
    })

    it('Update message', () => {
      testApp.update(0, "Hello, World!")
      expect(testApp.get(0).content).to.equal('Hello, World!')
    })

  })
  

})