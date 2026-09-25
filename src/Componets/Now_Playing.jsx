import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Now_Playing() {
  const [nowplay, setNowplaying] = useState([]);
  const nowplayingapi = import.meta.env.VITE_API+"/now_playing";

  useEffect(() => {
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
      <div class="bg-black text-white">
        <div class="bg-dark py-4 border-bottom border-secondary">
          <div class="container">
            <h1 class="fw-bold text-warning mb-1">
              <i class="bi bi-play-circle-fill me-2"></i>Now Playing
            </h1>
            <p class="text-secondary mb-0">
              Currently showing in theatres near you
            </p>
          </div>
        </div>

        <section class="py-5">
          <div class="container">
            <div class="row g-4">
              {nowplay.map((now) => (
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="card bg-dark text-white h-100 shadow-lg border border-success border-opacity-50 rounded-4 overflow-hidden">
                    <div class="position-relative">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500" + now.poster_path
                        }
                        class="card-img-top"
                        alt="Movie"
                      />
                      <span class="position-absolute top-0 end-0 badge bg-warning text-dark m-2">
                        <i class="bi bi-star-fill me-1"></i>
                        {now.vote_average}
                      </span>
                      <span class="position-absolute top-0 start-0 badge bg-success m-2">
                        <i class="bi bi-dot"></i>Live
                      </span>
                    </div>
                    <div class="card-body d-flex flex-column">
                      <h6 class="card-title fw-bold"> {now.original_title}</h6>
                      <p class="text-muted small mb-1">
                        <i class="bi bi-calendar3 me-1"></i> {now.release_date}
                        &nbsp;|&nbsp; <i class="bi bi-clock me-1"></i>2h 5m
                      </p>
                      <span class="badge bg-primary mb-2 align-self-start">
                        Sci-Fi
                      </span>
                      <p class="text-secondary small">
                        {now.overview.length > 100
                              ? now.overview.slice(0, 100) + "..."
                              : now.overview}
                      </p>
                      <Link
                        to={"/Movie_Details/" + now.id}
                        class="btn btn-warning btn-sm mt-auto rounded-pill"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div class="col-6 col-md-4 col-lg-3">
        <div class="card bg-dark text-white h-100 shadow-lg border border-success border-opacity-50 rounded-4 overflow-hidden">
          <div class="position-relative">
            <img src="https://placehold.co/300x450/1b1b2f/FFD700?text=Now+1" class="card-img-top" alt="Movie"/>
            <span class="position-absolute top-0 end-0 badge bg-warning text-dark m-2"><i class="bi bi-star-fill me-1"></i>8.3</span>
            <span class="position-absolute top-0 start-0 badge bg-success m-2"><i class="bi bi-dot"></i>Live</span>
          </div>
          <div class="card-body d-flex flex-column">
            <h6 class="card-title fw-bold">Final Frontier</h6>
            <p class="text-muted small mb-1"><i class="bi bi-calendar3 me-1"></i>2024 &nbsp;|&nbsp; <i class="bi bi-clock me-1"></i>2h 5m</p>
            <span class="badge bg-primary mb-2 align-self-start">Sci-Fi</span>
            <p class="text-secondary small">Humanity's final mission to save Earth leads a crew to the edge of the galaxy.</p>
            <a href="movie-details.html" class="btn btn-warning btn-sm mt-auto rounded-pill">View Details</a>
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

export default Now_Playing;
