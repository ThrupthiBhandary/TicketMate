import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatSelection from "./pages/SeatSelection";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Sports from "./pages/Sports";
import Auth from "./pages/Auth";
import MyTickets from "./pages/MyTickets"; 
import Offers from "./pages/Offers";
import { Routes, Route } from "react-router-dom"; 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  return (
   
    <div className={darkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/seat-selection" element={<SeatSelection />} />
        <Route path="/events" element={<Events />} />
        
        <Route path="/seat-selection/:id" element={<SeatSelection />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/mytickets" element={<MyTickets />} />
       
        <Route path="/auth" element={<Auth setUser={setUser} />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
