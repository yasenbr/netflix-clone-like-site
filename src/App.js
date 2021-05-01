import React from 'react'
import './App.css';
import Row from "./components/Row"
import request from "./services/request"

function App() {
  
  return (
    <div className="App">
      <div><h1>netflix clone</h1></div>
      <Row title="Netflix Original" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
    </div>
  );
}

export default App;
