class MessageApp {
  constructor() {
    this.nextID = 1
    this.messages = []
  }

  post(message) {
    this.messages.push({
      id: this.nextID,
      content: message,
      date: new Date()
    })

    this.nextID ++
    return this.messages
  }

  get(id) {
    return this.messages.find(message => message.id === id)
  }

  update(id, message) {
    let index = this.messages.findIndex(message => message.id === id)
    this.messages[index].content = message
    return this.messages[index]
  }

  delete(id) {
    this.messages = this.messages.filter(message => message.id != id)
    return this.messages
  }
}

export default MessageApp