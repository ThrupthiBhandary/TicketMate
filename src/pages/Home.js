import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
 // Adjust the path based on file location


function Home() {
  const recommendedMovies = [
    { title: "Movie 1", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny8xMCAgODE2IFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408154-vfbvpbydew-portrait.jpg", id: 1 },
    { title: "Movie 2", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA0MS45SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00431676-tqxxrqctyv-portrait.jpg", id: 2 },
    { title: "Movie 3", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NDI4SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00305698-kamcupxhym-portrait.jpg", id: 3 },
    { title: "Movie 4", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAzMjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-ccqetrbtcj-portrait.jpg", id: 4 },
    { title: "Movie 5", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICAxLjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00429365-eygyrmwnnb-portrait.jpg", id: 5 },
    { title: "Movie 6", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICA2NS40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00430623-gxyubexxhw-portrait.jpg", id: 6 },
    { title: "Movie 7", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICA1Ny40SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00019066-sapbfvslrb-portrait.jpg", id: 7 },
    { title: "Movie 8", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS42LzEwICAxLjNLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00429365-eygyrmwnnb-portrait.jpg", id: 8 },
    { title: "Movie 9", image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny43LzEwICA1MiBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00300767-nnqdlqfzed-portrait.jpg", id: 9 },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 movies at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container text-center mt-5">
      <h1>Welcome to TicketMate</h1>
      <p>Your Ultimate Mate for Tickets!</p>

      {/* ✅ Bootstrap Carousel for Featured Movies & Events */}
      <div className="cr"><Carousel interval={3000} className="mt-4 ">
        <Carousel.Item>
          <img className="d-block w-100" src="https://wallpapers.com/images/featured/monster-house-zepkzv7ifggdzihe.jpg" alt="Featured Movie 1" />
          <Carousel.Caption><p>Experience the thrill and adventure!</p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571888087/movie-ticket-offers.jpg" alt="Featured Movie 2" />
          <Carousel.Caption><p>A heartwarming story you can't miss.</p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https://media.insider.in/image/upload/c_crop%2Cg_custom/v1714997386/zfkrbhlzid3xxsok09on.jpg" alt="Featured Event" />
          <Carousel.Caption><h3>Live Concert</h3><p>Join the biggest music event of the year!</p></Carousel.Caption>
        </Carousel.Item>
      </Carousel></div>
      

      {/* ✅ Movie Recommendations Slider */}
      <div className="mt-5 container">
        <h2 className="text-center">Recommended Movies 🎬</h2>
        <Slider {...sliderSettings} className="movie-slider mt-3">
          {recommendedMovies.map((movie) => (
            <div key={movie.id} className="p-2">
              <Link to={`/movies/${movie.id}`} className="text-decoration-none">
                <img src={movie.image} alt={movie.title} className="img-fluid rounded" />
                <p className="mt-2 text-center">{movie.title}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      {/* ✅ Button to Browse Movies */}
      <Link to="/movies" className="btn btn-primary mt-4">
        Browse Movies
      </Link>
    </div>
  );
}

export default Home;
