import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Upcoming() {
  const [upcoming, setUpcoming] = useState([]);
  const upcomingapi = import.meta.env.VITE_API+"/upcoming";

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="bg-black text-white">
        {/* <!-- PAGE HEADER --> */}
        <div className="bg-dark py-4 border-bottom border-secondary">
          <div className="container">
            <h1 className="fw-bold text-warning mb-1">
              <i className="bi bi-calendar-event me-2"></i>Upcoming Movies
            </h1>
            <p className="text-secondary mb-0">
              Get ready for these exciting upcoming releases
            </p>
          </div>
        </div>

        {/* <!-- MOVIES GRID --> */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {upcoming.map((upc) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card bg-dark text-white h-100 shadow-lg border border-warning border-opacity-25 rounded-4 overflow-hidden">
                    <div className="row g-0">
                      <div className="col-4">
                        <img
                          src={
                            "https://image.tmdb.org/t/p/w500" + upc.poster_path
                          }
                          className="img-fluid h-100 rounded-start-4"
                          alt="Movie"
                        />
                      </div>
                      <div className="col-8">
                        <div className="card-body d-flex flex-column h-100">
                          <span className="badge bg-warning text-dark align-self-start mb-2">
                            Coming Soon
                          </span>
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
                          <p className="text-secondary small">
                            {upc.overview.length > 100
                              ? upc.overview.slice(0, 100) + "..."
                              : upc.overview}
                          </p>
                          <Link
                            to={"/Movie_Details/" + upc.id}
                            className="btn btn-outline-warning btn-sm mt-auto rounded-pill"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="col-12 col-md-6 col-lg-4">
                <div className="card bg-dark text-white h-100 shadow-lg border border-warning border-opacity-25 rounded-4 overflow-hidden">
                  <div className="row g-0">
                    <div className="col-4">
                      <img
                        src="https://placehold.co/200x300/1b1b2f/FFD700?text=Film"
                        className="img-fluid h-100 rounded-start-4"
                        alt="Movie"
                        
                      />
                    </div>
                    <div className="col-8">
                      <div className="card-body d-flex flex-column h-100">
                        <span className="badge bg-warning text-dark align-self-start mb-2">
                          Coming Soon
                        </span>
                        <h6 className="card-title fw-bold">Eternal Flame</h6>
                        <p className="text-muted small mb-1">
                          <i className="bi bi-calendar3 me-1"></i>January 15, 2025
                        </p>
                        <span className="badge bg-danger mb-2 align-self-start">
                          Thriller
                        </span>
                        <p className="text-secondary small">
                          A story of revenge, redemption, and survival in a
                          world turned upside down by betrayal.
                        </p>
                        <a
                          href="movie-details.html"
                          className="btn btn-outline-warning btn-sm mt-auto rounded-pill"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
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

export default Upcoming;
