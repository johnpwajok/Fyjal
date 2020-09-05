import React, { Component } from "react";
import HeadSection from "./HeadSection";
import companyIntro from "./CompanyIntro";
import DescriptionSection from "./DescriptionSection";
import PartnersSection from "./PartnersSection";
import PricingSection from "./PricingSection";
import InfoCarousel from "./InfoCarousel";
import Footer from "./Footer";
import CompanyIntro from "./CompanyIntro";

export default class Landing extends Component {
  render() {
    return (
      <div id="container">
        <HeadSection></HeadSection>
        <DescriptionSection></DescriptionSection>
        <InfoCarousel></InfoCarousel>
        <PartnersSection></PartnersSection>
        <PricingSection></PricingSection>

        <Footer></Footer>
        <br></br>
      </div>
    );
  }
}
