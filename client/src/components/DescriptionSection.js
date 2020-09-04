import React, { Component } from "react";
import companyIntro from "./CompanyIntro";

import "./styles/style.css";

export default class DescriptionSection extends Component {
  render() {
    return (
      <section class="plain-section" id="features">
        <div class="row">
          <section id="companyIntro">
            <center>
              <em>
                <h3 id="introMessage">
                  Fyjal introduces a new way of managing your finances
                </h3>
              </em>
            </center>
          </section>
          <div class="feature-box col-lg-4 col-md-12 col-sm-12">
            <center>
              <i class="icon fas fa-bolt fa-4x"></i>
              <h3 class="feature-title">Unrivalled Speed</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam
              </p>
            </center>
          </div>
          <div class="feature-box col-lg-4 col-md-12 col-sm-12">
            <center>
              <i class="icon fas fa-shield-alt fa-4x"></i>
              <h3 class="feature-title">Your security is our priority</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam,
              </p>
            </center>
          </div>
          <div class="feature-box col-lg-4 col-md-12 col-sm-12">
            <center>
              <i class="icon fas fa-globe-europe fa-4x"></i>
              <h3 class="feature-title">Available globally</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam,
              </p>
            </center>
          </div>
        </div>
      </section>
    );
  }
}
