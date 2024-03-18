import { useState, useEffect } from "react"
import MovieCard from "../Components/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey
    }
  };

import "./MovieGrid.css"
function TopMovies() {
    const[topMovies, setTopMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1', options)
        .then(response => response.json())
        .then(data => setTopMovies(data.results))
        .catch(err => console.error(err));
      }, []);
    return (
        <div className=" container">
        <h2 className="title">Melhores Filmes:</h2>
        <div className="movies-container">
            {topMovies === 0 && <p>Carrengando</p>}
            {topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        
    </div>
     );
}

export default TopMovies;



