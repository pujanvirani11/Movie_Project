import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Popular() {
  const popularapi = import.meta.env.VITE_API+"/popular";

  const [popular, setPopular] = useState([]);

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
  }, []);

  return (
    <>
      <div className="bg-black text-white">
        {/* <!-- PAGE HEADER --> */}
        <div className="bg-dark py-4 border-bottom border-secondary">
          <div className="container">
            <h1 className="fw-bold text-warning mb-1">
              <i className="bi bi-fire me-2"></i>Popular Movies
            </h1>
            <p className="text-secondary mb-0">
              Discover the most trending and watched movies right now
            </p>
          </div>
        </div>

        {/* <!-- MOVIES GRID --> */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {/* <!-- Cards 1-8 --> */}
              {popular.map((pop) => (
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
                        <i className="bi bi-calendar3 me-1"></i>
                        {pop.release_date}
                      </p>
                      <span className="badge bg-danger mb-2 align-self-start">
                        Action
                      </span>
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
            <img src="https://placehold.co/300x450/16213e/FFD700?text=Popular+1" className="card-img-top" alt="Movie"/>
            <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2"><i className="bi bi-star-fill me-1"></i>8.5</span>
          </div>
          <div className="card-body d-flex flex-column">
            <h6 className="card-title fw-bold">The Dark Universe</h6>
            <p className="text-muted small mb-1"><i className="bi bi-calendar3 me-1"></i>2024</p>
            <span className="badge bg-danger mb-2 align-self-start">Action</span>
            <a href="movie-details.html" className="btn btn-warning btn-sm mt-auto rounded-pill">View Details</a>
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

export default Popular;
