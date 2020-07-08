import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { useTransitionStore } from "gatsby-plugin-transitions"

import Img from "gatsby-image"
import SEO from "../components/seo"
import DunkVideo from "../videos/kunal-dunk.mp4"

import "../styles/index.css"

const IndexPage = ({ data }) => {
  const [, dispatch] = useTransitionStore()

  useEffect(() => {
    let dispatched = false

    const onWheel = ({ deltaY }) => {
      if (deltaY > 0 && !dispatched) {
        dispatched = true
        dispatch({
          type: "NAVIGATE",
          to: "/work",
        })
      }
    }

    window.addEventListener("wheel", onWheel)
    return () => {
      window.removeEventListener("wheel", onWheel)
    }
  })

  return (
    <div className="home">
      <SEO title="Home" />
      <div>
        <h1 className="name">Kunal Tawatia</h1>
        <h3 className="name-hindi">
          कुनाल तेवत्तिया{" "}
          <span role="img" aria-label="ind">
            🇮🇳
          </span>
        </h3>
        <div className="profile-description">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} className="profile-img desktop" />
          <Img fluid={data.placeholderImageColor.childImageSharp.fluid} className="profile-img mobile" />

          <p>
            Hi! I'm Kunal. I am an undergraduate student in Computer Science and Engineering at the{" "}
            <a href="http://www.iitj.ac.in" target="_blank" rel="noreferrer">
              Indian Institute of Technology, Jodhpur
            </a>
            .<br />
            <br />I have always been keenly interested in computer science. I have spent a fair share of my time on
            Competitive Programming, open-source work in Web and App Development, Machine Learning in NLP, Blockchain
            with Ethereum, RasPi IoT experiments, and, in general, learning about new technologies.
            <br />
            <br />
            Apart from work, I love to play basketball (I can dunk as you see :P), I follow global history on Reddit,
            and I design web UIs.
          </p>
        </div>
        <video autoPlay muted loop className="dunk-video mobile">
          <source src={DunkVideo} type="video/mp4" />
        </video>
      </div>

      <div className="home-footer" />
    </div>
  )
}
export default IndexPage

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "kunal-2-bw.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    placeholderImageColor: file(relativePath: { eq: "kunal-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
