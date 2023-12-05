import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title='Netflix Original' fetchUrl={request.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title='Trending Now' fetchUrl={request.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={request.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={request.fetchActionMovie}/>
      <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovie}/>
      <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovie}/>
      <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovie}/>
      <Row title='Documentaries' fetchUrl={request.fetchDocumentaries}/>
    </div>
  );
}

export default App;
