import fs from 'fs'
import path from 'path'

class MessageModel {
  constructor(filepath) {
    this.nextID = 1
    this.filepath = filepath
    this._messages = filepath ? this.readFromJson() : []
  }

  get allMessages() {
    return this._messages
  }

  post(message) {
    if (message) {
      this._messages.push({
        id: this.nextID,
        content: message,
        date: new Date()
      })
  
      this.writeToJson()
      this.nextID ++
    }
    return this._messages
  }

  get(id) {
    return this._messages.find(message => message.id == id)
  }

  update(id, message) {
    let index = this._messages.findIndex(message => message.id == id)
    if (index < 0) return "Message not found"
    if (message) {
      this._messages[index].content = message
      this.writeToJson()
      return this._messages[index]
    }
    return []
  }

  delete(id) {
    let index = this._messages.findIndex(message => message.id == id)
    if (index < 0) return "Message not found"

    this._messages.splice(index, 1)
    this.writeToJson()
    return this._messages
  }

  readFromJson() {
    if (JSON) {
      return JSON.parse(fs.readFileSync(
        __dirname+path.normalize(this.filepath),"utf8",(err,data)=>{
        if (err) throw err
        })
      )
    }
  }

  writeToJson() {
    if (this.filepath) {
      const jsonItem = JSON.stringify(this._messages)
      fs.writeFileSync(__dirname+path.normalize(this.filepath), jsonItem, (err) => {
        if (err) throw err;
      })
    }
  }


}

export default MessageModel