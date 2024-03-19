/* eslint-disable react/jsx-key */
import  {useState, useEffect} from 'react';
import MovieCard from '../Components/MovieCard';
import './MovieGrid.css'

const apiKey = import.meta.env.VITE_API_KEY;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: apiKey
    }
  };

function Home() {

    const[nowMovies, setNowMovies] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1', options)
        .then(response => response.json())
        .then(data => setNowMovies (data.results))
        .catch(err => console.error(err));
    },[])


    return ( 
      <div className=" container">
        <h2 className="title">Filmes mais recentes:</h2>
        <div className="movies-container">
            {nowMovies && nowMovies.map((movie) => <MovieCard  key={movie.id} movie={movie}/>)}
        </div>
        
      </div>
     );
}

export default Home;