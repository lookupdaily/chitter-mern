import React from 'react';
import logo from './logo.svg';
import MessageForm from './components/messageForm/messageForm'
import MessageList from './components/messageList/messageList'
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
