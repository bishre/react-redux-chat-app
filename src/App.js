import React, { Component } from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { AddMessage } from './components/AddMessage';
import { MessageList } from './components/MessageList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section id="main">
          <AddMessage />
          <MessageList />
        </section>
      </div>
    );
  }
}

export default App;
