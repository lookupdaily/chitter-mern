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
}

export default MessageApp