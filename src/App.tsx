import Sidebar from './containers/Sidebar'
import EstiloGlobal from './styles'

function App(): JSX.Element {
  return (
    <>
      <EstiloGlobal />
      <Sidebar />
      <main>
        <section>about</section>
        <section>projects</section>
      </main>
    </>
  )
}

export default App
