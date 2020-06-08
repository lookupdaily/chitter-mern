import React from 'react';
import MessageForm from './components/messageForm'
import MessageList from './components/messageList'
import './App.css';

function MessageApp() {
  return (
    <div className="App">
      <MessageForm/>
      <MessageList/>
    </div>
  );
}

export default MessageApp;
