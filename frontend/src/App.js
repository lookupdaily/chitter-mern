import React from 'react';
import logo from './logo.svg';
import './App.css';

function MessageApp() {
  return (
    <div className="App">
      <textarea id="message_box"></textarea>
      <button id="submit"></button>
      <ul id="message_list"></ul>
    </div>
  );
}

export default MessageApp;
