import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { JsonToTable } from "react-json-to-table";
import logo from './logo.svg';
import './App.css';

function App() {
  const sep = ' | '
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <div>
            <Link className="App-link" to="/">home</Link>{sep}
            <Link className="App-link" to="/test">test</Link>{sep}
            <Link className="App-link" to="/channels">Show Channels</Link>
          </div>
          <Routes>
            <Route exact path="/"  element={<Home/>} />
            <Route path="/test"  element={<Test/>}  />
            <Route path="/channels"  element={<Channels/>}  />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

function Home() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >Learn React</a>
      <p>The current time is {currentTime}.</p>
    </div>
  )
}


function Test() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


function Channels() {

  const [channels, setChannels] = useState(0);

  const myJson = {
    "Student": { name: "Jack", email: "jack@xyz.com" },
    "Student id": 888,
    "Sponsors": [
      { name: "john", email: "john@@xyz.com" },
      { name: "jane", email: "jane@@xyz.com" }
    ]
  };

  useEffect(() => {
    fetch('/api/get_channels').then(res => res.json()).then(data => {
      setChannels(data);
    });
  }, []);

  return (
  <div>
    <p/>  
    <JsonToTable json={channels} />
  </div>
  );
}

export default App;