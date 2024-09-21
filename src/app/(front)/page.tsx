import React from "react";
import Hero from "../../../components/Frontend/Hero";
import MegaMenu from "../../../components/Frontend/MegaMenu";
import Brands from "../../../components/Frontend/Brands";
import SectionServices from "../../../components/Frontend/SectionServices";
export default function Home(){
  return(
    <section className="">
      <Hero/>
      <Brands/>
      <SectionServices/>
    </section>
  )
}