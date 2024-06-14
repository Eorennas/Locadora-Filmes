import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
           
            <Link to="/" className='logo' >CodeFlix</Link>
            <Link to="/favoritos" className='favoritos'>Meus Filmes</Link>
          
       
           

        </header>

    )
}

export default Header;