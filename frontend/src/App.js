import React from 'react';
import MessageForm from './components/messageForm'
import MessageList from './components/messageList'
import ErrorHandler from './components/errorHandler'
import './App.css';
import axios from 'axios';
const PORT = 'http://localhost:3001'

class MessageApp extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.getAllMessages()
  }

  setError(error) {
    this.setState({
      error: error
    })
  }

  setMessages(messages){
    this.setState({
      messages: messages
    })
  }

  getAllMessages = () => {
    axios.get(`${PORT}/`)
    .then((result) => {
      this.setMessages(result.data)
    })
    .catch((err) => {
      this.setError(err)
    })
  }

  submitMessage = (data) => {
    axios.post(`${PORT}/message`, {
      content: data
    })
    .then(() => this.getAllMessages())
    .catch((err) => {
      this.setError(err)
    })
  }

  render() {
    return (
      <div className="App">
        <ErrorHandler
        error={this.state.error}
        <MessageForm
        ref='messageFormRef'
        submitMessage={this.submitMessage}/>
        <MessageList/>
      </div>
    );
  }
  
}

export default MessageApp;
