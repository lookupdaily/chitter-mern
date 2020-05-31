import fs from 'fs'

class MessageApp {
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
  
      this.nextID ++
      this.writeToJson()
    }
    return this._messages
  }

  get(id) {
    return this._messages.find(message => message.id === id)
  }

  update(id, message) {
    let index = this._messages.findIndex(message => message.id === id)
    if (index < 0) return "Message not found"
    if (message) {
      this._messages[index].content = message
      this.writeToJson()
    }
    return this._messages[index]
  }

  delete(id) {
    this._messages = this._messages.filter(message => message.id != id)
    this.writeToJson()
    return this._messages
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
      const jsonItem = JSON.stringify(this._messages)
      fs.writeFileSync(this.filepath, jsonItem, (err) => {
        if (err) throw err
      })
    }
  }


}

export default MessageApp