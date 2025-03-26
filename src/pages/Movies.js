import { useState } from "react";
import { Link } from "react-router-dom";
import "./Movies.css";

function Movies() {
  // ✅ Movie Data with Genre, Release Date, Rating, and Price
  const movies = [
    { id: 1, title: "Movie 1", genre: "Action", releaseDate: "2024-01-10", rating: 4.5, price: "$10", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAzMjQuMUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-ccqetrbtcj-portrait.jpg" },
    { id: 2, title: "Movie 2", genre: "Comedy", releaseDate: "2024-02-15", rating: 4.2, price: "$12", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjQsIEFwciAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00400387-dvaxpgtuur-portrait.jpg"},
    { id: 3, title: "Movie 3", genre: "Drama", releaseDate: "2024-03-20", rating: 4.7, price: "$8", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjgsIE1hciAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00431634-amqfzjfepg-portrait.jpg" },
    { id: 4, title: "Movie 4", genre: "Horror", releaseDate: "2024-04-05", rating: 3.9, price: "$9", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTIsIEp1biAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00429486-jsyqajpreq-portrait.jpg" },
    { id: 5, title: "Movie 5", genre: "Action", releaseDate: "2024-05-30", rating: 4.8, price: "$11", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MzE5LjVLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00394804-kncnrwappd-portrait.jpg" },
    { id: 6, title: "Movie 6", genre: "Sci-Fi", releaseDate: "2024-06-25", rating: 4.3, price: "$13", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MSwgTWF5IDIwMjU%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00395817-msmhkjxegj-portrait.jpg" },
    { id: 7, title: "Movie 7", genre: "Drama", releaseDate: "2024-07-15", rating: 4.6, price: "$10", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTgsIEFwciAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00420606-rkfxlqvwjl-portrait.jpg" },
    { id: 8, title: "Movie 8", genre: "Comedy", releaseDate: "2024-08-12", rating: 4.1, price: "$9", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-NCwgQXByIDIwMjU%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00437235-gajrvhcsag-portrait.jpg" },
    { id: 9, title: "Movie 9", genre: "Horror", releaseDate: "2024-09-18", rating: 3.7, price: "$8", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjcsIEp1biAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00437726-tkdbeegzyd-portrait.jpg" },
    { id: 10, title: "Movie 10", genre: "Action", releaseDate: "2024-10-22", rating: 4.9, price: "$15", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA0MS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00431676-tqxxrqctyv-portrait.jpg" },
    { id: 11, title: "Movie 11", genre: "Sci-Fi", releaseDate: "2024-11-05", rating: 4.2, price: "$11", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjUsIEFwciAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00433263-njwqtmwjat-portrait.jpg" },
    { id: 12, title: "Movie 12", genre: "Comedy", releaseDate: "2024-12-12", rating: 4.4, price: "$10", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MiwgQXByIDIwMjY%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00411383-jcbpzpngwc-portrait.jpg" },
    { id: 13, title: "Movie 13", genre: "Horror", releaseDate: "2025-01-08", rating: 3.8, price: "$7", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjAyNQ%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00361556-fxzwazcuqu-portrait.jpg" },
    { id: 14, title: "Movie 14", genre: "Drama", releaseDate: "2025-02-14", rating: 4.5, price: "$12", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjAsIEp1biAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00421158-jzpgknqfzb-portrait.jpg" },
    { id: 15, title: "Movie 15", genre: "Action", releaseDate: "2025-03-10", rating: 4.7, price: "$14", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICA2NTYuNUsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00301886-bmvnqnsape-portrait.jpg" }
  ];

  // ✅ State for Genre Filter
  const [selectedGenre, setSelectedGenre] = useState("All");

  // ✅ Filter Movies Based on Genre Selection
  const filteredMovies = selectedGenre === "All" ? movies : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Available Movies 🎬</h2>

      {/* ✅ Genre Filter Dropdown */}
      <div className="text-center mb-3">
        <select className="form-select w-50 mx-auto" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>

      {/* ✅ Movies Grid */}
      <div className="row">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card movie-card">
              <img src={movie.image} className="card-img-top" alt={movie.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{movie.title}</h5>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Release Date:</strong> {movie.releaseDate}</p>
                <p><strong>Ratings:</strong> ⭐ {movie.rating}</p>
                <p><strong>Price:</strong> {movie.price}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Book Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
