import React, { Component } from "react";

export default class PricingSection extends Component {
  render() {
    return (
      <div>
        <section class="white-section" id="pricing">
          <h2 class="pricing-header">Select a plan based on your needs</h2>

          <div class="row">
            <div class="pricing-column col-lg-4 col-md-6">
              <div class="card">
                <div class="card-header freeHeader">
                  <h3 class="planType">Free</h3>
                </div>
                <div class="card-body">
                  <h2>Free</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-outline-dark"
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div class="pricing-column col-lg-4 col-md-6">
              <div class="card">
                <div class="card-header ">
                  <h3 class="planType">Gold</h3>
                </div>
                <div class="card-body">
                  <h2>$25 / month</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-warning goldButton"
                  >
                    Upgrade
                  </button>
                </div>
              </div>
            </div>

            <div class="pricing-column col-lg-4 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="planType">Platinum</h3>
                </div>
                <div class="card-body">
                  <h2>$50 / month</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <p>Lorem ipsum dolor sit amet</p>
                  <button
                    type="button"
                    class="btn btn-lg btn-block btn-dark platinumButton"
                  >
                    Upgrade
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
