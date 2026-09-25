import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Top_Rated() {
  const [toprated, setToprated] = useState([]);
  const topratedapi = import.meta.env.VITE_API+"/top_rated";

  useEffect(() => {
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
  }, []);
  return (
    <>
      <body className="bg-black text-white">
        <div className="bg-dark py-4 border-bottom border-secondary">
          <div className="container">
            <h1 className="fw-bold text-warning mb-1">
              <i className="bi bi-trophy-fill me-2"></i>Top Rated Movies
            </h1>
            <p className="text-secondary mb-0">
              The highest rated movies of all time
            </p>
          </div>
        </div>

        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {toprated.map((top) => (
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
                      <span className="position-absolute top-0 start-0 badge bg-secondary m-2">
                        {/* #4 */}
                      </span>
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title fw-bold">
                        {top.original_title}
                      </h6>
                      <p className="text-muted small mb-1">
                        <i className="bi bi-calendar3 me-1"></i>{top.release_date}
                      </p>
                      <span className="badge bg-primary mb-2 align-self-start">
                        Sci-Fi
                      </span>
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
              {/* <!-- Cards Grid for #4 - #8 --> */}
              {/* <div className="col-6 col-md-4 col-lg-3">
        <div className="card bg-dark text-white h-100 shadow-lg border border-secondary rounded-4 overflow-hidden">
          <div className="position-relative">
            <img src="https://placehold.co/300x450/2d1b69/FFD700?text=Top+4" className="card-img-top" alt="Movie"/>
            <span className="position-absolute top-0 end-0 badge bg-warning text-dark m-2"><i className="bi bi-star-fill me-1"></i>8.9</span>
            <span className="position-absolute top-0 start-0 badge bg-secondary m-2">#4</span>
          </div>
          <div className="card-body d-flex flex-column">
            <h6 className="card-title fw-bold">Lost in Cosmos</h6>
            <p className="text-muted small mb-1"><i className="bi bi-calendar3 me-1"></i>2022</p>
            <span className="badge bg-primary mb-2 align-self-start">Sci-Fi</span>
            <a href="movie-details.html" className="btn btn-warning btn-sm mt-auto rounded-pill">View Details</a>
          </div>
        </div>
      </div> */}
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Top_Rated;
