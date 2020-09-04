import React, { Component } from "react";
import bankingPhone from "./images/bankingPhone.png";
import "./styles/style.css";

export default class HeadSection extends Component {
  render() {
    return (
      <section class="heading-section" id="title">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12">
              <h1 class="intro-text">Manage your finances better than ever.</h1>
              <br></br>
              <h1 class="intro-text">Download Fyjal today!</h1>
              <button type="button" class="btn btn-dark btn-lg download-button">
                <i class="fab fa-apple"></i> Download
              </button>
              <button
                type="button"
                class="btn btn-outline-light btn-lg download-button"
              >
                <i class="fab fa-google-play"></i> Download
              </button>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
              <img class="title-image" src={bankingPhone} alt="app image" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
