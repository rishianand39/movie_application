import "./App.css";
import { Routes, Route} from "react-router-dom";
import { Container } from "@mui/material";
import SimpleBottomNavigation from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Trending from "./components/Trending/Trending";
import TVSeries from "./components/Series/Series";
import Movies from "./components/Movies/Movies"
import Search from "./components/Search/Search"

function App() {
  return (
    <>
      <Header></Header>
      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvseries" element={<TVSeries />} />
            <Route path="/search" element={<Search />} />

            
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
