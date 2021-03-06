import request from 'supertest'
import { expect } from 'chai'

import MessageApp from "../app.js"

describe("message API endpoint tests", function(){

  it("post a message", (done) => {
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

  it("get all messages from backend", (done) => {
    const res = request(MessageApp)
    .get("/")
    res.expect(200)
    .end((err,res) => {
      if (err) {
        return done(err)
      }
      expect(res.body.length).to.equal(1)
      done()
    })
  })

  it('get single message', (done) => {
    const res = request(MessageApp)
    .get("/1")
    res.expect(200)
    .end((err,res) => {
      if (err) {
        return done(err)
      }
      expect(res.body.content).to.equal('Hello, World')
      done()
    })
  })

  it("update a message", (done) => {
    let data = {
      content: "Hi world"
    }

    const res = request(MessageApp)
    .put('/update/1')
    .send(data)
    .set('Accept','application/json')
    res.expect(200)
    .end((err,res) => {
      if (err) { return done(err) }
      expect(res.body.content).to.equal('Hi world')
      done()
    })
  })

  it("delete a message", (done) => {
    const res = request(MessageApp)
    .delete('/delete/1')
    .set('Accept', 'application/json')
    res.expect(200)
    .end((err,res) => {
      if (err) {
        return done(err)
      }
      expect(res.body.length).to.equal(0)
      done()
    })
  })

  describe("error handling", () => {
    it("post, catch empty messages", (done) => {
      let data = {
        content: ""
      }
      const res = request(MessageApp)
      .post('/message')
      .send(data)
      .set('Accept','application/json')
      res.expect(404)
      .end((err,res) => {
        if (err) { return done(err) }
        expect(res.body).to.equal("You can't post an empty message")
        done()
      })
    })

    it("getAll, when no messages in db", (done) => {
      const res = request(MessageApp)
      .get("/")
      res.expect(404)
      .end((err,res) => {
        if (err) { return done(err) }
        expect(res.body).to.equal("There are no messages yet")
        done()
      })
    })

    it("getSingleMessage, when cannot find single message", (done) => {
      const res = request(MessageApp)
      .get("/1")
      res.expect(404)
      .end((err,res) => {
        if (err) { return done(err) }
        expect(res.body).to.equal('Message not found')
        done()
      })
    })

    it("update, when message not found", (done) => {
      let data = {
        content: "Hi world"
      }
  
      const res = request(MessageApp)
      .put('/update/567')
      .send(data)
      .set('Accept','application/json')
      res.expect(404)
      .end((err,res) => {
        if (err) { return done(err) }
        expect(res.body).to.equal('Message not found')
        done()
      })
    })

    it("delete, when message not found", (done) => {
      const res = request(MessageApp)
      .delete('/delete/1023')
      .set('Accept', 'application/json')
      res.expect(404)
      .end((err,res) => {
        if (err) { return done(err) }
        console.log(res.body)
        expect(res.body).to.equal('Message not found')
        done()
      })
    })

  })
})

  

  
