class MessageApp {
  constructor() {
    this.messages = []
  }

  post(message) {
    this.messages.push(message)
  }
}

export default MessageApp