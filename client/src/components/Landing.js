import React, { Component } from "react";
import HeadSection from "./HeadSection";
import companyIntro from "./CompanyIntro";
import DescriptionSection from "./DescriptionSection";
import TestimonialSection from "./TestimonialSection";
import PricingSection from "./PricingSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import CompanyIntro from "./CompanyIntro";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <HeadSection></HeadSection>
        <DescriptionSection></DescriptionSection>
        <TestimonialSection></TestimonialSection>
        <PricingSection></PricingSection>
        <ContactSection></ContactSection>
        <Footer></Footer>
        <br></br>
      </div>
    );
  }
}
