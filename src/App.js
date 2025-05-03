import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header name="Anna" color="yellow" />
      <Main greet="Epilogue" />
      <Sidebar greet="Hi" />
    </div>
  );
};

export default App;