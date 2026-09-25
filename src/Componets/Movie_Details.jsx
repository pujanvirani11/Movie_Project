import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Movie_Details() {
  const { id } = useParams();
  const movieDetailapi = import.meta.env.VITE_API+"/" + id;
  const similarapi = import.meta.env.VITE_API+"/" + id + "/similar";
  const creditapi = import.meta.env.VITE_API+"/" + id + "/credits";

  const [popular, setPopular] = useState({});
  const [similars, setSimilars] = useState([]);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // popular api fatch
    fetch(movieDetailapi, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setPopular(res));

    // cast or credit api call
    fetch(creditapi, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setCast(res.cast));
    fetch(similarapi, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setSimilars(res.results));
  }, [id]);

  return (
    <>
      <div className="bg-black text-white">
        {/* <!-- BACKDROP --> */}
        <div className="bg-dark border-bottom border-secondary py-5">
          <div className="container">
            <div className="row g-4 align-items-start">
              {/* <!-- Poster --> */}
              <div className="col-md-3 text-center">
                <div className="position-relative d-inline-block">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/w500" + popular.poster_path
                    }
                    className="img-fluid rounded-4 shadow-lg border border-warning border-2"
                    alt="Movie Poster"
                  />
                </div>
                <div className="mt-3 d-flex gap-2 justify-content-center flex-wrap">
                  <a
                    href="#"
                    className="btn btn-warning rounded-pill fw-bold px-4"
                  >
                    <i className="bi bi-play-fill me-1"></i>Trailer
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-light rounded-pill px-3"
                  >
                    <i className="bi bi-bookmark-plus me-1"></i>Watchlist
                  </a>
                </div>
              </div>

              {/* <!-- Details --> */}
              <div className="col-md-9">
                <h1 className="fw-bold text-warning">{popular.title}</h1>

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-warning text-dark fs-6 px-3 py-2">
                    <i className="bi bi-star-fill me-1"></i>
                    {popular.vote_average}/10
                  </span>
                  <span className="badge bg-secondary px-3 py-2">
                    <i className="bi bi-calendar3 me-1"></i>
                    {popular.release_date}
                  </span>
                  <span className="badge bg-secondary px-3 py-2">
                    <i className="bi bi-clock me-1"></i>
                    {popular.runtime}
                  </span>
                  <span className="badge bg-danger px-3 py-2">Sci-Fi</span>
                  <span className="badge bg-info px-3 py-2">Adventure</span>
                  <span className="badge bg-success px-3 py-2">Drama</span>
                </div>

                {/* <!-- Info Table -->? */}
                <div className="card bg-black border border-secondary rounded-4 p-3 mb-4">
                  <div className="row g-3">
                    <div className="col-6 col-md-3">
                      <p className="text-secondary small mb-1">Release Date</p>
                      <p className="fw-bold mb-0">{popular.release_date}</p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="text-secondary small mb-1">Runtime</p>
                      <p className="fw-bold mb-0">{popular.runtime}</p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="text-secondary small mb-1">Language</p>
                      <p className="fw-bold mb-0">
                        {popular.original_language}
                      </p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="text-secondary small mb-1">Status</p>
                      <p className="fw-bold mb-0 text-success">
                        {popular.status}
                      </p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="text-secondary small mb-1">Budget</p>
                      <p className="fw-bold mb-0">{popular.budget}</p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="text-secondary small mb-1">Box Office</p>
                      <p className="fw-bold mb-0">{popular.revenue}</p>
                    </div>
                    {/* <div className="col-6 col-md-3">
              <p className="text-secondary small mb-1">Director</p>
              <p className="fw-bold mb-0">{popular.name}</p>
            </div> */}
                    <div className="col-6 col-md-3">
                      <p className="text-secondary small mb-1">Rating</p>
                      <p className="fw-bold mb-0">{popular.vote_average}</p>
                    </div>
                  </div>
                </div>

                <h5 className="text-warning fw-bold mb-2">
                  <i className="bi bi-file-text-fill me-2"></i>Overview
                </h5>
                <p className="text-light">{popular.overview}</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- CAST --> */}
        <section className="py-5 bg-dark">
          <div className="container">
            <h3 className="text-warning fw-bold mb-4">
              <i className="bi bi-people-fill me-2"></i>Top Cast
            </h3>
            <div className="row g-3">
              {cast.slice(0,12).map((coc)=> (
                <div className="col-6 col-md-3 col-lg-2">
                  <div className="card bg-black border border-secondary rounded-4 text-center p-2">
                    <img
                      src={
                          "https://image.tmdb.org/t/p/w500" + coc.profile_path
                        }
                      className="rounded-circle mx-auto mb-2 border border-warning"
                      width="80"
                      height="80"
                      alt="Actor"
                    />
                    <h6 className="fw-bold text-light mb-0 small">
                      {coc.original_name}
                    </h6>
                    <small className="text-secondary">{coc.name}</small>
                  </div>
                </div>
              ))}
              {/* <div className="col-6 col-md-3 col-lg-2">
                <div className="card bg-black border border-secondary rounded-4 text-center p-2">
                  <img
                    src="https://placehold.co/150x150/16213e/FFD700?text=Actor"
                    className="rounded-circle mx-auto mb-2 border border-warning"
                    width="80"
                    height="80"
                    alt="Actor"
                  />
                  <h6 className="fw-bold text-light mb-0 small">
                    James McAvoy
                  </h6>
                  <small className="text-secondary">Cooper</small>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* <!-- PRODUCTION --> */}
        <section className="py-4">
          <div className="container">
            <h3 className="text-warning fw-bold mb-4">
              <i className="bi bi-building me-2"></i>Production Companies
            </h3>
            <div className="d-flex flex-wrap gap-3">
              <span className="badge bg-dark border border-secondary text-light px-4 py-2 fs-6 rounded-pill shadow">
                <i className="bi bi-film me-2"></i>Warner Bros.
              </span>
              <span className="badge bg-dark border border-secondary text-light px-4 py-2 fs-6 rounded-pill shadow">
                <i className="bi bi-film me-2"></i>Legendary Pictures
              </span>
              <span className="badge bg-dark border border-secondary text-light px-4 py-2 fs-6 rounded-pill shadow">
                <i className="bi bi-film me-2"></i>Paramount
              </span>
              <span className="badge bg-dark border border-secondary text-light px-4 py-2 fs-6 rounded-pill shadow">
                <i className="bi bi-film me-2"></i>Syncopy Films
              </span>
            </div>
          </div>
        </section>

        {/* <!-- TRAILER SECTION --> */}
        <section className="py-5 bg-dark">
          <div className="container">
            <h3 className="text-warning fw-bold mb-4">
              <i className="bi bi-play-circle-fill me-2"></i>Trailer
            </h3>
            <div className="card bg-black border border-secondary rounded-4 shadow-lg p-5 text-center">
              <i className="bi bi-play-circle text-warning display-1 mb-3"></i>
              <h5 className="text-light">Official Trailer</h5>
              <p className="text-secondary">
                Connect to TMDB API to load the official trailer.
              </p>
              <a href="#" className="btn btn-warning rounded-pill px-4">
                <i className="bi bi-youtube me-2"></i>Watch on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* <!-- SIMILAR MOVIES --> */}

        <section className="py-5">
          <div className="container">
            <h3 className="text-warning fw-bold mb-4">
              <i className="bi bi-collection-play-fill me-2"></i>Similar Movies
            </h3>
            <div className="row g-4">
              {similars.slice(0, 4).map((sim) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="card bg-dark text-white h-100 shadow-lg border border-secondary rounded-4 overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + sim.poster_path
                        }
                        className="card-img-top"
                        alt="Movie"
                      />
                      <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                        <i className="bi bi-star-fill me-1"></i>
                        {sim.vote_average}
                      </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-bold">{sim.title}</h6>
                      <p className="text-muted small mb-1">
                        <i className="bi bi-calendar3 me-1"></i>
                        {sim.release_date}
                      </p>
                      <span className="badge bg-primary mb-2 align-self-start">
                        Sci-Fi
                      </span>
                      <Link
                        to={"/Movie_Details/" + sim.id}
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
                      src="https://placehold.co/300x450/16213e/FFD700?text=Similar+1"
                      className="card-img-top"
                      alt="Movie"
                    />
                    <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                      <i className="bi bi-star-fill me-1"></i>8.1
                    </span>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title fw-bold">Gravity's End</h6>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-calendar3 me-1"></i>2023
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

export default Movie_Details;
