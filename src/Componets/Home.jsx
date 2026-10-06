import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [nowplay, setNowplaying] = useState([]);
  const popularapi = import.meta.env.VITE_API+"/popular";
  const upcomingapi = import.meta.env.VITE_API+"/upcoming";
  const topratedapi = import.meta.env.VITE_API+"/top_rated";
  const nowplayingapi = import.meta.env.VITE_API+"/now_playing";

  useEffect(() => {
    // popular api fatch
    fetch(popularapi, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setPopular(res.results));

    //upcoming  api fatch
    fetch(upcomingapi, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setUpcoming(res.results));

    // top rated api fatch
    fetch(topratedapi, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setToprated(res.results));

    // now playing api fetch
    fetch(nowplayingapi, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setNowplaying(res.results));
  }, []);
  return (
    <>
      <div className="bg-black text-white">
        {/* <!-- HERO SECTION --> */}
        {
          popular.slice(0,1).map((pop)=>(
            <section className="bg-dark py-5" key={pop.id}>
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-4 text-center" key={pop.id}>
                <div className="position-relative d-inline-block">
                  <img
                    src={
                          "https://image.tmdb.org/t/p/w500" + pop.poster_path
                        }
                    className="img-fluid rounded-4 shadow-lg border border-warning border-2"
                    alt="Featured Movie"
                  />
                  <span className="position-absolute top-0 start-0 badge bg-warning text-dark m-2 fs-6 shadow">
                    <i className="bi bi -star-fill me-1"></i>{pop.vote_average}
                  </span>
                </div>
              </div>
              <div className="col-lg-8">
                
                <h1 className="display-4 fw-bold text-warning mb-2">
                 {pop.original_title}
                </h1>
                <p className="text-warning-emphasis mb-3">
                  <span className="badge bg-secondary me-2">
                    <i className="bi bi-calendar3 me-1"></i>{pop.release_date}
                  </span>
                  <span className="badge bg-danger me-2">Sci-Fi</span>
                  <span className="badge bg-info me-2">Adventure</span>
                  <span className="badge bg-secondary">{}m</span>
                </p>
                <p className="text-light fs-5 mb-4">{pop.overview}
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="btn btn-warning btn-lg fw-bold shadow-lg rounded-pill px-4"
                  >
                    <i className="bi bi-play-circle-fill me-2"></i>Watch Trailer
                  </a>
                  <Link
                     to={"/Movie_Details/" + pop.id}
                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                  >
                    <i className="bi bi-info-circle-fill me-2"></i>View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

          ))
        }
        {/* <section className="bg-dark py-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-4 text-center">
                <div className="position-relative d-inline-block">
                  <img
                    src="https://placehold.co/300x450/1a1a2e/FFD700?text=FEATURED+MOVIE"
                    className="img-fluid rounded-4 shadow-lg border border-warning border-2"
                    alt="Featured Movie"
                  />
                  <span className="position-absolute top-0 start-0 badge bg-warning text-dark m-2 fs-6 shadow">
                    <i className="bi bi -star-fill me-1"></i>9.2
                  </span>
                </div>
              </div>
              <div className="col-lg-8">
                <span className="badge bg-warning text-dark mb-2 fs-6">
                  🎬 Featured Film
                </span>
                <h1 className="display-4 fw-bold text-warning mb-2">
                  Interstellar: Beyond Time
                </h1>
                <p className="text-warning-emphasis mb-3">
                  <span className="badge bg-secondary me-2">
                    <i className="bi bi-calendar3 me-1"></i>2024
                  </span>
                  <span className="badge bg-danger me-2">Sci-Fi</span>
                  <span className="badge bg-info me-2">Adventure</span>
                  <span className="badge bg-secondary">2h 49m</span>
                </p>
                <p className="text-light fs-5 mb-4">
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival. An epic journey beyond
                  the stars where love transcends time and space itself.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="btn btn-warning btn-lg fw-bold shadow-lg rounded-pill px-4"
                  >
                    <i className="bi bi-play-circle-fill me-2"></i>Watch Trailer
                  </a>
                  <a
                    href="movie-details.html"
                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                  >
                    <i className="bi bi-info-circle-fill me-2"></i>View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <!-- POPULAR MOVIES --> */}
        <section className="py-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold text-warning">
                <i className="bi bi-fire me-2"></i>Popular Movies
              </h2>
              <Link
                to="/Popular"
                className="btn btn-outline-warning rounded-pill"
              >
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="row g-4">
              {/* <!-- Movie Card 1 --> */}
              {popular.slice(0, 4).map((pop) => (
                <div className="col-6 col-md-4 col-lg-3" key={pop.id}>
                  <div className="card bg-dark text-white h-100 shadow-lg border border-secondary rounded-4 overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + pop.poster_path
                        }
                        className="card-img-top"
                        alt="Movie"
                      />
                      <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                        <i className="bi bi-star-fill me-1"></i>
                        {pop.vote_average}
                      </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-bold">
                        {pop.original_title}
                      </h6>
                      <p className="text-muted small mb-1">
                        <i className="bi bi-calendar3 me-1"></i>{" "}
                        {pop.release_date}
                      </p>

                      <Link
                        to={"/Movie_Details/" + pop.id}
                        className="btn btn-warning btn-sm mt-auto rounded-pill"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-6 col-md-4 col-lg-3">
                <div className="card bg-dark text-white h-100 shadow-lg border border-secondary rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src="https://placehold.co/300x450/16213e/FFD700?text=Movie+1"
                      className="card-img-top"
                      alt="Movie"
                    />
                    <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                      <i className="bi bi-star-fill me-1"></i>8.5
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-bold">The Dark Universe</h6>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-calendar3 me-1"></i>2024
                    </p>
                    <span className="badge bg-danger mb-2 align-self-start">
                      Action
                    </span>
                    <a
                      href="movie-details.html"
                      className="btn btn-warning btn-sm mt-auto rounded-pill"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* <!-- UPCOMING MOVIES --> */}
        <section className="py-5 bg-dark">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold text-warning">
                <i className="bi bi-calendar-event me-2"></i>Upcoming Movies
              </h2>
              <Link
                to="/Upcoming"
                className="btn btn-warning btn-sm mt-auto rounded-pill"
              >
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="row g-4">
              {upcoming.slice(0, 4).map((upc) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card bg-black text-white h-100 shadow-lg border border-warning border-opacity-25 rounded-4 overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + upc.poster_path
                        }
                        className="card-img-top"
                        alt="Movie"
                      />
                      <span className="position-absolute top-0 start-0 badge bg-warning text-dark m-2">
                        Coming Soon
                      </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-bold">
                        {upc.original_title}
                      </h6>
                      <p className="text-muted small mb-1">
                        <i className="bi bi-calendar3 me-1"></i>
                        {upc.release_date}
                      </p>
                      <span className="badge bg-danger mb-2 align-self-start">
                        Thriller
                      </span>
                      <Link
                        to={"/Movie_Details/" + upc.id}
                        className="btn btn-outline-warning btn-sm mt-auto rounded-pill"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="col-6 col-md-4 col-lg-3">
                <div className="card bg-black text-white h-100 shadow-lg border border-warning border-opacity-25 rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src="https://placehold.co/300x450/1b1b2f/FFD700?text=Upcoming+1"
                      className="card-img-top"
                      alt="Movie"
                    />
                    <span className="position-absolute top-0 start-0 badge bg-warning text-dark m-2">
                      Coming Soon
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-bold">Eternal Flame</h6>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-calendar3 me-1"></i>Jan 2025
                    </p>
                    <span className="badge bg-danger mb-2 align-self-start">
                      Thriller
                    </span>
                    <a
                      href="movie-details.html"
                      className="btn btn-outline-warning btn-sm mt-auto rounded-pill"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* <!-- TOP RATED MOVIES --> */}
        <section className="py-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold text-warning">
                <i className="bi bi-trophy-fill me-2"></i>Top Rated Movies
              </h2>
              <Link
                to="/Top_Rated"
                className="btn btn-outline-warning rounded-pill"
              >
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="row g-4">
              {toprated.slice(0, 4).map((top) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card bg-dark text-white h-100 shadow-lg border border-secondary rounded-4 overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + top.poster_path
                        }
                        className="card-img-top"
                        alt="Movie"
                      />
                      <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                        <i className="bi bi-star-fill me-1"></i>
                        {top.vote_average}
                      </span>
                      <span className="position-absolute top-0 start-0 badge bg-danger m-2">
                        {/* #1 */}
                      </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-bold">
                        {top.original_title}
                      </h6>
                      <p className="text-muted small mb-1">
                        <i className="bi bi-calendar3 me-1"></i>
                        {top.release_date}
                      </p>

                      <Link
                        to={"/Movie_Details/" + top.id}
                        className="btn btn-warning btn-sm mt-auto rounded-pill"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-6 col-md-4 col-lg-3">
                <div className="card bg-dark text-white h-100 shadow-lg border border-secondary rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src="https://placehold.co/300x450/1a1a2e/FFD700?text=Top+1"
                      className="card-img-top"
                      alt="Movie"
                    />
                    <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                      <i className="bi bi-star-fill me-1"></i>9.5
                    </span>
                    <span className="position-absolute top-0 start-0 badge bg-danger m-2">
                      #1
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-bold">The Grand Illusion</h6>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-calendar3 me-1"></i>2023
                    </p>
                    <span className="badge bg-success mb-2 align-self-start">
                      Drama
                    </span>
                    <a
                      href="movie-details.html"
                      className="btn btn-warning btn-sm mt-auto rounded-pill"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* <!-- NOW PLAYING --> */}
        <section className="py-5 bg-dark">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold text-warning">
                <i className="bi bi-play-circle-fill me-2"></i>Now Playing
              </h2>
              <Link
                to="/Now_Playing"
                className="btn btn-outline-warning rounded-pill"
              >
                View All <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="row g-4">
              {nowplay.slice(0, 4).map((now) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card bg-black text-white h-100 shadow-lg border border-secondary rounded-4 overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + now.poster_path
                        }
                        className="card-img-top"
                        alt="Movie"
                      />
                      <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                        <i className="bi bi-star-fill me-1"></i>
                        {now.vote_average}
                      </span>
                      <span className="position-absolute top-0 start-0 badge bg-success m-2">
                        In Theatres
                      </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-bold">
                        {top.original_title}
                      </h6>
                      <p className="text-muted small mb-1">
                        <i className="bi bi-calendar3 me-1"></i>
                        {now.release_date}
                      </p>
                      <span className="badge bg-primary mb-2 align-self-start">
                        Sci-Fi
                      </span>
                      <Link
                        to={"/Movie_Details/" + now.id}
                        className="btn btn-warning btn-sm mt-auto rounded-pill"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-6 col-md-4 col-lg-3">
                <div className="card bg-black text-white h-100 shadow-lg border border-secondary rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src="https://placehold.co/300x450/1b1b2f/FFD700?text=Now+1"
                      className="card-img-top"
                      alt="Movie"
                    />
                    <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                      <i className="bi bi-star-fill me-1"></i>8.3
                    </span>
                    <span className="position-absolute top-0 start-0 badge bg-success m-2">
                      In Theatres
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-bold">Final Frontier</h6>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-calendar3 me-1"></i>2024
                    </p>
                    <span className="badge bg-primary mb-2 align-self-start">
                      Sci-Fi
                    </span>
                    <a
                      href="movie-details.html"
                      className="btn btn-warning btn-sm mt-auto rounded-pill"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
