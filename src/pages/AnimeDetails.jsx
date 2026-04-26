import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AnimeDetails = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const detailsRes = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    setAnime(detailsRes.data.data);
  }

  async function fetchRecommendations() {
    const recRes = await axios.get(`https://api.jikan.moe/v4/anime/${id}/recommendations`);

    let recs = recRes.data.data.slice(0, 5);

    if (recs.length < 4) {
      const fallbackRes = await axios.get(
        "https://api.jikan.moe/v4/top/anime?limit=5"
      );

      const fallback = fallbackRes.data.data.slice(0, 5 - recs.length).map((anime) => ({
        entry: {
          mal_id: anime.mal_id,
          title: anime.title,
          images: anime.images
        }
      }));

      recs = [...recs, ...fallback];
    }

    setRecommendations(recs);
  }

  useEffect(() => {
    async function loadAll() {
      setLoading(true);
      await fetchData();
      await fetchRecommendations();
      setLoading(false);
    }
    loadAll();
  }, [id]);


  if (loading) {
    return (
      <div className="anime__loading--wrapper">
        <div className="anime__loading--spinner"></div>
      </div>
    );
  }

  return (
    <div className="details-page">
      <h1 className="details-title">{anime.title || "N/A"}</h1>
      <div className="details-content">
        <img
          className="details-img"
          src={anime.images.jpg.large_image_url}
          alt={anime.title || "N/A"}
        />

        <div className="details-info">
          <p className="anime-Episodes"><strong>Episodes: </strong>{anime.episodes || "N/A"}</p>
          <p className="anime-Score"><strong>Score: </strong>{anime.score || "N/A"}</p>
          <p className="anime-Status"><strong>Status: </strong>{anime.status || "N/A"}</p>
          <p className="anime-description"><strong>Description: </strong>{anime.synopsis || "N/A"}</p>
        </div>
      </div>

      <h2 className="details-subtitle">Recommended Anime</h2>

      <div className="anime-grid">
        {recommendations.map((rec) => (
          <Link
            key={rec.entry.mal_id}
            to={`/anime/${rec.entry.mal_id}`}
            className="anime-card"
          >
            <img
              className="anime__img"
              src={rec.entry.images.jpg.image_url}
              alt={rec.entry.title}
            />
            <h3 className="anime__title">{rec.entry.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnimeDetails;
