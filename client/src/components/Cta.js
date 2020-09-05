import React, { Component } from "react";

export default class Cta extends Component {
  render() {
    return (
      <div>
        <section id="cta">
          <h3 class="intro-text">
            Take control of your financial future today!
          </h3>
          <button type="button" class="btn btn-dark btn-lg download-button">
            <i class="fab fa-apple"></i> Download
          </button>
          <button type="button" class="btn btn-light btn-lg download-button">
            <i class="fab fa-google-play"></i> Download
          </button>
        </section>
      </div>
    );
  }
}
