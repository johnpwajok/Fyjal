import React, { Component } from "react";

export default class TestimonialSection extends Component {
  render() {
    return (
      <div>
        <section class="coloured-section" id="testimonials">
          <div
            id="testimonial-carousel"
            class="carousel slide"
            data-ride="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active container-fluid">
                <h2 class="testimonial-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam,
                </h2>
                <img
                  class="testimonial-image"
                  src="images/dog-img.jpg"
                  alt="dog-profile"
                />
                <em>Pebbles, New York</em>
              </div>
              <div class="carousel-item container-fluid">
                <h2 class="testimonial-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam,
                </h2>
                <img
                  class="testimonial-image"
                  src="images/lady-img.jpg"
                  alt="lady-profile"
                />
                <em>Beverly, Illinois</em>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#testimonial-carousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#testimonial-carousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}
