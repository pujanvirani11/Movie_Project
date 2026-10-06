import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="bg-black text-white">
        <div className="bg-dark py-4 border-bottom border-secondary">
          <div className="container">
            <h1 className="fw-bold text-warning mb-1">
              <i className="bi bi-grid-fill me-2"></i>Movie Genres
            </h1>
            <p className="text-secondary mb-0">
              Browse movies by your favourite genre
            </p>
          </div>
        </div>

        <section className="py-5">
          <div className="container">
            <div className="row g-4">{
              Genres.map((gen)=>(
                <div className="col-6 col-md-4 col-lg-3">
                <div className="card bg-dark text-white h-100 shadow-lg border border-danger border-opacity-50 rounded-4 text-center p-3">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="rounded-circle bg-danger bg-opacity-25 p-3 mb-3 shadow">
                      <i className="bi bi-lightning-fill text-danger fs-2"></i>
                    </div>
                    <h5 className="fw-bold ">{gen.name}</h5>
                    <p className="text-secondary small">
                      {/* //not  */}
                    </p>
                    <Link
                      to={"/Movie_List/"+gen.id}
                      className="btn btn-outline-danger btn-sm mt-auto rounded-pill px-4"
                    >
                      Browse Movies
                    </Link>
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
