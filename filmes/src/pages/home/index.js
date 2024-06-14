import React, { useEffect, useState } from "react";
import api from '../../services/api'
import { Link } from "react-router-dom";
import './style.css'


function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "3157e8c97642c6a07a2746c25c8d5e4e",
          language: "pt-BR",
          page: 1,
        }
      })
     setFilmes(response.data.results.slice(0, 10)); 
     setLoading(false)

    }

    loadFilmes();

  }, [])


  if(loading){
    return(
      <div className="loading">
        <h2>Carregando  Filmes...</h2>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filmes) => {
          return (
            <article key={filmes.id}>
              <strong>{filmes.title}</strong>
              <img src={`https:image.tmdb.org/t/p/original/${filmes.poster_path}`}/>
             
              <div className="botao">
              <Link to={`/filmes/${filmes.id}`}>Acessar</Link>
              </div>
            </article>
          )
        })}

      </div>



    </div>
  );
}

export default Home;
