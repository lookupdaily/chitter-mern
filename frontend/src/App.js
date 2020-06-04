import React from 'react';
import logo from './logo.svg';
import './App.css';

function MessageApp() {
  return (
    <div className="App">
      <textarea id="message_box"></textarea>
      <button 
        type="submit"
        name="Submit"
        id="submit">
        Submit  
      </button>
      <ul id="message_list">
        message
      </ul>
    </div>
  );
}

export default MessageApp;
