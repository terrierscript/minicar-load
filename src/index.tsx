import { Frame, Stack } from "framer"
import { motion } from "framer-motion"

import React from "react"
import { render } from "react-dom"
import { ThemeProvider, CSSReset } from "@chakra-ui/core"

import { useSpring, animated } from "react-spring"

// function Spring() {
//   const props = useSpring({
//     to: { color: "red" },
//     // from: { scale: 1 }
//     delay: 100,
//   })
//   console.log(props)
//   return <animated.div style={props}>I will fade in</animated.div>
// }
const Example = ({ startX }) => {
  return (
    <motion.div
      style={{
        width: "100%",
        background: "white",
        height: "30px",
        x: startX,
        border: "black 1px solid",
      }}
      animate={{
        x: `calc(150vw + ${startX})`,
      }}
      transition={{
        duration: 2,
        ease: "linear",
        loop: Infinity,
      }}
    />
  )
}
const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      {/* <Spring /> */}
      <Frame width="100vw" height="100vh">
        <Stack
          direction="horizontal"
          gap={1000}
          width={"500vw"}
          height={"50vh"}
          // distribution="space-evenly"
        >
          <Example startX={"-0vw"} />
          <Example startX={"-25vw"} />
          <Example startX={"-50vw"} />
          <Example startX={"-75vw"} />
          <Example startX={"-100vw"} />
        </Stack>
      </Frame>
      {/* <Example /> */}
    </ThemeProvider>
  )
}

render(<App />, document.querySelector("#root"))
