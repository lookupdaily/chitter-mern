import React from 'react';
import logo from './logo.svg';
import MessageForm from './components/messageForm/messageForm'
import './App.css';

function MessageApp() {
  return (
    <div className="App">
      <MessageForm/>
      <ul id="message_list">
        message
      </ul>
    </div>
  );
}

export default MessageApp;
