import { ThemeProvider } from 'styled-components'

import React, { useState } from 'react'
import EstiloGlobal, { Container } from './styles'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(false)

  function toggleTheme() {
    setIsUsingDarkTheme(!isUsingDarkTheme)
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
