
import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";


function Filmes() {
  const {id} = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme(){
      await api.get(`/movie/${id}`, {
        params:{
          api_key: "3157e8c97642c6a07a2746c25c8d5e4e",
          language: "pt-BR",
        }
      })
      .then((response) => {
        setFilme(response.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("filme n encontrado")
      })

    }

    loadFilme();

    return() => {
      console.log('desmontado')
    }
  } , [])

    if(loading){
      return(
        <div className="filme-info">
          <h1>Carregando detalhes...</h1>
        </div>
      )
    }




    return (
      <div className="filme-info">
        <h1>{filme.title}</h1>
        <img src={`https:image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>
        <h3>Sinopse</h3>
        <span>{filme.overview}</span>
        <strong>Avaliação: {filme.vote_average} / 10</strong>
      </div>

    );
  }
  
  export default Filmes;
  