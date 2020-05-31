import fs from 'fs'
import path from 'path'

class MessageApp {
  constructor(filepath) {
    this.nextID = 1
    this.filepath = filepath
    this.messages = filepath ? this.readFromJson() : []
  }

  get allMessages() {
    return this.messages
  }

  post(message) {
    if (message) {
      this.messages.push({
        id: this.nextID,
        content: message,
        date: new Date()
      })
  
      this.nextID ++
      this.writeToJson()
    }
    return this.messages
  }

  get(id) {
    return this.messages.find(message => message.id === id)
  }

  update(id, message) {
    let index = this.messages.findIndex(message => message.id === id)
    this.messages[index].content = message
    this.writeToJson()
    return this.messages[index]
  }

  delete(id) {
    this.messages = this.messages.filter(message => message.id != id)
    this.writeToJson()
    return this.messages
  }

  readFromJson() {
    if (JSON) {
      return JSON.parse(fs.readFileSync(
        this.filepath,"utf8",(err,data)=>{
          if (err) throw err
          })
      )
    }
  }

  writeToJson() {
    if (this.filepath) {
      const jsonItem = JSON.stringify(this.messages)
      fs.writeFileSync(this.filepath, jsonItem, (err) => {
        if (err) throw err
      })
    }
  }


}

export default MessageApp