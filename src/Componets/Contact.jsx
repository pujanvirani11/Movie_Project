import React from 'react'

function Contact() {
  return (
    <>
    <div class="bg-black text-white">



<div class="bg-dark py-4 border-bottom border-secondary">
  <div class="container">
    <h1 class="fw-bold text-warning mb-1"><i class="bi bi-envelope-fill me-2"></i>Contact Us</h1>
    <p class="text-secondary mb-0">We'd love to hear from you. Reach out anytime!</p>
  </div>
</div>

<section class="py-5">
  <div class="container">
    <div class="row g-5">

      {/* <!-- Contact Info Cards --> */}
      <div class="col-md-4">
        <h4 class="text-warning fw-bold mb-4">Get In Touch</h4>

        <div class="card bg-dark border border-secondary rounded-4 shadow-lg mb-3 p-3">
          <div class="d-flex align-items-center gap-3">
            <div class="rounded-circle bg-warning bg-opacity-25 p-3 shadow">
              <i class="bi bi-geo-alt-fill text-warning fs-4"></i>
            </div>
            <div>
              <h6 class="text-warning fw-bold mb-1">Address</h6>
              <p class="text-secondary small mb-0">VP Cinemas HQ, Film City Road,<br/>Mumbai, Maharashtra 400001</p>
            </div>
          </div>
        </div>

        <div class="card bg-dark border border-secondary rounded-4 shadow-lg mb-3 p-3">
          <div class="d-flex align-items-center gap-3">
            <div class="rounded-circle bg-warning bg-opacity-25 p-3 shadow">
              <i class="bi bi-telephone-fill text-warning fs-4"></i>
            </div>
            <div>
              <h6 class="text-warning fw-bold mb-1">Phone</h6>
              <p class="text-secondary small mb-0">+91 98765 43210<br/>+91 99887 76655</p>
            </div>
          </div>
        </div>

        <div class="card bg-dark border border-secondary rounded-4 shadow-lg mb-3 p-3">
          <div class="d-flex align-items-center gap-3">
            <div class="rounded-circle bg-warning bg-opacity-25 p-3 shadow">
              <i class="bi bi-envelope-fill text-warning fs-4"></i>
            </div>
            <div>
              <h6 class="text-warning fw-bold mb-1">Email</h6>
              <p class="text-secondary small mb-0">hello@vpcinemas.com<br/>support@vpcinemas.com</p>
            </div>
          </div>
        </div>

        <div class="card bg-dark border border-secondary rounded-4 shadow-lg p-3">
          <div class="d-flex align-items-center gap-3">
            <div class="rounded-circle bg-warning bg-opacity-25 p-3 shadow">
              <i class="bi bi-clock-fill text-warning fs-4"></i>
            </div>
            <div>
              <h6 class="text-warning fw-bold mb-1">Working Hours</h6>
              <p class="text-secondary small mb-0">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat - Sun: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* <!-- Social Links --> */}
        <h6 class="text-warning fw-bold mt-4 mb-3">Follow Us</h6>
        <div class="d-flex gap-3">
          <a href="#" class="btn btn-outline-warning rounded-circle p-2"><i class="bi bi-facebook fs-5"></i></a>
          <a href="#" class="btn btn-outline-warning rounded-circle p-2"><i class="bi bi-twitter-x fs-5"></i></a>
          <a href="#" class="btn btn-outline-warning rounded-circle p-2"><i class="bi bi-instagram fs-5"></i></a>
          <a href="#" class="btn btn-outline-warning rounded-circle p-2"><i class="bi bi-youtube fs-5"></i></a>
        </div>
      </div>

      {/* <!-- Contact Form --> */}
      <div class="col-md-8">
        <div class="card bg-dark border border-secondary rounded-4 shadow-lg p-4">
          <h4 class="text-warning fw-bold mb-4"><i class="bi bi-send-fill me-2"></i>Send Us a Message</h4>

          <form novalidate>
            <div class="row g-3">
              {/* <!-- Full Name --> */}
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="text" class="form-control bg-black text-white border-secondary" id="fullName" placeholder="Full Name" required minlength="3" maxlength="100"/>
                  <label for="fullName" class="text-secondary"><i class="bi bi-person-fill me-1"></i>Full Name *</label>
                </div>
              </div>

              {/* <!-- Email --> */}
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="email" class="form-control bg-black text-white border-secondary" id="email" placeholder="Email Address" required maxlength="100"/>
                  <label for="email" class="text-secondary"><i class="bi bi-envelope-fill me-1"></i>Email Address *</label>
                </div>
              </div>

              {/* <!-- Phone --> */}
              <div class="col-md-6">
                <div class="form-floating">
                  <input type="tel" class="form-control bg-black text-white border-secondary" id="phone" placeholder="Phone Number" minlength="10" maxlength="15"/>
                  <label for="phone" class="text-secondary"><i class="bi bi-telephone-fill me-1"></i>Phone Number</label>
                </div>
              </div>

              {/* <!-- Subject --> */}
              <div class="col-md-6">
                <div class="form-floating">
                  <select class="form-select bg-black text-white border-secondary" id="subject" required>
                    <option value="" selected>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                  <label for="subject" class="text-secondary"><i class="bi bi-tag-fill me-1"></i>Subject *</label>
                </div>
              </div>

              {/* <!-- Message --> */}
              <div class="col-12">
                <div class="form-floating">
                  <textarea class="form-control bg-black text-white border-secondary" id="message" placeholder="Your Message" required minlength="20" maxlength="1000" rows="5"></textarea>
                  <label for="message" class="text-secondary"><i class="bi bi-chat-text-fill me-1"></i>Your Message *</label>
                </div>
                <div class="text-end mt-1">
                  <small class="text-secondary">Max 1000 characters</small>
                </div>
              </div>

              {/* <!-- Submit --> */}
              <div class="col-12 d-flex gap-3 flex-wrap">
                <button type="submit" class="btn btn-warning btn-lg rounded-pill px-5 fw-bold shadow">
                  <i class="bi bi-send-fill me-2"></i>Send Message
                </button>
                <button type="reset" class="btn btn-outline-secondary btn-lg rounded-pill px-4">
                  <i class="bi bi-arrow-counterclockwise me-2"></i>Reset
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

{/* <!-- FAQ SECTION --> */}
<section class="py-5 bg-dark">
  <div class="container">
    <h3 class="text-warning fw-bold mb-4 text-center"><i class="bi bi-patch-question-fill me-2"></i>Frequently Asked Questions</h3>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item bg-dark border border-secondary rounded-4 mb-3">
            <h2 class="accordion-header">
              <button class="accordion-button bg-dark text-warning collapsed rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                How do I find movies on VP Cinemas?
              </button>
            </h2>
            <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body text-secondary">
                You can browse movies by category (Popular, Top Rated, Upcoming, Now Playing) or by genre. Use the navigation menu to explore all sections.
              </div>
            </div>
          </div>
          <div class="accordion-item bg-dark border border-secondary rounded-4 mb-3">
            <h2 class="accordion-header">
              <button class="accordion-button bg-dark text-warning collapsed rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                Can I watch movies directly on VP Cinemas?
              </button>
            </h2>
            <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body text-secondary">
                VP Cinemas is a movie discovery platform. We provide detailed movie information, ratings, and trailers. For streaming, we link to official platforms.
              </div>
            </div>
          </div>
          <div class="accordion-item bg-dark border border-secondary rounded-4 mb-3">
            <h2 class="accordion-header">
              <button class="accordion-button bg-dark text-warning collapsed rounded-4" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                How are movie ratings calculated?
              </button>
            </h2>
            <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div class="accordion-body text-secondary">
                Ratings are powered by TMDB (The Movie Database), aggregated from thousands of verified user reviews worldwide.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    </>
  )
}

export default Contact
