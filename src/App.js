import "./css/styles.css";
import Row from "./componets/Row";
import requests from "./request";
import Banner from "./componets/Banner.jsx";
import Navbar from "./componets/Navbar.jsx";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />

      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLarger
      />
      <Row title={"Treding"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rating"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romantic Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
