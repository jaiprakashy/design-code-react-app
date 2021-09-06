import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

import sketch from "../images/logo-sketch.png"
import figma from "../images/logo-figma.png"
import studio from "../images/logo-studio.png"
import framer from "../images/logo-framer.png"
import react from "../images/logo-react.png"
import swift from "../images/logo-swift.png"
import Card from "../components/Card"
import wallpaper from "../images/wallpaper.jpg"
import wallpaper2 from "../images/wallpaper2.jpg"
import wallpaper3 from "../images/wallpaper3.jpg"
import wallpaper4 from "../images/wallpaper4.jpg"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media(max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the video</Link> <br />
        <div className="Logos">
          <img src={sketch} width="50" />
          <img src={figma} width="50" />
          <img src={studio} width="50" />
          <img src={framer} width="50" />
          <img src={react} width="50" />
          <img src={swift} width="50" />
        </div>
        <Wave />
      </div>
      </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
          <Card 
          title="Design Systems"
          text= "10 sections"
          image={wallpaper} />
          <Card 
          title="React for Designers"
          text= "12 sections"
          image={wallpaper2} />
          <Card 
          title="Sound Design"
          text= "5 sections"
          image={wallpaper3} />
          <Card 
          title="ARKit 2"
          text= "10 sections"
          image={wallpaper4} />
        </div>
      </div>
      <Section 
      image={wallpaper2}
      logo={react}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful, and deploying your site with Netlify."
      />
      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell 
            title={cell.title}
            image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>

  </Layout>
)

export default IndexPage



