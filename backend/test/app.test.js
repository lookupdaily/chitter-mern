import request from 'supertest'
import { expect } from 'chai'

import MessageApp from "../app.js"

describe("message API endpoint tests", function(){
  it("posts a message", function(done) {
    let data = {
      content: "Hello, World"
    }

    const res = request(MessageApp)
    .post('/message')
    .send(data)
    .set('Accept','application/json')
    res.expect(200)
    .end((err,res) => {
      if (err) { return done(err) }
      expect(res.body[0].content).to.equal('Hello, World')
      done()
    })
  })

  it("gets messages from backend", function(done) {
    const res = request(MessageApp)
    .get("/")
    res.expect(200)
    .end(function(err,res) {
      if (err) {
        return done(err)
      }
      expect(res.body.length).to.equal(1)
      done()
    })
  })

  

  
})