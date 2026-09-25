import React, { useEffect, useState } from "react";

function Genres() {
  
    const [Genres, setGenres] = useState([]);
    const Genresapi = "https://api.themoviedb.org/3/genre/movie/list";
  
    useEffect(() => {
      // now playing api fetch
      fetch(Genresapi, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + import.meta.env.VITE_TOKEN,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setGenres(res.genres));
    }, []);
  return (
    <>
      <div class="bg-black text-white">
        <div class="bg-dark py-4 border-bottom border-secondary">
          <div class="container">
            <h1 class="fw-bold text-warning mb-1">
              <i class="bi bi-grid-fill me-2"></i>Movie Genres
            </h1>
            <p class="text-secondary mb-0">
              Browse movies by your favourite genre
            </p>
          </div>
        </div>

        <section class="py-5">
          <div class="container">
            <div class="row g-4">{
              Genres.map((gen)=>(
                <div class="col-6 col-md-4 col-lg-3">
                <div class="card bg-dark text-white h-100 shadow-lg border border-danger border-opacity-50 rounded-4 text-center p-3">
                  <div class="card-body d-flex flex-column align-items-center">
                    <div class="rounded-circle bg-danger bg-opacity-25 p-3 mb-3 shadow">
                      <i class="bi bi-lightning-fill text-danger fs-2"></i>
                    </div>
                    <h5 class="fw-bold ">{gen.name}</h5>
                    <p class="text-secondary small">
                      {/* //not  */}
                    </p>
                    <a
                      href="popular.html"
                      class="btn btn-outline-danger btn-sm mt-auto rounded-pill px-4"
                    >
                      Browse Movies
                    </a>
                  </div>
                </div>
              </div>
              ))
              }
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Genres;
