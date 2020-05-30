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
  }

  get(id) {
    return this.messages[id]
  }

  update(id, message) {
    let item = this.messages[id]
    item.content = message
    return item
  }
}

export default MessageApp