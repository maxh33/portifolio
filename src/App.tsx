import React from 'react'
import EstiloGlobal, { Container } from './styles'
import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
