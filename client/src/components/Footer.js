import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <hr></hr>
        <div class="container-fluid">
          <i class="social-media-icons fab fa-twitter"></i>
          <i class="social-media-icons fab fa-facebook-f"></i>
          <i class="social-media-icons fab fa-instagram"></i>
          <i class="social-media-icons fas fa-envelope"></i>

          <p>© Copyright 2020 Fyjal</p>
        </div>
      </div>
    );
  }
}
