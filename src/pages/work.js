import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { useTransitionStore } from "gatsby-plugin-transitions"

import SEO from "../components/seo"

import "../styles/work.css"

const WorkPage = ({ data }) => {
  const [, dispatch] = useTransitionStore()

  useEffect(() => {
    let dispatched = false

    const onWheel = ({ deltaY }) => {
      if (deltaY < 0 && !dispatched) {
        dispatched = true
        dispatch({
          type: "NAVIGATE",
          to: "/",
        })
      }
    }

    window.addEventListener("wheel", onWheel)
    return () => {
      window.removeEventListener("wheel", onWheel)
    }
  })

  return (
    <div className="work">
      <SEO title="Work" />
      <p>
        Hi! I'm Kunal. I am an undergraduate student in Computer Science and Engineering at the{" "}
        <a href="http://www.iitj.ac.in" target="_blank" rel="noreferrer">
          Indian Institute of Technology, Jodhpur
        </a>
        .<br />
        <br />I have always been keenly interested in computer science. I have spent a fair share of my time on
        Competitive Programming, open-source work in Web and App Development, Machine Learning in NLP, Blockchain with
        Ethereum, RasPi IoT experiments, and, in general, learning about new technologies.
        <br />
        <br />
        Apart from work, I love to play basketball (I can dunk as you see :P), I follow global history on Reddit, and I
        design web UIs.
      </p>
    </div>
  )
}
export default WorkPage

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
