import React from "react";
import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import request from "./services/requests";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="Netflix Original"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horros Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
