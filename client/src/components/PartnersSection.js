import React, { Component } from "react";

import creditCardRow from "./images/creditCardRow.png";
import bizinsider from "./images/bizinsider.png";
import mashable from "./images/mashable.png";
import techcrunch from "./images/TechCrunch.png";
import tnw from "./images/tnw.png";

export default class TestimonialSection extends Component {
  render() {
    return (
      <div id="partnersSection">
        <center>
          <br></br>
          <h2 id="partnersTitle">Our Partners</h2>
          <div>
            <img
              className="d-block w-50"
              src={creditCardRow}
              alt="First slide"
            />
          </div>
        </center>
        {/*  */}
        {/* featured in section */}
        {/*  */}

        <br></br>
        <section class="featuresSection" id="press">
          <img class="press-logo" src={techcrunch} alt="tc-logo" />
          <img class="press-logo" src={tnw} alt="tnw-logo" />
          <img class="press-logo" src={bizinsider} alt="biz-insider-logo" />
          <img class="press-logo" src={mashable} alt="mashable-logo" />
        </section>
      </div>
    );
  }
}
