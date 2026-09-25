import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        {/* <!-- NAVBAR --> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-lg">
          <div className="container">
            <Link className="navbar-brand fw-bold fs-4 text-warning" to="/">
              <i className="bi bi-camera-reels-fill me-2"></i>VP Cinemas
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto gap-1">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-warning fw-semibold"
                    to="/"
                  >
                    <i className="bi bi-house-fill me-1"></i>Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Popular">
                    <i className="bi bi-fire me-1"></i>Popular
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Upcoming">
                    <i className="bi bi-calendar-event me-1"></i>Upcoming
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Top_Rated">
                    <i className="bi bi-star-fill me-1"></i>Top Rated
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Now_Playing">
                    <i className="bi bi-play-circle-fill me-1"></i>Now Playing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Genres">
                    <i className="bi bi-grid-fill me-1"></i>Genres
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <form class="d-flex" role="search">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Contact">
                    <i className="bi bi-envelope-fill me-1"></i>Contact
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
      {/* <!-- FOOTER --> */}
      <footer className="bg-dark border-top border-secondary pt-5 pb-3">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="text-warning fw-bold mb-3">
                <i className="bi bi-camera-reels-fill me-2"></i>VP Cinemas
              </h5>
              <p className="text-secondary">
                Your ultimate destination for movies. Discover the best films
                across all genres. Premium cinematic experience at your
                fingertips.
              </p>
              <div className="d-flex gap-3 mt-3">
                <Link to="/" className="text-warning fs-4">
                  <i className="bi bi-facebook"></i>
                </Link>
                <Link to="/" className="text-warning fs-4">
                  <i className="bi bi-twitter-x"></i>
                </Link>
                <Link to="/" className="text-warning fs-4">
                  <i className="bi bi-instagram"></i>
                </Link>
                <Link to="/" className="text-warning fs-4">
                  <i className="bi bi-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="col-md-2 col-6">
              <h6 className="text-warning fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    to="/Home"
                    className="text-secondary text-decoration-none"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/Popular"
                    className="text-secondary text-decoration-none"
                  >
                    Popular
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="upcoming.html"
                    className="text-secondary text-decoration-none"
                  >
                    Upcoming
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/Top_rated"
                    className="text-secondary text-decoration-none"
                  >
                    Top Rated
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <h6 className="text-warning fw-bold mb-3">Explore</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    to="/Now_Playing"
                    className="text-secondary text-decoration-none"
                  >
                    Now Playing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/Genres"
                    className="text-secondary text-decoration-none"
                  >
                    Genres
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="/Contact"
                    className="text-secondary text-decoration-none"
                  >
                    Contact
                  </Link>
                </li>
                {/* <li className="mb-2">
                  <Link
                    to="/Movie_Details/:id"
                    className="text-secondary text-decoration-none"
                  >
                    Movie Details
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className="text-warning fw-bold mb-3">About VP Cinemas</h6>
              <p className="text-secondary small">
                VP Cinemas brings you the finest movie experience. Explore
                thousands of movies across all genres with detailed information,
                ratings, and trailers.
              </p>
              <span className="badge bg-warning text-dark">
                🎬 Premium Movie Experience
              </span>
            </div>
          </div>
          <hr className="border-secondary mt-4" />
          <p className="text-center text-secondary small mb-0">
            &copy; 2026 VP Cinemas. All Rights Reserved. Made with{" "}
            <i className="bi bi-heart-fill text-danger"></i> for Movie Lovers.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Layout;
