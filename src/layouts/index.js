import React, { useRef, useState, useEffect } from "react"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Header from "../components/header"
import DunkVideo from "../videos/kunal-dunk.mp4"

import "../styles/layout.css"
import { useSpring, animated } from "react-spring"

const Layout = ({ location, children }) => {
  const videoRef = useRef(null)
  const [videoVisible, setVideoVisibility] = useState(location.pathname === "/")

  const videoStyle = useSpring({
    to: { transform: videoVisible ? "translateY(0)" : "translateY(-150px)", opacity: videoVisible ? 0.6 : 0 },
    from: { transform: videoVisible ? "translateY(-150px)" : "translateY(0)", opacity: videoVisible ? 0 : 0.6 },
  })

  useEffect(() => {
    if (location.pathname === "/") {
      if (videoRef.current.play) videoRef.current.play()
      setVideoVisibility(true)
    } else {
      setVideoVisibility(false)
      if (videoRef.current.pause) videoRef.current.pause()
    }
  }, [location.pathname])

  return (
    <>
      <Header location={location} />
      <TransitionProvider
        location={location}
        enter={{
          opacity: 0,
          transform: "translate(0, 150px)",
        }}
        usual={{
          opacity: 1,
          transform: "translate(0, 0)",
        }}
        leave={{
          opacity: 0,
          transform: "translate(0, -150px)",
        }}
      >
        <TransitionViews>{children}</TransitionViews>
      </TransitionProvider>
      <animated.video style={videoStyle} autoPlay muted loop className="dunk-video desktop" ref={videoRef}>
        <source src={DunkVideo} type="video/mp4" />
      </animated.video>
    </>
  )
}

export default Layout
