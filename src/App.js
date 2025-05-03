import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';

export function App(props) {
  return (
    <h1>{props.title}</h1>
    // <div className='App'>
    //   <Heading />
    // </div>
  );
};
