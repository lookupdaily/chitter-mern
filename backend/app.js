class MessageApp {
  constructor() {
    this.messages = []
  }

  post(message) {
    this.messages.push({
      id: this.messages.length,
      content: message,
      date: Date.now()
    })
    return this.messages
  }

  get(id) {
    return this.messages[id]
  }

  update(id, message) {
    let item = this.messages[id]
    item.content = message
    return item
  }

  delete(id) {
    this.messages.splice(id, 1)
    return this.messages
  }
}

export default MessageApp