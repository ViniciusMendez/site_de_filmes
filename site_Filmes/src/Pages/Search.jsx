import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import './MovieGrid.css'
import MovieCard from "../Components/MovieCard";

const apiKey = import.meta.env.VITE_API_KEY

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey
    }
  };

function Search() {
  const [searchParams] = useSearchParams();
  
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=pt-br&page=1`,options)
    .then(response => response.json())
    .then(data=> setMovies(data.results))
    .catch(err => console.error(err));
  }, [query]);
  
  
  return (
    <div className=" container">
    <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
    <div className="movies-container">
        {movies && movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
    
  </div>
      );
}

export default Search;