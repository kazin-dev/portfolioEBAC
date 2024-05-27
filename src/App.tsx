// src/App.tsx
import { Container } from './styles';
import Projetos from './containers/Projetos';
import Sidebar from './containers/Sidebar/indexSidebar';
import Sobre from './containers/Sobre';
import EstiloGlobal from './styles';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  );
}

export default App;
