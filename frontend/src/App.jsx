import React, { Component } from 'react';
import MessageForm from './components/messageForm'
import MessageList from './components/messageList'
import './App.css';
import axios from 'axios';
const PORT = 'http://localhost:5000'

class MessageApp extends Component {
  // constructor() {
  //   super()
  //   this.messageFormRef = React.createRef()
  // }

  submitMessage(data) {
    axios.post(`${PORT}/message`, {
      content: data
    })
  }

  render() {
    return (
      <div className="App">
        <MessageForm
        ref='messageFormRef'
        submitMessage={this.submitMessage}/>
        <MessageList/>
      </div>
    );
  }
  
}

export default MessageApp;
