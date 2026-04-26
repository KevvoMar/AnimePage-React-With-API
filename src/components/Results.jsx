import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import NotFoundImg from "../assets/luffyonepiece.jpg"

const Results = ({ animeList, loading, hasSearched }) => {

 if (loading) {
  return (
    <section id="results">
      <div className="anime__loading--wrapper">
        <div className="anime__loading--spinner"></div>
      </div>
    </section>
  );
}


  if (hasSearched && !loading && (!animeList || animeList.length === 0)) {
    return (
  <div className="no-results">
    <img
      className="no-results-img"
      src={NotFoundImg}
      alt="Not found"
    />
    <h1 className="no-results-title">
      Sorry, we couldn't find the anime you were looking for...  
      <br />
      Please try again.
    </h1>
  </div>
    );
  }

  return (
    <section id="results">
      <div className="container anime-grid">
        {animeList.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} className="anime-card"
          key={anime.mal_id}>
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              className="anime__img"
            />
            <h3 className="anime__title">{anime.title}</h3>
            <p className="anime__genre">
              Episodes: {anime.episodes || "Unknown"}
            </p>
            <p className="anime__score">
              Score: {anime.score || "N/A"}
            </p>
          </Link>
          
        ))}
      </div>
    </section>
  );
};

export default Results;
