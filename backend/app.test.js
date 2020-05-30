import { expect } from 'chai'
import MessageApp from './app'

describe('app', () => {
  let testApp = new MessageApp
  it('app has messages', () => {
    expect(testApp.messages).to.be.an('array')
  })
})