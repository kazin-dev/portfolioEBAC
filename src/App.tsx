import Projetos from './containers/Projetos/projetos'
import Sidebar from './containers/Sidebar/indexSidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal from './styles'
import { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal/>
      <Container>
        <Sidebar/>
          <main>
            <Sobre/>
            <Projetos/>
          </main>
      </Container>
    </>
  )
}

export default App
