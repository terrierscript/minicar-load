import React from "react"
import { render } from "react-dom"
import { ThemeProvider, CSSReset, Box, Stack } from "@chakra-ui/core"
import Anime from "react-anime"

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box bg="gray.700" width="100vw" height="100vh">
        <Stack>
          <Anime
            translateX={["-30vw", "200vw"]}
            // opacity={[1, 0.5]}
            // delay={1000}
            easing="linear"
            duration={800}
            loop={Infinity}
          >
            <Box mt="80" bg="tomato" width="30vw" height="20vh"></Box>
          </Anime>
        </Stack>
        <Stack>
          <Anime
            translateX={["-50vw", "100vw"]}
            // opacity={[1, 0.5]}
            // delay={1000}
            easing="linear"
            duration={1000}
            loop={Infinity}
          >
            <Box mt="80" bg="white" width="50vw" height="8vh"></Box>
          </Anime>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

render(<App />, document.querySelector("#root"))
