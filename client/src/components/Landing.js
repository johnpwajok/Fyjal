import React, { Component } from "react";
import HeadSection from "./HeadSection";
import companyIntro from "./CompanyIntro";
import DescriptionSection from "./DescriptionSection";
import PartnersSection from "./PartnersSection";
import PricingSection from "./PricingSection";
import InfoCarousel from "./InfoCarousel";
import Footer from "./Footer";
import CompanyIntro from "./CompanyIntro";
import Cta from "./Cta";

export default class Landing extends Component {
  render() {
    return (
      <div id="container">
        <div>
          <HeadSection></HeadSection>
        </div>

        <div id="about">
          <DescriptionSection></DescriptionSection>
        </div>
        <div>
          <InfoCarousel></InfoCarousel>
        </div>
        <div>
          <PartnersSection></PartnersSection>
        </div>
        <div id="pricing">
          <PricingSection id="pricingSection"></PricingSection>
        </div>
        <div id="download">
          <Cta></Cta>
        </div>
        <div>
          <Footer></Footer>
        </div>
        <br></br>
      </div>
    );
  }
}
