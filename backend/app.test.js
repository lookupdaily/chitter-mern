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

    describe('Create messages', () => {

      it('stores new messages', () => {
        expect(testApp.messages.length).to.equal(1)
      })
    
      it('message has date, content and id', () => {
        expect(testApp.messages[0].content).to.equal('Hi World')
        expect(testApp.messages[0].date).not.to.equal(undefined)
        expect(testApp.messages[0].id).to.equal(0)
      }) 
    })

    it('Read message by id', () => {
      expect(testApp.get(0).content).to.equal('Hi World')
    })

    it('Update message', () => {
      testApp.update(0, "Hello, World!")
      expect(testApp.get(0).content).to.equal('Hello, World!')
    })

    it('Delete message', () => {
      testApp.delete(0)
      expect(testApp.get(0)).to.equal(undefined)
    })

  })
  

})