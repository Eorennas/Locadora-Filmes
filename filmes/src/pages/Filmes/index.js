
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import './style.css'


function Filmes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
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
          navigate("/", { replace: true })
          return;
        })

    }

    loadFilme();

    return () => {
      console.log('desmontado')
    }
  }, [navigate, id])

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@CodeFlix")

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

    if(hasFilme){
      alert("esse filme ja esta na lista")
      return;
    }

    filmesSalvos.push(filme)
    localStorage.setItem("@CodeFlix", JSON.stringify(filmesSalvos))
    alert("filme salvo")
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }




  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img src={`https:image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / 10</strong>
      <div className="area-btn">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a target='blank' rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
            Trailer
          </a>
        </button>

      </div>

    </div>

  );
}

export default Filmes;
