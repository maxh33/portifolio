import About from './containers/About'
import Sidebar from './containers/Sidebar'
import EstiloGlobal from './styles'

function App(): JSX.Element {
  return (
    <>
      <EstiloGlobal />
      <Sidebar />
      <main>
        <About />
        <section>projects</section>
      </main>
    </>
  )
}

export default App
