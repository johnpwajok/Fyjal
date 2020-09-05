import React, { Component } from "react";
//hashlink lib from https://github.com/rafgraph/react-router-hash-link
import { HashLink } from "react-router-hash-link";
import style from "./styles/style.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark navbar-custom">
        <a class="navbar-brand" href="#">
          Fyjal
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarText"
        >
          <ul class="navbar-nav  d-flex">
            <li class="nav-item active">
              <HashLink class="HashLink" smooth to="/#about">
                About
              </HashLink>
            </li>
            <li class="nav-item active">
              <HashLink class="HashLink" smooth to="/#pricing">
                Pricing
              </HashLink>
            </li>
            <li class="nav-item">
              <HashLink class="HashLink" smooth to="/#download">
                Download
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
