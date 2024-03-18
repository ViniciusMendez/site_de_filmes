import { useState, useEffect } from "react"
import "./MovieGrid.css"
import MovieCard from "../Components/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey
    }
  };

function PopularMovies() {
    const[popularMovies, sePopularMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options)
        .then(response => response.json())
        .then(data => sePopularMovies (data.results))
        .catch(err => console.error(err));
    }, []);
    return ( 
        <div className="container">
        <h2 className="title">Filmes mais Populares</h2>
        <div className="movies-container">
            {popularMovies === 0 && <p>Carregando...</p>}
            {popularMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
     );
}

export default PopularMovies;