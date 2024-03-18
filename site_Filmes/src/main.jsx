import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import axios from 'axios';


import './index.css';
import Movie from './Pages/Movie.jsx';
import Home from './Pages/Home.jsx'
import Search from './Pages/Search.jsx'
import PopularMovies from './Pages/PopularMovies.jsx'
import TopMovies from   './Pages/TopMovies.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App/>}>
        <Route path="/" element={<Home/>}/>
          <Route path="movie/:id" element={<Movie/>}/>
          <Route path="search" element={<Search/>} />
          <Route path= "PopularMovies" element={<PopularMovies/>} />
          <Route path= "TopMovies" element={<TopMovies/>} />
        </Route> 
    </Routes>
  </Router>
</React.StrictMode>
)
