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
        expect(testApp.messages[0].id).to.equal(1)
      }) 

    })

    it('Read message by id', () => {
      expect(testApp.get(1).content).to.equal('Hi World')
    })

    it('Update message', () => {
      testApp.update(1, "Hello, World!")
      expect(testApp.get(1).content).to.equal('Hello, World!')
    })

    it('Delete message', () => {
      testApp.delete(1)
      expect(testApp.get(1)).to.equal(undefined)
    })

  })

  describe('IDS', () => {
    beforeEach(() => {
      testApp = new MessageApp()
    })

    it('are always unique', () => {
      testApp.post('1')
      testApp.post('2')
      testApp.delete(1)
      testApp.post('3')
      expect(testApp.messages[1].id).to.equal(3)
    })

    it('deletes correct item by ID', () => {
      testApp.post('1')
      testApp.post('2')
      testApp.delete(1)
      expect(testApp.messages[0].content).to.equal('2')
    })

    it('updates correct item by ID', () => {
      testApp.post('1')
      testApp.post('2')
      testApp.delete(1)
      testApp.update(2,'update')
      expect(testApp.get(2).content).to.equal('update')
    })
  })

})