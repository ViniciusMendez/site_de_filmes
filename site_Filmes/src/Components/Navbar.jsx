import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './navBar.css'

function Navbar() {

    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }

 
    return ( 
        <nav id="navbar">
        <h2>
            <Link to="/" >Site de Filmes</Link>
        </h2>

        <h2>
            <Link to="/TopMovies" >Top Filmes</Link>
        </h2>

        <h2>
            <Link to="/PopularMovies" >Filmes Populares</Link>
        </h2>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite um Filme" onChange={(e) => setSearch(e.target.value)}
            value={search} />
            <button type="submit">Buscar</button>
        </form>
      </nav>
     );
}

export default Navbar;