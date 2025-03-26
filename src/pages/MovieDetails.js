import { useParams, Link } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const movieId = Number(id); // Convert id to number

  const movies = {
    1: { title: "Movie 1", trailer: "https://www.youtube.com/embed/abcd1234" },
    2: { title: "Movie 2", trailer: "https://www.youtube.com/embed/wxyz5678" },
  };

  const movie = movies[movieId] || { title: "Unknown", trailer: "" };

  return (
    <div className="container mt-4">
      <h2>{movie.title}</h2>
      {movie.trailer ? (
        <div className="ratio ratio-16x9">
          <iframe
            className="embed-responsive-item"
            src={movie.trailer}
            allowFullScreen
            title={movie.title}
            aria-label={`Trailer for ${movie.title}`}
          ></iframe>
        </div>
      ) : (
        <p>Trailer not available.</p>
      )}
      <Link to={`/movies/${movieId}/seat-selection`} className="btn btn-primary mt-3">
        🎟 Select Seats
      </Link>
    </div>
  );
}

export default MovieDetails;
