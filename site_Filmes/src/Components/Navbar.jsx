import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './navBar.css';

function Navbar() {
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return ( 
        <nav id="navbar">
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className={`menu-icon ${menuOpen ? "open" : ""}`}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className={`menu-items ${menuOpen ? "open" : ""}`}>
                <h2><Link to="/" >Site de Filmes</Link></h2>
                <h2><Link to="/TopMovies" >Top Filmes</Link></h2>
                <h2><Link to="/PopularMovies" >Filmes Populares</Link></h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite um Filme" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button type="submit">Buscar</button>
            </form>
        </nav>
    );
}

export default Navbar;
