import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="App">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/TvSeries" element={<TvSeries />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
